const cacheName ="version one";

const cacheAssets = [
    '/',
    'index.html',
    'restaurant.html',
    '/css/styles.css',
    '/data/restaurants.json',
    '/js/dbhelper.js',
    '/js/main.js',
    '/js/restaurant_info.js',
    '/js/sw_reg.js',
    '/img/1.jpg',
    '/img/2.jpg',
    '/img/3.jpg',
    '/img/4.jpg',
    '/img/5.jpg',
    '/img/6.jpg',
    '/img/7.jpg',
    '/img/8.jpg',
    '/img/9.jpg',
    '/img/10.jpg',
    '/img/food.jpg'

    


];

//Call Install Event
self.addEventListener('install', e => {
console.log('Service Worker: Installed');

e.waitUntil(
    caches
        .open(cacheName)
        .then(cache => {
            console.log('Service Worker: Caching Files');
            cache.addAll(cacheAssets);
        })
        .then(() => self.skipWaiting())
);
});

//Call Fetch Event 
self.addEventListener('fetch', event => {
console.log('Service Worker: Fetching');
event.respondWith(
    caches.match(event.request)
    .then(function(response) {
        return response || fetch(event.request);
        })
    );
}); 




