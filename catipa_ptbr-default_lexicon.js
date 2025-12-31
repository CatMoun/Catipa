// =====================================
// Catipa – Codificação Fonêmica para o Português
// Copyright (c) 2019–2026 Junia da Costa
// Licensed under the MIT License
// =====================================

const LEXICON = {
	"acordo": [
      { type: "substantivo", ipa: "a2 k o1 h d u0" },
      { type: "verbo", ipa: "a2 k oo1 h d u0" }
    ],
	"design": "dj i2 z a1 I0",
	"envolto": "E2 v o1 W t u0",
	"forma": [
      { type: "substantivo", ipa: "f o1 h m a0" },
      { type: "verbo", ipa: "f oo1 h m a0" }
    ],
	"gosto": [
      { type: "substantivo", ipa: "g o1 s t u0" },
      { type: "verbo", ipa: "g oo1 s t u0" }
    ],
	"jogo": [
      { type: "atividade", ipa: "j o1 g u0" },
      { type: "verbo", ipa: "j oo1 g u0" }
    ],
	"marketing": "m a1 h k e2 tch I0",
	"molho": [
	  { type: "alimento", ipa: "m o1 lh u0"},
	  { type: "verbo", ipa: "m oo1 lh u0"}
	],
	"olho": [
      { type: "visão", ipa: "o1 lh u0" },
      { type: "verbo", ipa: "oo' lh u0" }
    ],
	"seca": [
      { type: "estado", ipa: "s e1 k a0" },
      { type: "verbo", ipa: "s ee1 k a0" }
    ],
	"seco": [
      { type: "estado", ipa: "s e1 k u0" },
      { type: "verbo", ipa: "s ee1 k u0" }
    ],
	"sede": [
      { type: "local", ipa: "s ee1 dj i0" },
      { type: "sensação", ipa: "s e1 dj i0" }
    ],
	"volto": "v oo1 W t u0"
};

function showChoicePopup(word, entry) {
  const box = document.getElementById("choiceBox");
  const title = document.getElementById("choiceWord");
  const btn1 = document.getElementById("choice1");
  const btn2 = document.getElementById("choice2");
  const output = document.getElementById("output");
  const input = document.getElementById("input");

  const opt1 = entry[0];
  const opt2 = entry[1];

  title.innerText = `Escolha a pronúncia de "${word}":`;

  btn1.innerText = opt1.type;
  btn2.innerText = opt2.type;

  function chooseOption(opt) {
    output.innerText = opt.ipa;
    box.style.display = "none";
    input.focus();
    document.removeEventListener("keydown", keyHandler);
  }

  btn1.onclick = () => chooseOption(opt1);
  btn2.onclick = () => chooseOption(opt2);

  function keyHandler(e) {
    if (e.key === "ArrowLeft") {
      chooseOption(opt1);
    }
    if (e.key === "ArrowRight") {
      chooseOption(opt2);
    }
  }

  document.addEventListener("keydown", keyHandler);

  box.style.display = "block";
}
