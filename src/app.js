/* eslint-disable */
import "./style.css";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let person = [
    "A dinosaur",
    "A clown",
    "A shark",
    "My dog",
    "A racoon",
    "The Ninja Turtles",
    "An Alien",
    "A baby"
  ];
  let action = [
    "bit my",
    "stole my",
    "set fire to my",
    "destroyed my",
    "ran over my",
    "yelled at my"
  ];
  let posession = [
    "arm",
    "car",
    "phone",
    "house",
    "laptop",
    "spouse",
    "children",
    "clothes"
  ];
  let time = [
    "before I could leave",
    "when I walked outside",
    "on my way to work",
    "on my way to class",
    "while I was sleeping"
  ];

  let perIndx = Math.floor(Math.random() * person.length);
  let actIndx = Math.floor(Math.random() * action.length);
  let posIndx = Math.floor(Math.random() * posession.length);
  let timIndx = Math.floor(Math.random() * time.length);

  return (
    person[perIndx] +
    "" +
    action[actIndx] +
    "" +
    posession[posIndx] +
    "" +
    time[timIndx]
  );
};
