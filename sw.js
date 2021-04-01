const { async } = require("q");

const VERSION = 'v1';

self.addEventListener('instal', event =>{
    event.waitUntil(precache());
});

self.addEventListener('fetch', event =>{
    const request = event.request;
    //get
    if (request.method !== 'GET'){
        return;
    }

    //buscar en el cache
    event.respondWith(cachedResponse(request));

    //actualizar el cache
    event.waitUntil(updateCache(request));
});

async function precache(){
const cache = await caches.open(Version);
return cache.addAll([
    // '/',
    // '/assets/index.js',
    // '/assets/MediaPlayer.js',
    // '/assets/AutoPlay.js',
    // '/assets/AutoPause.js',
    // '/assets/index.css',
    // '/assets/Cafe.mp4',
]);
}

async function cachedResponse(request){
    const cache = await caches.open(VERSION);
    const response = await cache.match(request);
    return response || fetch (request);
}

async function updateCache(request){
    const cache = await caches.open(VERSION);
    const response = await fetch(request);
    return cache.put(request,response);
}