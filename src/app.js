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

function perfectExcuse() {
  let randomExcuse = who[Math.floor(Math.random() * who.length)] + " ";
  randomExcuse += action[Math.floor(Math.random() * action.length)] + " ";
  randomExcuse += what[Math.floor(Math.random() * what.length)] + " ";
  randomExcuse += when[Math.floor(Math.random() * when.length)] + " ";

  document.getElementById("excuse").innerHTML = randomExcuse;
}
