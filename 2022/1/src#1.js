const fs = require("fs");
const { resolve } = require("path");
(async function out() {
  const dat = resolve(__dirname, "Data.txt");
  const data = await fs.readFileSync(dat);
  const input = data.toString();

  let arr = input.split("\n");

  let sum = 0;
  let max = 0;

  arr.forEach((v) => {
    sum += isNaN(Number(v)) ? 0 : Number(v);

    if (v == "\r") {
      if (sum > max) {
        max = sum;
      }
      sum = 0;
    }
  });

  console.log(max);
})();
