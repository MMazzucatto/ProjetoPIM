import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./Global.css"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((reg) =>
        console.log("🧩 Service Worker registrado com sucesso:", reg.scope)
      )
      .catch((err) =>
        console.error("❌ Erro ao registrar o Service Worker:", err)
      )
  })
}
