const emojis = ["🍀", "🦄", "🥷", "🎩", "🦋", "🍉", "🚀", "⚡", "🐙", "🎉"];
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

const emojiSelection = document.getElementById("emoji-selection");
const dateIdeaElement = document.getElementById("date-idea");

// Emojis in der Auswahl anzeigen
emojis.forEach((emoji) => {
  const emojiElement = document.createElement("div");
  emojiElement.textContent = emoji;
  emojiElement.classList.add("emoji");
  emojiElement.addEventListener("click", () => selectEmoji(emoji));
  emojiSelection.appendChild(emojiElement);
});

// Funktion, um Emoji auszuwählen und die Idee zu zeigen
function selectEmoji(selectedEmoji) {
  emojiSelection.classList.add("hidden"); // Emojis verschwinden
  setTimeout(() => {
    const randomIdea = dateIdeas[Math.floor(Math.random() * dateIdeas.length)];
    dateIdeaElement.textContent = randomIdea;
    dateIdeaElement.style.opacity = 1;
  }, 500); // Kurze Verzögerung für bessere Animation
}
