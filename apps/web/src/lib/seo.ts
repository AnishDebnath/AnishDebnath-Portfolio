/**
 * SEO / metadata system — Phase 1 foundation.
 *
 * The Coming Soon landing page ships its metadata statically in index.html
 * (title, description, canonical, robots, Open Graph, Twitter, JSON-LD).
 * Do NOT call setPageMeta from that page — it would duplicate metadata.
 *
 * Future finished pages (About, Projects, Case Studies, Services, Articles,
 * Contact...) call setPageMeta(...) on mount with their own values. The global
 * defaults below apply whenever a page does not override a field.
 */

export const SITE_NAME = 'Anish Debnath — Portfolio';
export const SITE_URL = 'https://anishdebnath.site';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;
export const DEFAULT_TITLE = 'Anish Debnath — Product Designer & UI/UX Developer';
export const DEFAULT_DESCRIPTION =
    'I design and build digital products that are intuitive to use, technically reliable, and built around real user and business needs.';

export interface PageMeta {
    title?: string;
    description?: string;
    /** Absolute URL, matching the site's no-trailing-slash convention except the root. */
    canonical?: string;
    robots?: string;
    og?: {
        title?: string;
        description?: string;
        type?: string;
        url?: string;
        image?: string;
        locale?: string;
    };
    twitter?: {
        card?: string;
        title?: string;
        description?: string;
        image?: string;
    };
    /** Structured data injected for this page (array of schema objects). */
    jsonLd?: Record<string, unknown>[];
}

export const DEFAULT_META: PageMeta = {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    canonical: `${SITE_URL}/`,
    robots: 'index, follow',
    og: {
        type: 'website',
        title: DEFAULT_TITLE,
        description: DEFAULT_DESCRIPTION,
        url: `${SITE_URL}/`,
        image: DEFAULT_OG_IMAGE,
        locale: 'en_US',
    },
    twitter: {
        card: 'summary_large_image',
        title: DEFAULT_TITLE,
        description: DEFAULT_DESCRIPTION,
        image: DEFAULT_OG_IMAGE,
    },
};

type MetaValue = string | undefined;

function setMeta(attr: 'name' | 'property', key: string, value: MetaValue): void {
    if (!value) return;
    const existing = document.head.querySelector<HTMLMetaElement>(
        `meta[${attr}="${key}"]`,
    );
    if (existing) {
        existing.setAttribute('content', value);
    } else {
        const meta = document.createElement('meta');
        meta.setAttribute(attr, key);
        meta.setAttribute('content', value);
        document.head.appendChild(meta);
    }
}

function setJsonLd(jsonLd: Record<string, unknown>[]): void {
    // Replace any previously injected dynamic JSON-LD, keep static index.html ones.
    if (jsonLd.length === 0) return;
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-src', 'page');
    script.textContent = JSON.stringify(
        jsonLd.length === 1 ? jsonLd[0] : { '@context': 'https://schema.org', '@graph': jsonLd },
    );
    document.head
        .querySelectorAll('script[type="application/ld+json"][data-src="page"]')
        .forEach((node) => node.remove());
    document.head.appendChild(script);
}

/** Apply a page's metadata, falling back to global defaults for missing fields. */
export function setPageMeta(meta: PageMeta): void {
    const merged: PageMeta = {
        ...DEFAULT_META,
        ...meta,
        og: { ...DEFAULT_META.og, ...meta.og },
        twitter: { ...DEFAULT_META.twitter, ...meta.twitter },
    };

    document.title = (merged.title ?? DEFAULT_META.title)!;
    setMeta('name', 'description', merged.description);
    setMeta('name', 'robots', merged.robots);
    setMeta('name', 'author', 'Anish Debnath');
    if (merged.canonical) {
        let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
        if (!link) {
            link = document.createElement('link');
            link.rel = 'canonical';
            document.head.appendChild(link);
        }
        link.href = merged.canonical;
    }

    const og = merged.og!;
    setMeta('property', 'og:title', og.title);
    setMeta('property', 'og:description', og.description);
    setMeta('property', 'og:type', og.type);
    setMeta('property', 'og:url', og.url);
    setMeta('property', 'og:image', og.image);
    setMeta('property', 'og:site_name', SITE_NAME);
    setMeta('property', 'og:locale', og.locale);

    const tw = merged.twitter!;
    setMeta('name', 'twitter:card', tw.card);
    setMeta('name', 'twitter:title', tw.title);
    setMeta('name', 'twitter:description', tw.description);
    setMeta('name', 'twitter:image', tw.image);

    if (meta.jsonLd) setJsonLd(meta.jsonLd);
}