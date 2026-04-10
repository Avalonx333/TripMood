// =====================
// Costanti
// =====================
const API_BASE = "http://localhost:8080/api";

// =====================
// Funzioni di utilità
// =====================

/**
 * Esegue una chiamata GET al backend Java.
 * @param {string} endpoint - es. "/utenti"
 * @returns {Promise<any>}
 */
async function apiGet(endpoint) {
  const res = await fetch(`${API_BASE}${endpoint}`);
  if (!res.ok) throw new Error(`Errore GET ${endpoint}: ${res.status}`);
  return res.json();
}

/**
 * Esegue una chiamata POST al backend Java.
 * @param {string} endpoint - es. "/utenti"
 * @param {object} body
 * @returns {Promise<any>}
 */
async function apiPost(endpoint, body) {
  const res = await fetch(`${API_BASE}${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`Errore POST ${endpoint}: ${res.status}`);
  return res.json();
}

// =====================
// Init
// =====================
document.addEventListener("DOMContentLoaded", () => {
  // Il tuo codice qui
});
