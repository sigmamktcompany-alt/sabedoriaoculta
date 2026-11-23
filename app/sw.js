// Service Worker auto-destrutor para desentupir qualquer celular com cache preso
self.addEventListener('install', (e) => self.skipWaiting());
self.addEventListener('activate', (e) => {
  caches.keys().then(keys => Promise.all(keys.map(k => caches.delete(k))));
  self.clients.claim();
});
self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request));
});