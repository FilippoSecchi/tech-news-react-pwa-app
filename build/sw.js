importScripts("/precache-manifest.92274315ea86ebf31d8827527e40c849.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}
const staticFiles = [
  "./manifest.json",
  "./favicon.png",
  "./icons/app-icon-256.png",
  "./icons/app-icon.png",
  "./icons/app-icon.svg"
];

workbox.clientsClaim();
self.__precacheManifest = staticFiles.concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/index.html", {
  blacklist: [/^\/_/, /\/[^\/]+\.[^\/]+$/]
});

workbox.routing.registerRoute(
  new RegExp("https://newsapi.org/(.*)"),
  workbox.strategies.networkFirst()
);

