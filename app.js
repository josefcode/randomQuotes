window.onload = () => {
  random();
};

const quotes = [
  { quote: "It's a trap!", character: "Admiral Ackbar" },
  { quote: "Because he's holding a thermal detonator!", character: "C-3PO" },
  {
    quote:
      "Don't call me a mindless philosopher, you overweight glob of grease.",
    character: "C-3PO",
  },
  { quote: "Don't get technical with me.", character: "C-3PO" },
  { quote: "Let the Wookiee win.", character: "C-3PO" },
  {
    quote:
      "Sir, the possibility of successfully navigating an asteroid field is approximately 3,720 to 1.",
    character: "C-3PO",
  },
  { quote: "We're doomed.", character: "C-3PO" },
  { quote: "All too easy.", character: "Darth Vader" },
  { quote: "I find your lack of faith disturbing.", character: "Darth Vader" },
  { quote: "No. I am your Father.", character: "Darth Vader" },
  { quote: "Stay on target.", character: "Gold Five" },
  { quote: "Great, kid. Don't get cocky.", character: "Han Solo" },
  { quote: "Laugh it up, fuzzball.", character: "Han Solo" },
  { quote: "Never tell me the odds.", character: "Han Solo" },
  {
    quote: "Traveling through hyperspace ain't like dusting crops, farm boy.",
    character: "Han Solo",
  },
  {
    quote:
      "If there's a bright center to the universe, you're on the planet that it's farthest from.",
    character: "Luke Skywalker",
  },
  {
    quote: "I have a very bad feeling about this.",
    character: "Luke Skywalker",
  },
  { quote: "There is good in him. I've felt it.", character: "Luke Skywalker" },
  { quote: "This is Red Five. I'm going in!", character: "Luke Skywalker" },
  {
    quote: "In my experience there is no such thing as luck.",
    character: "Obi-Wan Kenobi",
  },
  {
    quote: "Remember... the Force will be with you, always.",
    character: "Obi-Wan Kenobi",
  },
  {
    quote: "Your eyes can deceive you. Don't trust them.",
    character: "Obi-Wan Kenobi",
  },
  {
    quote: "Aren't you a little short for a stormtrooper?",
    character: "Princess Leia",
  },
  { quote: "Somebody has to save our skins.", character: "Princess Leia" },
  {
    quote: "Why you stuck-up, half-witted, scruffy-looking nerf-herder!",
    character: "Princess Leia",
  },
  { quote: "Your focus determines your reality.", character: "Qui-Gon Jinn" },
  { quote: "Do. Or do not. There is no try.", character: "Yoda" },
  {
    quote:
      "Once you start down the dark path, forever will it dominate your destiny.",
    character: "Yoda",
  },
];

function random() {
  let randomQuotes = Math.floor(Math.random() * quotes.length);
  $("#text").html(`<span>${quotes[randomQuotes].quote}</span>`);
  $("#author").html(`<span>${quotes[randomQuotes].character}</span>`);
  $("#tweet-quote").attr("href", `https://www.google.com/`);
}

$("#new-quote").click(random);
