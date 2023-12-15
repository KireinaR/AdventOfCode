const fs = require("fs");
const { resolve } = require("path");

function getPoints(card) {
  let res = 0;
  let win = card
    .split("|")[0]
    .split(" ")
    .filter((num) => num != " ")
    .filter((num) => num != "");

  let has = card
    .split("|")[1]
    .split(" ")
    .filter((num) => num != " ")
    .filter((num) => num != "");

  for (let i = 0; i < has.length; i++) {
    if (win.indexOf(has[i]) >= 0) {
      if (res == 0) res++;
      else if (res > 0) res *= 2;
    }
  }
  return res;
}

(async function out() {
  const dat = resolve(__dirname, "Data.txt");
  const data = await fs.readFileSync(dat);
  const input = data.toString();
  let points = 0;

  let arr = input.split("\n");
  arr = arr.map((e) => e.replace("\r", ""));

  for (let card of arr) {
    card = card.substring(card.indexOf(":") + 1).trim();
    points += getPoints(card);
  }
  console.log(points);
})();
