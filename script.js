const emojis = [
  "🍀", "🦄", "🥷", "🎩", "🦋", "🍉", "🚀", "⚡", "🐙", "🎉", "🦑", "🍕", "🏄‍♀️", "🎭", "🎤", "🍹", "🏔️", "🎮"
];

const dateIdeas = [
  "Mit dem Longboard, E-Scooter oder Fahrrad nachts durch die Stadt cruisen.",
  "Geheime Orte erkunden (verlassene Gebäude, Dächer, versteckte Spots).",
  "Jeder kauft im Supermarkt 3 weirde Lebensmittel für den anderen und man muss sie probieren.",
  "Drive-In bestellen und das Bestellte gegen Überraschungstauschobjekte tauschen.",
  "Spontan einen Mini-Vlog drehen, aber komplett übertrieben mit Drama, Slow-Mo und epischer Musik schneiden.",
  "Mit nur 5€ den besten Snack-Mix im Kiosk zusammenstellen.",
  "Essen mit verbundenen Augen erraten – einer füttert, der andere rät.",
  "In den Zug steigen und an einer random Haltestelle aussteigen.",
  "In einem Möbelhaus so tun, als würdet ihr einziehen und Fotos machen.",
  "Sterne beobachten – Mit einer Decke draußen oder mit einer App die Sternbilder suchen."
];

function generateRandom() {
  let lastEmoji = sessionStorage.getItem("lastEmoji");
  let lastIdea = sessionStorage.getItem("lastIdea");

  let newEmoji, newIdea;
  do {
    newEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  } while (newEmoji === lastEmoji);

  do {
    newIdea = dateIdeas[Math.floor(Math.random() * dateIdeas.length)];
  } while (newIdea === lastIdea);

  sessionStorage.setItem("lastEmoji", newEmoji);
  sessionStorage.setItem("lastIdea", newIdea);

  const dateIdeaElement = document.getElementById('date-idea');
  dateIdeaElement.style.opacity = 0;
  setTimeout(() => {
    document.getElementById('emoji').textContent = newEmoji;
    dateIdeaElement.textContent = newIdea;
    dateIdeaElement.style.opacity = 1;
  }, 300);
}

document.getElementById('emoji').addEventListener('click', generateRandom);
