/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.onload = function(string) {
  //write your code here
  return (
    who[getRandom(0, 3)] +
    " " +
    action[getRandom(0, 3)] +
    " " +
    what[getRandom(0, 2)] +
    " " +
    when[getRandom(0, 4)]
  );
};
console.log("Hello Rigo from the console!");

excuse.innerHTML = onload();
