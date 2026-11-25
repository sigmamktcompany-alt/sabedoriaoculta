// CÚPULA 33 - SERVICE WORKER SELF-DESTRUCT / CACHE PURGER
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  self.registration.unregister();
  caches.keys().then((keys) => Promise.all(keys.map((k) => caches.delete(k))));
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  // Pass-through direto sem cache
  e.respondWith(fetch(e.request));
});
