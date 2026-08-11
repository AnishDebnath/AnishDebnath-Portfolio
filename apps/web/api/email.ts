import { config as loadEnv } from 'dotenv';
import { fileURLToPath } from 'node:url';
import type { IncomingMessage, ServerResponse } from 'node:http';

// Load .env from apps/web regardless of the process cwd — local dev only.
// On Vercel env vars are injected directly by the platform, and resolving a
// local file path inside the serverless bundle would crash at cold start.
if (process.env.NODE_ENV !== 'production') {
    loadEnv({ path: fileURLToPath(new URL('../.env', import.meta.url)) });
}

/**
 * Vercel serverless function: POST /api/email
 *
 * Called when someone submits their email on the coming-soon "Join" form.
 * Sends 2 emails via Brevo (Sendinblue) transactional API:
 *   1. Confirmation email to the new subscriber
 *   2. Notification email to the site owner ("a person joined")
 *
 * Env vars (see .env.example):
 *   BREVO_API_KEY     — Brevo transactional API key (required)
 *   BREVO_FROM_EMAIL  — verified sender email in Brevo (required)
 *   OWNER_EMAIL       — where join notifications go (defaults to BREVO_FROM_EMAIL)
 */

const BREVO_URL = 'https://api.brevo.com/v3/smtp/email';
const OWNER_NAME = 'Anish Debnath';

interface JoinPayload {
    email?: unknown;
    website?: unknown; // honeypot — real users never send this
}

// Per-instance sliding-window rate limit (best-effort on serverless).
const RATE_LIMIT_MAX = 5; // submissions per IP per window
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const rateHits = new Map<string, number[]>();

function isRateLimited(key: string): boolean {
    const now = Date.now();
    const hits = (rateHits.get(key) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
    if (hits.length >= RATE_LIMIT_MAX) {
        rateHits.set(key, hits);
        return true;
    }
    hits.push(now);
    rateHits.set(key, hits);
    return false;
}

function clientIp(req: IncomingMessage): string {
    const fwd = req.headers['x-forwarded-for'];
    if (typeof fwd === 'string') {
        // Proxies append hops; rightmost non-empty entry is the real client IP.
        // Leftmost is attacker-controlled, so never trust it for rate limiting.
        const parts = fwd
            .split(',')
            .map((s) => s.trim())
            .filter(Boolean);
        if (parts.length > 0) return parts[parts.length - 1];
    }
    return req.socket.remoteAddress ?? 'unknown';
}

class PayloadTooLargeError extends Error { }

function readBody(req: IncomingMessage): Promise<string> {
    return new Promise((resolve, reject) => {
        let data = '';
        req.on('data', (chunk: Buffer) => {
            data += chunk.toString('utf8');
            if (data.length > 10_000) {
                reject(new PayloadTooLargeError('Request body too large'));
                req.destroy();
            }
        });
        req.on('end', () => resolve(data));
        req.on('error', reject);
    });
}

function isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function htmlEscape(value: string): string {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

async function sendBrevoEmail(options: {
    toEmail: string;
    toName?: string;
    subject: string;
    textContent: string;
    htmlContent: string;
}): Promise<Response> {
    const apiKey = process.env.BREVO_API_KEY;
    if (!apiKey) {
        throw new Error('Missing BREVO_API_KEY env var');
    }

    const recipient: { email: string; name?: string } = { email: options.toEmail };
    if (options.toName) {
        recipient.name = options.toName;
    }

    const body = {
        sender: {
            email: process.env.BREVO_FROM_EMAIL ?? '',
            name: OWNER_NAME,
        },
        to: [recipient],
        subject: options.subject,
        textContent: options.textContent,
        htmlContent: options.htmlContent,
    };

    return fetch(BREVO_URL, {
        method: 'POST',
        headers: {
            'api-key': apiKey,
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify(body),
    });
}

function json(
    res: ServerResponse,
    status: number,
    payload: Record<string, unknown>,
): void {
    res.statusCode = status;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(payload));
}

export default async function handler(
    req: IncomingMessage,
    res: ServerResponse,
): Promise<void> {
    if (req.method !== 'POST') {
        json(res, 405, { error: 'Method not allowed' });
        return;
    }

    let payload: JoinPayload;
    try {
        payload = JSON.parse((await readBody(req)) || '{}');
    } catch (err) {
        if (err instanceof PayloadTooLargeError) {
            json(res, 413, { error: 'Request body too large' });
        } else {
            json(res, 400, { error: 'Invalid JSON body' });
        }
        return;
    }

    // Honeypot: real browsers never populate "website". Pretend success, do nothing.
    if (typeof payload.website === 'string' && payload.website.trim() !== '') {
        json(res, 200, { success: true });
        return;
    }

    const ip = clientIp(req);
    if (isRateLimited(ip)) {
        json(res, 429, { error: 'Too many requests. Try again later.' });
        return;
    }

    const subscriberEmail =
        typeof payload.email === 'string' ? payload.email.trim().toLowerCase() : '';

    if (!isValidEmail(subscriberEmail)) {
        json(res, 400, { error: 'A valid email address is required' });
        return;
    }

    const fromEmail = process.env.BREVO_FROM_EMAIL?.trim();
    const ownerEmail = (process.env.OWNER_EMAIL?.trim() || fromEmail) ?? '';

    if (!fromEmail) {
        json(res, 500, { error: 'Missing sender configuration' });
        return;
    }
    if (!ownerEmail) {
        json(res, 500, { error: 'Missing owner email configuration' });
        return;
    }

    const safeEmail = htmlEscape(subscriberEmail);
    const month = new Date().toLocaleString('en-US', {
        dateStyle: 'medium',
        timeStyle: 'short',
    });

    try {
        // 1. Confirmation to the new subscriber
        const confirmRes = await sendBrevoEmail({
            toEmail: subscriberEmail,
            toName: '',
            subject: 'You are on the list — Anish Debnath',
            textContent: `Hi,\n\nThank you for joining my updates list. You will be the first to know when my new portfolio goes live.\n\n— Anish Debnath`,
            htmlContent: `
        <div style="font-family:Arial,Helvetica,sans-serif;background:#f5f5f5;padding:32px 16px;">
          <div style="max-width:520px;margin:0 auto;background:#ffffff;border-radius:16px;padding:32px;border:1px solid #e5e5e5;">
            <div style="font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#737373;margin-bottom:16px;">Anish Debnath</div>
            <h1 style="color:#0d130d;font-size:22px;margin:0 0 12px;">You are on the list 🎉</h1>
            <p style="color:#525252;font-size:15px;line-height:1.6;margin:0 0 20px;">
              Thanks for joining. You will be the first to know when my new portfolio goes live.
            </p>
            <p style="color:#0d130d;font-size:15px;line-height:1.6;margin:0;">
              — Anish Debnath<br/>
              <a href="mailto:${htmlEscape(fromEmail)}" style="color:#f2512d;text-decoration:none;">${htmlEscape(fromEmail)}</a>
            </p>
          </div>
        </div>`,
        });
        if (!confirmRes.ok) {
            const detail = await confirmRes.text();
            console.error('[brevo] confirmation rejected', confirmRes.status, detail);
            json(res, 502, {
                error: 'Failed to send confirmation email',
                detail: process.env.NODE_ENV === 'production' ? undefined : detail,
            });
            return;
        }

        // 2. Notification to the owner
        const notifyRes = await sendBrevoEmail({
            toEmail: ownerEmail,
            toName: OWNER_NAME,
            subject: `New subscriber joined: ${subscriberEmail}`,
            textContent: `A person just joined your updates list.\n\nEmail: ${subscriberEmail}\nWhen:  ${month}\n\n— join form, coming-soon page`,
            htmlContent: `
        <div style="font-family:Arial,Helvetica,sans-serif;background:#f5f5f5;padding:32px 16px;">
          <div style="max-width:520px;margin:0 auto;background:#ffffff;border-radius:16px;padding:32px;border:1px solid #e5e5e5;">
            <div style="font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#737373;margin-bottom:16px;">New join notification</div>
            <h1 style="color:#0d130d;font-size:20px;margin:0 0 16px;">A person joined your updates list 🎉</h1>
            <table style="width:100%;font-size:14px;color:#404040;">
              <tr>
                <td style="padding:6px 0;color:#737373;">Email</td>
                <td style="padding:6px 0;text-align:right;font-weight:600;color:#0d130d;">${safeEmail}</td>
              </tr>
              <tr>
                <td style="padding:6px 0;color:#737373;">When</td>
                <td style="padding:6px 0;text-align:right;font-weight:600;color:#0d130d;">${month}</td>
              </tr>
            </table>
          </div>
        </div>`,
        });
        // Owner notification is best-effort: even if it fails, the subscriber is
        // already confirmed — do not turn a successful subscription into an error.
        if (!notifyRes.ok) {
            const detail = await notifyRes.text();
            console.error('[brevo] notification rejected', notifyRes.status, detail);
        }

        json(res, 200, { success: true });
    } catch (err) {
        const message = err instanceof Error ? err.message : 'Unknown error';
        console.error('[brevo] send failed', message);
        json(res, 500, {
            error: 'Failed to send emails',
            detail: process.env.NODE_ENV === 'production' ? undefined : message,
        });
    }
}