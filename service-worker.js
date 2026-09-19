// Minimal service worker — just enough to satisfy "installable PWA"
// requirements (a registered, fetch-handling service worker). It does not
// cache anything or work offline; it simply passes every request straight
// through to the network, so your live Firestore data always stays fresh.
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
