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

// Poengrekning (maks 66 poeng: 32+16+8+4+2+4)
function beregnPoeng(tips, resultat) {
  let poeng = 0;
  const detaljar = { r32: 0, r16: 0, qf: 0, sf: 0, finale: 0, ranking: 0 };

  if (resultat.r32 && tips.r32) {
    detaljar.r32 = tips.r32.filter(id => resultat.r32.includes(id)).length;
    poeng += detaljar.r32;
  }
  if (resultat.r16 && tips.r16) {
    detaljar.r16 = tips.r16.filter(id => resultat.r16.includes(id)).length;
    poeng += detaljar.r16;
  }
  if (resultat.qf && tips.qf) {
    detaljar.qf = tips.qf.filter(id => resultat.qf.includes(id)).length;
    poeng += detaljar.qf;
  }
  if (resultat.sf && tips.sf) {
    detaljar.sf = tips.sf.filter(id => resultat.sf.includes(id)).length;
    poeng += detaljar.sf;
  }
  if (resultat.finale && tips.finale) {
    detaljar.finale = tips.finale.filter(id => resultat.finale.includes(id)).length;
    poeng += detaljar.finale;
  }
  if (resultat.ranking && tips.ranking) {
    for (let i = 0; i < 4; i++) {
      if (tips.ranking[i] && tips.ranking[i] === resultat.ranking[i]) {
        detaljar.ranking++;
        poeng++;
      }
    }
  }

  return { poeng, detaljar };
}
