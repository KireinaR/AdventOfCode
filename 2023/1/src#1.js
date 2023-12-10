const fs = require("fs");
const { resolve } = require("path");
(async function out() {
  const dat = resolve(__dirname, "Data.txt");
  const data = await fs.readFileSync(dat);
  const input = data.toString();

  let arr = input.split("\n");
  arr = arr.map((e) => e.replace("\r"));
  let sum = 0,
    num = 0;

  for (let line of arr) {
    let carr = line.split("");

    for (c of carr) {
      if (!isNaN(Number(c))) {
        num += Number(c) * 10;
        break;
      }
    }
    let ncarr = carr.reverse();

    for (c of ncarr) {
      if (!isNaN(Number(c))) {
        num += Number(c);
        break;
      }
    }
    sum += num;
    num = 0;
  }

  console.log(sum);
})();
