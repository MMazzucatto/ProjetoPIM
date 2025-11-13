self.addEventListener("install", (event) => {
  console.log("✅ Service Worker instalado")
  event.waitUntil(
    caches.open("zelo-cache-v1").then((cache) => {
      return cache.addAll(["/"])
    })
  )
})

self.addEventListener("fetch", (event) => {
  const url = event.request.url

  if (url.includes("ngrok-free.dev")) return

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return (
        cachedResponse || fetch(event.request).catch(() => caches.match("/"))
      )
    })
  )
})
