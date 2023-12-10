const fs = require("fs");
const { resolve } = require("path");
(async function out() {
  const dat = resolve(__dirname, "Data.txt");
  const data = await fs.readFileSync(dat);
  const input = data.toString();

  let arr = input.split("\n");

  let sum = 0;
  let final = 0;

  let sums = [];

  arr.forEach((v) => {
    sum += isNaN(Number(v)) ? 0 : Number(v);

    if (v == "\r") {
      sums.push(sum);
      sum = 0;
    }
  });

  sums.sort((a, b) => a - b);
  sums.reverse();

  for (i = 0; i < 3; i++) final += sums[i];
  console.log("FINAL: ", final);
})();
