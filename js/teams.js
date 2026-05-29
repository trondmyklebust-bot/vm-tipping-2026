// ===================================================
// Alle 48 lag i VM 2026
// ===================================================

const ALLE_LAG = [
  // ── CONCACAF (vertsnasjonar + direkte kvalifiserte) ──
  { id: "usa",           namn: "USA",                  flag: "🇺🇸", konf: "CONCACAF" },
  { id: "canada",        namn: "Canada",               flag: "🇨🇦", konf: "CONCACAF" },
  { id: "mexico",        namn: "Mexico",               flag: "🇲🇽", konf: "CONCACAF" },
  { id: "panama",        namn: "Panama",               flag: "🇵🇦", konf: "CONCACAF" },
  { id: "curacao",       namn: "Curaçao",              flag: "🇨🇼", konf: "CONCACAF" },
  { id: "haiti",         namn: "Haiti",                flag: "🇭🇹", konf: "CONCACAF" },

  // ── UEFA (Europa) ──
  { id: "england",       namn: "England",              flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", konf: "UEFA" },
  { id: "frankrike",     namn: "Frankrike",            flag: "🇫🇷", konf: "UEFA" },
  { id: "tyskland",      namn: "Tyskland",             flag: "🇩🇪", konf: "UEFA" },
  { id: "spania",        namn: "Spania",               flag: "🇪🇸", konf: "UEFA" },
  { id: "portugal",      namn: "Portugal",             flag: "🇵🇹", konf: "UEFA" },
  { id: "nederland",     namn: "Nederland",            flag: "🇳🇱", konf: "UEFA" },
  { id: "belgia",        namn: "Belgia",               flag: "🇧🇪", konf: "UEFA" },
  { id: "austerrike",    namn: "Austerrike",           flag: "🇦🇹", konf: "UEFA" },
  { id: "sveits",        namn: "Sveits",               flag: "🇨🇭", konf: "UEFA" },
  { id: "skottland",     namn: "Skottland",            flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", konf: "UEFA" },
  { id: "kroatia",       namn: "Kroatia",              flag: "🇭🇷", konf: "UEFA" },
  { id: "noreg",         namn: "Noreg",                flag: "🇳🇴", konf: "UEFA" },
  { id: "sverige",       namn: "Sverige",              flag: "🇸🇪", konf: "UEFA" },
  { id: "tyrkia",        namn: "Tyrkia",               flag: "🇹🇷", konf: "UEFA" },
  { id: "tsjekkia",      namn: "Tsjekkia",             flag: "🇨🇿", konf: "UEFA" },
  { id: "bosnia",        namn: "Bosnia-Hercegovina",   flag: "🇧🇦", konf: "UEFA" },

  // ── CONMEBOL (Sør-Amerika) ──
  { id: "argentina",     namn: "Argentina",            flag: "🇦🇷", konf: "CONMEBOL" },
  { id: "brasil",        namn: "Brasil",               flag: "🇧🇷", konf: "CONMEBOL" },
  { id: "colombia",      namn: "Colombia",             flag: "🇨🇴", konf: "CONMEBOL" },
  { id: "ecuador",       namn: "Ecuador",              flag: "🇪🇨", konf: "CONMEBOL" },
  { id: "uruguay",       namn: "Uruguay",              flag: "🇺🇾", konf: "CONMEBOL" },
  { id: "paraguay",      namn: "Paraguay",             flag: "🇵🇾", konf: "CONMEBOL" },

  // ── AFC (Asia) ──
  { id: "japan",         namn: "Japan",                flag: "🇯🇵", konf: "AFC" },
  { id: "sorkorea",      namn: "Sør-Korea",            flag: "🇰🇷", konf: "AFC" },
  { id: "iran",          namn: "Iran",                 flag: "🇮🇷", konf: "AFC" },
  { id: "saudi",         namn: "Saudi-Arabia",         flag: "🇸🇦", konf: "AFC" },
  { id: "australia",     namn: "Australia",            flag: "🇦🇺", konf: "AFC" },
  { id: "qatar",         namn: "Qatar",                flag: "🇶🇦", konf: "AFC" },
  { id: "jordan",        namn: "Jordan",               flag: "🇯🇴", konf: "AFC" },
  { id: "usbekistan",    namn: "Usbekistan",           flag: "🇺🇿", konf: "AFC" },
  { id: "irak",          namn: "Irak",                 flag: "🇮🇶", konf: "AFC" },

  // ── CAF (Afrika) ──
  { id: "marokko",       namn: "Marokko",              flag: "🇲🇦", konf: "CAF" },
  { id: "senegal",       namn: "Senegal",              flag: "🇸🇳", konf: "CAF" },
  { id: "egypt",         namn: "Egypt",                flag: "🇪🇬", konf: "CAF" },
  { id: "algerie",       namn: "Algerie",              flag: "🇩🇿", konf: "CAF" },
  { id: "tunisia",       namn: "Tunisia",              flag: "🇹🇳", konf: "CAF" },
  { id: "sorafrika",     namn: "Sør-Afrika",           flag: "🇿🇦", konf: "CAF" },
  { id: "elfenbenskysten", namn: "Elfenbenskysten",   flag: "🇨🇮", konf: "CAF" },
  { id: "ghana",         namn: "Ghana",                flag: "🇬🇭", konf: "CAF" },
  { id: "kappverde",     namn: "Kapp Verde",           flag: "🇨🇻", konf: "CAF" },
  { id: "drkongo",       namn: "DR Kongo",             flag: "🇨🇩", konf: "CAF" },

  // ── OFC (Oseania) ──
  { id: "newzealand",    namn: "New Zealand",          flag: "🇳🇿", konf: "OFC" },
];

// Hjelpefunksjon: finn lag-objekt frå id
function lagFraId(id) {
  return ALLE_LAG.find(l => l.id === id) || { id, namn: id, flag: "🏳️", konf: "?" };
}

// ===================================================
// VM-grupper (trekning desember 2025)
// ===================================================

const GRUPPER = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"];

const GRUPPE_LAG = {
  A: ["mexico",    "sorafrika",       "sorkorea",    "tsjekkia"],
  B: ["canada",    "bosnia",          "qatar",       "sveits"],
  C: ["brasil",    "marokko",         "haiti",       "skottland"],
  D: ["usa",       "paraguay",        "australia",   "tyrkia"],
  E: ["tyskland",  "curacao",         "elfenbenskysten", "ecuador"],
  F: ["nederland", "japan",           "sverige",     "tunisia"],
  G: ["belgia",    "egypt",           "iran",        "newzealand"],
  H: ["spania",    "kappverde",       "saudi",       "uruguay"],
  I: ["frankrike", "senegal",         "irak",        "noreg"],
  J: ["argentina", "algerie",         "austerrike",  "jordan"],
  K: ["portugal",  "drkongo",         "usbekistan",  "colombia"],
  L: ["england",   "kroatia",         "ghana",       "panama"],
};

function lagPerGruppe() {
  const res = {};
  for (const g of GRUPPER) {
    res[g] = GRUPPE_LAG[g].map(id => lagFraId(id));
  }
  return res;
}

// Behold konf-funksjonar for bakoverkompatibilitet
const KONFEDERASJONAR = ["CONCACAF", "UEFA", "CONMEBOL", "AFC", "CAF", "OFC"];
const KONF_NAMN = {
  CONCACAF: "Nord-/Mellom-Amerika og Karibia",
  UEFA:     "Europa",
  CONMEBOL: "Sør-Amerika",
  AFC:      "Asia",
  CAF:      "Afrika",
  OFC:      "Oseania",
};

function lagPerKonf() {
  const res = {};
  for (const k of KONFEDERASJONAR) {
    res[k] = ALLE_LAG.filter(l => l.konf === k);
  }
  return res;
}

// Poengrekning (maks 32 poeng: 16 for å ha riktig lag med + 16 for riktig tier)
// Datastruktur: toppliste: { p1, p2, p3, p4, p5_8: [...4], p9_16: [...8] }
function beregnPoeng(tips, resultat) {
  const detaljar = { med: 0, plassering: 0 };

  const rt = resultat.toppliste;
  const tt = tips.toppliste;
  if (!rt || !tt) return { poeng: 0, detaljar };

  // Alle 16 lag i resultatet og tippet
  const alleRes16 = [rt.p1, rt.p2, rt.p3, rt.p4,
    ...(rt.p5_8  || []), ...(rt.p9_16 || [])].filter(Boolean);
  const alleT16   = [tt.p1, tt.p2, tt.p3, tt.p4,
    ...(tt.p5_8  || []), ...(tt.p9_16 || [])].filter(Boolean);

  for (const id of alleT16) {
    // +1 for kvart lag som er blant dei faktiske topp 16
    if (alleRes16.includes(id)) detaljar.med++;

    // +1 for riktig tier/plassering
    if      (id === rt.p1 && id === tt.p1) detaljar.plassering++;
    else if (id === rt.p2 && id === tt.p2) detaljar.plassering++;
    else if (id === rt.p3 && id === tt.p3) detaljar.plassering++;
    else if (id === rt.p4 && id === tt.p4) detaljar.plassering++;
    else if ((rt.p5_8  || []).includes(id) && (tt.p5_8  || []).includes(id)) detaljar.plassering++;
    else if ((rt.p9_16 || []).includes(id) && (tt.p9_16 || []).includes(id)) detaljar.plassering++;
  }

  return { poeng: detaljar.med + detaljar.plassering, detaljar };
}
