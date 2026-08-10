import 'dotenv/config';
import { createServer } from 'node:http';
import handler from '../api/email.ts';

/**
 * Local dev server for the /api/email function — no Vercel CLI needed.
 *
 * Run alongside Vite (vite proxies /api -> :3001):
 *   npm run dev:api   (this server)
 *   npm run dev       (Vite, compose the form against /api/email)
 */
const PORT = Number(process.env.PORT || 3001);

const server = createServer((req, res) => {
    const url = req.url ?? '';

    if (req.method === 'POST' && url.startsWith('/api/email')) {
        void handler(req, res);
        return;
    }

    res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Not found' }));
});

server.listen(PORT, () => {
    console.log(`[api] local server on http://localhost:${PORT} -> POST /api/email`);
});