/**
 * Moving Up 3: Critical Reading (ม.6) - Service Worker
 * Cache Strategy: Cache-first with Network Fallback & Auto Purge
 */

const CACHE_NAME = 'moving-up-3-v1.0.0';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './css/style.css',
  './js/data.js',
  './js/i18n.js',
  './js/settings.js',
  './js/system-check.js',
  './js/qrcode.min.js',
  './js/app.js',
  './manifest.json',
  './assets/audio/ex1.mp3',
  './assets/audio/ex2.mp3',
  './assets/audio/ex3.mp3',
  './assets/audio/ex4.mp3',
  './assets/audio/ex5.mp3',
  './assets/audio/ex6.mp3',
  './assets/audio/ex7.mp3',
  './assets/audio/ex8.mp3',
  './assets/audio/ex9.mp3',
  './assets/audio/ex10.mp3',
  './assets/images/cover.jpg',
  './assets/images/twp_logo.png',
  './assets/images/covers/mu1.jpg',
  './assets/images/covers/mu2.jpg',
  './assets/images/covers/mu3.jpg',
  './assets/images/covers/nw1.jpg',
  './assets/images/covers/nw2.jpg',
  './assets/images/covers/nw3.jpg',
  './assets/images/covers/step1.jpg',
  './assets/images/covers/step2.jpg',
  './assets/images/covers/step3.jpg',
  './assets/images/ex1.jpg',
  './assets/images/ex2.jpg',
  './assets/images/ex3.jpg',
  './assets/images/ex4.jpg',
  './assets/images/ex5.jpg',
  './assets/images/ex6.jpg',
  './assets/images/ex7.jpg',
  './assets/images/ex8.jpg',
  './assets/images/ex9.jpg',
  './assets/images/ex10.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return Promise.allSettled(
        ASSETS_TO_CACHE.map(url => cache.add(url).catch(err => {
          // If nested or flat path not found, safely ignore
        }))
      );
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => {
          console.log('[SW] Purging old cache:', k);
          return caches.delete(k);
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  // Audio files range request handling
  if (event.request.url.includes('.mp3')) {
    event.respondWith(
      fetch(event.request).catch(() => caches.match(event.request))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then((networkResponse) => {
        return networkResponse;
      }).catch(() => {
        if (event.request.headers.get('accept')?.includes('text/html')) {
          return caches.match('./index.html');
        }
      });
    })
  );
});
