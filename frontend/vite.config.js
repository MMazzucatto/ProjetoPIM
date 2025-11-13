import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { VitePWA } from "vite-plugin-pwa"

const manifestIcons = [
  {
    src: "/pwa-192.png",
    sizes: "192x192",
    type: "image/png",
  },
  {
    src: "/pwa-512.png",
    sizes: "512x512",
    type: "image/png",
  },
]

export default defineConfig({
  server: {
    host: true,
    allowedHosts: [
      "zeloplus.loca.lt",
      "https://downtroddenly-undecreed-herschel.ngrok-free.dev/",
      "downtroddenly-undecreed-herschel.ngrok-free.dev",
    ],
  },
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "ZeloPlus",
        short_name: "Zelo",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#0a84ff",
        icons: manifestIcons,
      },
    }),
  ],
})
