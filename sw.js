// Network-first service worker.
// iOS Home Screen web apps hold on to stale copies of pages, so every
// same-origin GET goes to the network first (bypassing the HTTP cache).
// Saved copies are only used when offline.
const CACHE = 'learn-bangla-v1';

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;

  e.respondWith((async () => {
    try {
      const res = await fetch(req.url, { cache: 'no-store', credentials: 'same-origin' });
      if (res.redirected) return Response.redirect(res.url, 302);
      if (res.ok) {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(req.url, copy));
      }
      return res;
    } catch (err) {
      const hit = await caches.match(req.url);
      return hit || Response.error();
    }
  })());
});
