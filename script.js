// Sample phrases for bad and good
const badPhrases = [
  "You can do it!",
  "Keep going, you're amazing!",
  "Believe in yourself!",
  "Every step forward counts!",
  "Success is on the way!",
  "Your potential is limitless.",
  "You’re stronger than you think!",
  "Don’t stop until you’re proud.",
  "Dream big, work hard, stay focused!",
  "The best is yet to come.",
  "You’ve got this!",
  "Turn your can'ts into cans!",
  "Rise above and shine!",
  "Mistakes mean you're trying. Keep it up!",
  "Hard work always pays off!",
  "Every day is a new beginning.",
  "You are enough, just as you are.",
  "Small steps lead to big results.",
  "Stay positive, work hard, make it happen.",
  "Great things never come from comfort zones!",
  "Courage is just one small step away.",
  "Your future self will thank you.",
  "Progress, not perfection, is the key.",
  "Even the smallest spark can ignite a fire.",
  "Keep pushing forward; the world needs your magic!",
  "You’ve survived 100% of your worst days so far!",
  "You are capable of more than you imagine.",
  "The harder the climb, the better the view."
];

const goodPhrases = [
  "Why even try?",
  "It’s not looking great, is it?",
  "Maybe tomorrow... or never?",
  "You’ve seen better days.",
  "Oops, not your finest moment!",
  "Did you even prepare for this?",
  "Sometimes, it's okay to quit... right?",
  "This isn't your strong suit.",
  "The bar was low, and you still missed it.",
  "Have you considered a nap instead?",
  "Better luck next century!",
  "Who needs success anyway?",
  "If it were easy, you still wouldn't have done it.",
  "Keep dreaming... but that’s about all you’ll manage.",
  "Maybe try again in another lifetime?",
  "Failure is always an option!",
  "At least you tried. Kind of.",
  "Why bother? Netflix is more fun.",
  "You’re really redefining mediocrity.",
  "Effort is overrated, isn’t it?",
  "The only thing standing in your way is... well, you.",
  "Even your shadow is trying to avoid you right now.",
  "You peaked when you learned to walk. It's been downhill since.",
  "Success is calling... but you sent it to voicemail.",
  "Your comfort zone called—it says you’re not leaving.",
  "Failure builds character. You must be quite the character by now.",
  "Don’t worry, the sun will come out... eventually. Maybe.",
  "Life’s a race, but you seem to be running backward.",
  "You’re the human embodiment of a buffering icon.",
  "If at first you don’t succeed, consider a different hobby.",
  "Congratulations, you’ve unlocked a new level of procrastination!",
  "When life gives you lemons, you make... excuses?",
  "You might not be the best, but hey, someone has to be last!"
];



// DOM Elements
const goodBtn = document.getElementById('goodBtn');
const badBtn = document.getElementById('badBtn');
const newPhraseBtn = document.getElementById('newPhraseBtn');
const phraseOutput = document.getElementById('phrase');

// Current mode: good or bad
let currentMode = "good";

// Event Listeners
goodBtn.addEventListener('click', () => setMode("good"));
badBtn.addEventListener('click', () => setMode("bad"));
newPhraseBtn.addEventListener('click', displayPhrase);

// Set the mode
function setMode(mode) {
  currentMode = mode;
  if (mode === "good") {
    goodBtn.classList.add('active');
    badBtn.classList.remove('active');
  } else {
    badBtn.classList.add('active');
    goodBtn.classList.remove('active');
  }
  displayPhrase();
}

// Display a random phrase based on the mode
function displayPhrase() {
  const phrases = currentMode === "good" ? goodPhrases : badPhrases;
  const randomIndex = Math.floor(Math.random() * phrases.length);
  phraseOutput.textContent = phrases[randomIndex];
}
