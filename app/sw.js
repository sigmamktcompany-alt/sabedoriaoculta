// CÚPULA 33 - SERVICE WORKER V2.0 (NETWORK FIRST COM BYPASS DE DADOS)
const CACHE_NAME = 'cupula33-v2.0-' + Date.now();

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(keys.map((key) => caches.delete(key)));
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  // Sempre busca da rede direto para evitar qualquer cache antigo de 1919 ou arquivos velhos
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
