// ===================================================
// ⚙️  KONFIGURASJON — ENDRE DETTE FØR DU PUBLISERER
// ===================================================

// 1) Legg inn Firebase-konfigurasjonen din her

//    (Finn han i Firebase Console → Prosjektinnstillingar → Dine appar)
const firebaseConfig = {
  apiKey: "AIzaSyCU7gIAFhLBpVcma57p8ZGlCOnqnylRkuM",
  authDomain: "fotball-e670b.firebaseapp.com",
  projectId: "fotball-e670b",
  storageBucket: "fotball-e670b.firebasestorage.app",
  messagingSenderId: "298983352509",
  appId: "1:298983352509:web:68da44f1776c29f2642fd4"
};

// 2) App-innstillingar
const APP = {
  tittel:       "VM-tipping 2026 ⚽",
  arrangor:     "Trond",                      // Ditt namn
  vippsNummer:  "********",              // Mobilnummer knytt til Vipps
  vippsNavn:    "Trond",                  // Namn som vises i Vipps
  pris:         50,                           // Innmelding i kroner
  frist:        "2026-06-11T18:00:00",        // Frist for å tippa (VM-kampstart)
  // adminKode er fjerna — admin-innlogging skjer no via Firebase Authentication
};

