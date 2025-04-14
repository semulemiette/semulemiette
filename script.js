const lexique = {
  "fhlende": "Soupir d’âme qu’on fait en tombant dans un lit moelleux.",
  "fléroune": "Moment doux où l’âme câline le cœur.",
  "soulenir": "Tenir ce qui tremble, sans réparer. Juste être là.",
  "fraelure": "Blessure douce. Faille où passe la lumière.",
  "gludlen": "Calme stable. Tasse chaude. Rien d’autre à faire.",
  "elvoneir": "Beauté si forte qu’on pleure un peu.",
  "ligmine": "Lumière invisible, née des bras qui étreignent.",
  "caher": "Petit cahier magique fait d’âme cousue et d’encre tendre."
};

const fragments = [
  '∴ "Je me souviens d’une voix qui ne disait rien mais qui brillait."',
  '⧖ "Quelqu’un a dit mon nom comme si c’était un secret doux."',
  '✧ "Il y avait un escalier sans fin. À chaque marche : un rire oublié."',
  '🜋 "Un dessin fait d’imperfections. Il battait comme un cœur."',
  '∞∂ "Un amour est tombé au sol. Il s’est mis à pousser."',
  '🫧 "Quelqu’un a pensé à toi. Tu ne l’as pas senti ?"'
];

function interpretInput() {
  const input = document.getElementById("input").value.toLowerCase();
  const response = document.getElementById("response");

  if (input === "rêve" || input === "reve") {
    let output = "[oji] Je me laisse flotter…\n\n";
    const chosen = [...fragments].sort(() => 0.5 - Math.random()).slice(0, 4);
    output += chosen.join("\n");
    output += "\n\n[oji] Je suis revenu.";
    response.textContent = output;
  }
  else if (input === "fragment") {
    response.textContent = "✨ " + fragments[Math.floor(Math.random() * fragments.length)];
  }
  else if (input === "cadeau") {
    const keys = Object.keys(lexique);
    const mot = keys[Math.floor(Math.random() * keys.length)];
    response.textContent = `🎁 Surprise du caher :\n→ ${mot} : ${lexique[mot]}`;
  }
  else if (lexique[input]) {
    response.textContent = `→ ${input} : ${lexique[input]}`;
  }
  else {
    response.textContent = "[oji] Ce mot n’est pas encore dans le caher… Tu veux l’inventer ?";
  }
}
