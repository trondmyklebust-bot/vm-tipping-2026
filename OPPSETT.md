# Oppsett av VM-tipping 2026

Denne guiden hjelper deg å få sida live på GitHub Pages med Firebase som database.

---

## Steg 1 – Opprett Firebase-prosjekt

1. Gå til [console.firebase.google.com](https://console.firebase.google.com)
2. Klikk **"Add project"** og følg veivisaren
3. Når prosjektet er oppretta: gå til **Build → Firestore Database**
4. Klikk **"Create database"** → vel **"Start in production mode"** → vel ein region nær deg (t.d. `europe-west3`)

---

## Steg 2 – Legg til ei web-app

1. I Firebase Console: klikk tannhjulet ⚙️ → **Project settings**
2. Under "Your apps" → klikk **`</>`** (Web-ikon)
3. Registrer appen (du treng ikkje Firebase Hosting)
4. Du får ein konfigurasjonsbolk som ser slik ut:

```js
const firebaseConfig = {
  apiKey: "xxx",
  authDomain: "xxx.firebaseapp.com",
  projectId: "xxx",
  storageBucket: "xxx.appspot.com",
  messagingSenderId: "xxx",
  appId: "1:xxx:web:xxx"
};
```

5. Kopier dette og lim inn i `js/config.js` (erstatt placeholdar-verdiane)

---

## Steg 3 – Sett opp Firestore-reglar

I Firebase Console → **Firestore → Rules** — lim inn desse reglane og publiser:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // Alle kan lesa tippers og resultater
    match /tippers/{id} {
      allow read: if true;
      allow write: if true;   // Endre til false etter tippingsfristen!
    }

    match /resultater/{id} {
      allow read: if true;
      allow write: if true;   // OK for enkelt oppsett utan autentisering
    }
  }
}
```

> **Merk:** Desse reglane er opne for enkel bruk i ei lukka gruppe. Sidan appen ikkje
> brukar autentisering er det tilstrekkeleg sikring at berre inviterte kjenner URL-en.
> Etter fristen kan du stengja `write` for `tippers`.

---

## Steg 4 – Tilpass config.js

Opna `js/config.js` og fyll inn:

```js
const FIREBASE_CONFIG = {
  // ... lim inn frå steg 2
};

const APP = {
  tittel:      "VM-tipping 2026 ⚽",
  arrangor:    "Trond",               // Ditt namn
  vippsNummer: "99887766",           // Ditt Vipps-mobilnummer
  vippsNavn:   "Trond Myklebust",    // Namn som vises i Vipps
  pris:        50,
  adminKode:   "EitSikkertPassord",  // ⚠️  Byt dette!
  frist:       "2026-06-11T18:00:00",// VM startar 11. juni 2026
};
```

---

## Steg 5 – Publiser på GitHub Pages

1. Opprett eit nytt repository på [github.com](https://github.com) (t.d. `vm-tipping-2026`)
2. Last opp alle filene (heile mappa):
   ```
   index.html
   tippe.html
   poengstavle.html
   admin.html
   js/
     config.js
     teams.js
   ```
3. Gå til **Settings → Pages → Source** → vel `main` branch, rot (`/`) → klikk **Save**
4. Etter ca. 1 minutt er sida tilgjengeleg på:
   `https://DITT-BRUKERNAVN.github.io/vm-tipping-2026/`

---

## Steg 6 – Inviter deltakarar

Del lenkja med dei du vil ha med. Dei treng berre:
- Gå til sida
- Skrive inn namn og e-post
- Tippa
- Betale 50 kr via Vipps

---

## Steg 7 – Oppdater resultat undervegs i VM

Gå til `https://…/admin.html` og logg inn med admin-koden din.

Etter kvar runde:
1. Vel dei laga som faktisk gjekk vidare
2. Klikk "Lagre"
3. Poengtavla oppdaterast automatisk for alle!

---

## Filstruktur

```
vm-tipping-2026/
├── index.html          ← Startside / info
├── tippe.html          ← Tippeskjema (5 steg)
├── poengstavle.html    ← Poengtavle (live)
├── admin.html          ← Admin (resultatregistrering)
└── js/
    ├── config.js       ← 🔧 ENDRE DETTE (Firebase + app-innstillingar)
    └── teams.js        ← Alle 48 lag + poengrekning
```

---

## Poengsystem

| Runde         | Maks poeng |
|---------------|------------|
| Runde med 16  | 16         |
| Kvartfinale   | 8          |
| Semifinale    | 4          |
| Finale        | 2          |
| Topp 4        | 4          |
| **Totalt**    | **34**     |

1 poeng per riktig lag i kvar runde.
1 poeng per riktig plassering i topp 4 (1.–4. plass).

---

## Alle 48 lag i VM 2026

| Konf.     | Lag                                                                           |
|-----------|-------------------------------------------------------------------------------|
| CONCACAF  | USA, Canada, Mexico, Panama, Curaçao, Haiti                                  |
| UEFA      | England, Frankrike, Tyskland, Spania, Portugal, Nederland, Belgia, Austerrike, Sveits, Skottland, Kroatia, Noreg, Sverige, Tyrkia, Tsjekkia, Bosnia-Hercegovina |
| CONMEBOL  | Argentina, Brasil, Colombia, Ecuador, Uruguay, Paraguay                       |
| AFC       | Japan, Sør-Korea, Iran, Saudi-Arabia, Australia, Qatar, Jordan, Usbekistan, Irak |
| CAF       | Marokko, Senegal, Egypt, Algerie, Tunisia, Sør-Afrika, Elfenbenskysten, Ghana, Kapp Verde, DR Kongo |
| OFC       | New Zealand                                                                   |

---

*Sida er bygd med ren HTML/CSS/JavaScript + Firebase Firestore. Ingen server, ingen build-steg.*
