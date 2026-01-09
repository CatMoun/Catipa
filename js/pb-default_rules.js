// =====================================
// Catipa – Codificação Fonêmica para o Português
// Copyright (c) 2019–2026 Junia da Costa
// Licensed under the MIT License
// =====================================

function applyRules(word) {
  let w = word;

  // =========================
  // ORTOGRÁFICAS
  // =========================
  
  w = w.replace(/-/g, "");
  w = w.replace(/(?<=[aâáãeêéiíoôóuúYW])s(?=[aâáãeêéiíoôóuú])/g, "z");
  w = w.replace(/([uú])\s*l(?!h)(?![aâáãeêéiíoôóuúwyY])/g, "$1");
  w = w.replace(/x\s*$/, "ks");
  w = w.replace(/ez\s*$/, "êz");
  w = w.replace(/z\s*$/, "s");
  w = w.replace(/qu(?=[aâáãoôó])/g, "kw");
  w = w.replace(/qu(?=[eêéií])/g, "k");
  w = w.replace(/gu(?=[aâáãoôó])/g, "gw");
  w = w.replace(/gu(?=[eêéií])/g, "g");
  w = w.replace(/g(?=[eêéií])/g, "j");
  w = w.replace(/ss/g, "s");
  w = w.replace(/sc(?![aâáãoôó])/g, "s");
  w = w.replace(/xc/g, "s");
  w = w.replace(/(?<!^)(?<![iu])x(?=[aâáãeêéiíoôóuú]|^x)/g, "z");
  w = w.replace(/xar\s*$/g, "ksar");
  w = w.replace(/ç/g, "s");
  w = w.replace(/c(?=[aâáãoôóuú])/g, "k");
  w = w.replace(/c(?=[eêéií])/g, "s");
  w = w.replace(/d(?=[ií])/g, "dj");
  w = w.replace(/de\s*$/, "dje");
  w = w.replace(/^ch|(?<!t)ch/g, "x");
  w = w.replace(/t(?=[ií])/g, "tch");
  w = w.replace(/te\s*$/, "tche");
  
  // =========================
  // DITONGOS
  // =========================
  
  w = w.replace(/(?<=[aâáãeêéiíoôóuú])i(?=[aâáãeêéiíoôóuú])/g, "y");
  w = w.replace(/(?<=[aâáãeêéiíoôóuú])u(?=[aâáãeêéiíoôóuú])/g, "w");
  if (!/([aâáeêéoôóuú])\s*ir$/.test(w)) {
	  w = w.replace(/([aâáeêéoôóuú])\s*i/g, "$1Y");
  }
  w = w.replace(/([aâáeêéiíoôó])\s*u/g, "$1W");
  if (/l\s*$/.test(w)) {
	  w = w.replace(/al/g, "ál");
	  w = w.replace(/el/g, "él");
	  w = w.replace(/il/g, "íl");
	  w = w.replace(/ol/g, "ól");
  }
  w = w.replace(/([aâáeêéiíoôó])\s*l(?!h)(?![aâáãeêéiíoôóuúwyY])/g, "$1W");
  w = w.replace(/(?<=[áiu])x/g, "ks");
  
  // =========================
  // PROTEÇÃO
  // =========================
  
  w = w.replace(/nh/g, "§N1§");
  w = w.replace(/lh/g, "§L§");
  w = w.replace(/tch/g, "§T1§");
  w = w.replace(/pr/g, "§P§");
  w = w.replace(/br/g, "§B§");
  w = w.replace(/tr/g, "§T2§");
  w = w.replace(/cr/g, "§C§");
  w = w.replace(/dr/g, "§D§");
  w = w.replace(/gr/g, "§G§");
  w = w.replace(/fr/g, "§F§");
  w = w.replace(/n(?=[aâáãeêéiíoôóuú])/g, "§N2§");
  w = w.replace(/m(?=[aâáãeêéiíoôóuú])/g, "§M§");
  
  // =========================
  // RÓTICAS
  // =========================
  
  w = w.replace(/h/g, "");
  w = w.replace(/rr/g, "h");
  w = w.replace(/r(?![aâáãeêéiíoôóuú])|(?<![aâáãeêéiíoôóuúWY])r/g, "h");
  
  // =========================
  // NASALIZAÇÃO
  // =========================
  
  w = w.replace(/ã\s*o/g, "A1 W");
  w = w.replace(/ã\s*e/g, "A1 Y");
  w = w.replace(/ã\s*$/g, "A1 ");
  w = w.replace(/ã/g, "A2 ");
  w = w.replace(/õ\s*e/g, "O1 Y");
  w = w.replace(/õ/g, "O2 ");
  
  w = w.replace(/an(?![aeiou])/g, "A2 ");
  w = w.replace(/ân(?![aeiou])/g, "A1 ");
  w = w.replace(/en(?![aeiou])/g, "E2 ");
  w = w.replace(/ên(?![aeiou])/g, "E1 ");
  w = w.replace(/in(?![aeiou])/g, "I2 ");
  w = w.replace(/ín(?![aeiou])/g, "I1 ");
  w = w.replace(/on(?![aeiou])/g, "O2 ");
  w = w.replace(/ôn(?![aeiou])/g, "O1 ");
  w = w.replace(/un(?![aeiou])/g, "U2 ");
  
  w = w.replace(/am\s*$/g, "A1 W");
  w = w.replace(/am(?![aeiou])/g, "A2 ");
  w = w.replace(/âm(?![aeiou])/g, "A1 ");
  w = w.replace(/em(?![aeiou])/g, "E2 ");
  w = w.replace(/ém(?![aeiou])/g, "E1 ");
  w = w.replace(/im(?![aeiou])/g, "I2 ");
  w = w.replace(/ím(?![aeiou])/g, "I1 ");
  w = w.replace(/om(?![aeiou])/g, "O2 ");
  w = w.replace(/um(?![aeiou])/g, "U2 ");
  
  // =========================
  // ACENTO GRÁFICO
  // =========================
  
  const hasGraphicAccent = /[áéêíóôúâãõ]/.test(w);
  
  if (hasGraphicAccent) {
    w = w.replace(/([AEIOU])1/g, "$12");
  }
  
  w = w.replace(/é/g, "&1 ");
  w = w.replace(/ó/g, "#1 ");
  w = w.replace(/ê/g, "e1 ");
  w = w.replace(/ô/g, "o1 ");
  w = w.replace(/á/g, "a1 ");
  w = w.replace(/â/g, "@1 ");
  w = w.replace(/í/g, "i1 ");
  w = w.replace(/ú/g, "u1 ");
  
  // =========================
  // QUEBRA DE PROTEÇÃO
  // =========================
  
  w = w.replace(/§N1§/g, "nh");
  w = w.replace(/§L§/g, "lh");
  w = w.replace(/§T1§/g, "tch");
  w = w.replace(/§P§/g, "pr");
  w = w.replace(/§C§/g, "kr");
  w = w.replace(/§B§/g, "br");
  w = w.replace(/§T2§/g, "tr");
  w = w.replace(/§D§/g, "dr");
  w = w.replace(/§G§/g, "gr");
  w = w.replace(/§F§/g, "fr");
  w = w.replace(/§N2§/g, "n");
  w = w.replace(/§M§/g, "m");
  
  // =========================
  // VOGAIS
  // =========================
  
  w = w.replace(/a(?![0-9])/g, "a2 ");
  w = w.replace(/e(?![0-9])/g, "e2 ");
  w = w.replace(/i(?![0-9])/g, "i2 ");
  w = w.replace(/o(?![0-9])/g, "o2 ");
  w = w.replace(/u(?![0-9])/g, "u2 ");
  
  w = w.replace(/([iIuU])2\s*$/, "$11 ");
  w = w.replace(/([iIuU])2\s*s$/, "$11 s");
  w = w.replace(/([aeiou])2\s*h\s*$/, "$11 h");
  
  if (!w.includes("1")) {
    if ((w.match(/[aeiouAEIOU]2/g) || []).length === 1) {
      w = w.replace(/([aeiouAEIOU])2/, "$11");
    }
    
    if (!w.includes("1")) {
      w = w.replace(/([aeiouAEIOU])2(?=[^aeiouAEIOU]*[aeiouAEIOU]2[^aeiouAEIOU]*$)/, "$11");
    }
  }
  
  w = w.replace(/&/g, "ee");
  w = w.replace(/#/g, "oo");
  w = w.replace(/@/g, "aa");
  w = w.replace(/cn/g, "ki2 n");
  w = w.replace(/i1 a2 d/g, "i1 aa2 d");
  
  // =========================
  // REDUÇÕES
  // =========================
  
  w = w.replace(/a2\s*$/, "a0 ");
  w = w.replace(/a2\s*s$/, "a0 s");
  w = w.replace(/e2\s*$/, "i0 ");
  w = w.replace(/e2\s*s$/, "i0 s");
  w = w.replace(/i2\s*$/, "i0 ");
  w = w.replace(/o2\s*$/, "u0 ");
  w = w.replace(/o2\s*s$/, "u0 s");
  w = w.replace(/u2\s*$/, "u0 ");

  w = w.replace(/A2\s*$/, "A0 ");
  w = w.replace(/E2\s*$/, "E0 ");
  w = w.replace(/I2\s*$/, "I0 ");
  w = w.replace(/O2\s*$/, "O0 ");
  w = w.replace(/U2\s*$/, "U0 ");
  
  // =========================
  // SEGMENTAÇÃO CONSONANTAL
  // =========================
  
  w = w.replace(/b/g, "b ");
  w = w.replace(/d(?![j])/g, "d ");
  w = w.replace(/f/g, "f ");
  w = w.replace(/g/g, "g ");
  w = w.replace(/h/g, "h ");
  w = w.replace(/j/g, "j ");
  w = w.replace(/k/g, "k ");
  w = w.replace(/l(?![h])/g, "l ");
  w = w.replace(/m/g, "m ");
  w = w.replace(/n(?![h])/g, "n ");
  w = w.replace(/p/g, "p ");
  w = w.replace(/r/g, "r ");
  w = w.replace(/s/g, "s ");
  w = w.replace(/t(?![c])/g, "t ");
  w = w.replace(/v/g, "v ");
  w = w.replace(/w/g, "w ");
  w = w.replace(/W/g, "W ");
  w = w.replace(/x/g, "x ");
  w = w.replace(/y/g, "y ");
  w = w.replace(/Y/g, "Y ");
  w = w.replace(/z/g, "z ");
  
  // =========================
  // RETOQUE FINAL
  // =========================
  
  if (!hasGraphicAccent) {
	  w = w.replace(/o1 dj i0/g, "oo1 dj i0");
  }
  
  w = w.replace(/e1 t u0/g, "ee1 t u0");
  w = w.replace(/e1 h t u0/g, "ee1 h t u0");
  w = w.replace(/e1 s u0/g, "ee1 s u0");
  w = w.replace(/e1 h\s*$/g, "ee1 h");
  w = w.replace(/o1 tch i0/g, "oo1 tch i0");
  w = w.replace(/e1 h d a0/g, "ee1 h d a0");
  w = w.replace(/e1 h d u0/g, "ee1 h d u0");
  w = w.replace(/e1 h m i0/g, "ee1 h m i0");
  w = w.replace(/e1 g r i0/g, "ee1 g r i0");
  w = w.replace(/a1 m a0/g, "A1 m a0");
  w = w.replace(/a1 n a0/g, "A1 n a0");
  w = w.replace(/a1 m i0/g, "aa1 m i0");
  w = w.replace(/a1 n u0/g, "aa1 n u0");
  w = w.replace(/e1 k a0/g, "ee1 k a0");
  w = w.replace(/e1 k u0/g, "ee1 k u0");
  w = w.replace(/E0\s*$/g, "E0 Y");
  w = w.replace(/a2 ([dfgjklmnprstvx]) A1 W/g, "a1 $1 A2 W");
  w = w.replace(/A1 ([bdfgjklmnprstvx]) o2 W/g, "A2 $1 o1 W");
  w = w.replace(/o1 w u0 s/g, "o1 w o0 s");
  w = w.replace(/o1 z i0/g, "oo1 z i0");
  
  w = w.trim();
  
  return w;
}
