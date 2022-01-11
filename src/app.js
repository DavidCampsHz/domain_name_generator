/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let article = "The ";
  let adjective = [
    "green ",
    "big ",
    "small ",
    "mad ",
    "dummy ",
    "red ",
    "hungry "
  ];
  let noun = ["dog ", "bird ", "car ", "cat ", "cloud ", "runner ", "woman "];
  let verb = [
    "stole ",
    "ate ",
    "punched ",
    "broke ",
    "wrote ",
    "sent ",
    "clicked "
  ];
  let thing = [
    "my mobile ",
    "your mice ",
    "his socks ",
    "her mask ",
    "our glass ",
    "my homework "
  ];
  let place = [
    "at home",
    "in the cinema",
    "at the office",
    "from my jacket",
    "on the table",
    "at the beach"
  ];

  // random variables
  let randomAdj = Math.floor(Math.random() * adjective.length);
  let randomNoun = Math.floor(Math.random() * noun.length);
  let randomVerb = Math.floor(Math.random() * verb.length);
  let randomThing = Math.floor(Math.random() * thing.length);
  let randomPlace = Math.floor(Math.random() * place.length);

  // concatenate the excuse
  document.querySelector("#randomExcuses").innerHTML =
    article +
    adjective[randomAdj] +
    noun[randomNoun] +
    verb[randomVerb] +
    thing[randomThing] +
    place[randomPlace];
};
