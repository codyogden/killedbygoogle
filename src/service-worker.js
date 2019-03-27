/* eslint-disable strict */
/* eslint-disable no-restricted-globals */

'use strict';

const CACHE = 'killed-by-google';

function precache() {
  return caches.open(CACHE).then(cache => cache.addAll([
    './',
    './index.html',
    './main.js',
    './graveyard.json',
    './assets/favicon.png',
    './assets/guillotine.svg',
    './assets/tombstone.svg',
  ]));
}

function fromNetwork(request, timeout) {
  return new Promise((resolve, reject) => {
    const fetchTimeout = setTimeout(reject, timeout);

    fetch(request).then((response) => {
      clearTimeout(fetchTimeout);
      resolve(response);
    }, reject);
  });
}

function fromCache(request) {
  return caches.open(CACHE)
    .then(cache => cache.match(request)
      .then(result => result || Promise.reject(new Error('no-match'))));
}

self.addEventListener('install', (event) => {
  console.info('The service worker is being installed.');

  event.waitUntil(precache());
});

self.addEventListener('fetch', (event) => {
  console.log('The service worker is serving the asset.');

  event.respondWith(fromNetwork(event.request, 1000)
    .catch(() => fromCache(event.request)));
});
