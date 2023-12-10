const fs = require("fs");
const { resolve } = require("path");

function res(sign) {
  //TIES
  if (sign.startsWith("A") && sign.endsWith("X")) return 3 + 1;
  else if (sign.startsWith("B") && sign.endsWith("Y")) return 3 + 2;
  else if (sign.startsWith("C") && sign.endsWith("Z")) return 3 + 3;
  //WIN
  else if (sign.startsWith("A") && sign.endsWith("Y")) return 6 + 2;
  else if (sign.startsWith("B") && sign.endsWith("Z")) return 6 + 3;
  else if (sign.startsWith("C") && sign.endsWith("X")) return 6 + 1;
  //LOSS
  else if (sign.startsWith("A") && sign.endsWith("Z")) return 0 + 3;
  else if (sign.startsWith("B") && sign.endsWith("X")) return 0 + 1;
  else if (sign.startsWith("C") && sign.endsWith("Y")) return 0 + 2;
}

(async function out() {
  const dat = resolve(__dirname, "Data.txt");
  const data = await fs.readFileSync(dat);
  const input = data.toString();

  let arr = input.split("\n");
  arr = arr.map((e) => e.replace("\r", ""));

  let sum = 0;

  arr.forEach((s) => {
    sum += res(s);
  });

  console.log(sum);
})();
