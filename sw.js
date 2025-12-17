self.addEventListener('fetch', (event) => {
  // This simple service worker is required for PWA installation
  event.respondWith(fetch(event.request));
});
