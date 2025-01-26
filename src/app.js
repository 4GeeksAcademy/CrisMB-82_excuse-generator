/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const who = [
  "My cat",
  "My computer",
  "His parrot",
  "The apocalypse",
  "Nickelback"
];
const action = ["destroyed", "ate", "vomited on", "exploded"];
const what = ["my notes", "my homework", "the tickets", "the bus"];
const when = [
  "before the class",
  "when I was planning to do it",
  "when I finished",
  "during my lunch",
  "while I was having coffee"
];

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function generateExcuse() {
  return `${getRandomElement(who)} ${getRandomElement(
    action
  )} ${getRandomElement(what)} ${getRandomElement(when)}.`;
}

function updateExcuse() {
  const excuse = generateExcuse();
  document.getElementById("excuse").textContent = excuse;
}

updateExcuse();

document.getElementById("changeExcuse").addEventListener("click", updateExcuse);
