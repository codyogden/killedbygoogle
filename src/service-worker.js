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

function updateCache(request) {
  return caches.open(CACHE)
    .then(cache => fetch(request)
      .then(response => cache.put(request, response)));
}

self.addEventListener('install', (event) => {
  // The service worker is being installed.

  event.waitUntil(precache());
});

self.addEventListener('fetch', (event) => {
  // The service worker is serving the asset.

  event.respondWith(fromNetwork(event.request, 1000)
    .then((response) => {
      event.waitUntil(updateCache(event.request));
      return response;
    }).catch(() => fromCache(event.request)));
});
