const fs = require("fs");
const { resolve } = require("path");

function isSetPossible(set) {
  let red = 12,
    green = 13,
    blue = 14;
  let flag = true;
  let cubes = set.split(",").map((e) => e.trim());

  for (let cube of cubes) {
    if (cube.split(" ")[1] == "red") {
      if (Number(cube.split(" ")[0]) > red) {
        flag = false;
        break;
      }
    } else if (cube.split(" ")[1] == "green") {
      if (Number(cube.split(" ")[0]) > green) {
        flag = false;
        break;
      }
    } else if (cube.split(" ")[1] == "blue") {
      if (Number(cube.split(" ")[0]) > blue) {
        flag = false;
        break;
      }
    }
  }
  return flag;
}

(async function out() {
  const dat = resolve(__dirname, "Data.txt");
  const data = await fs.readFileSync(dat);
  const input = data.toString();
  let sum = 0;

  let arr = input.split("\n");
  arr = arr.map((e) => e.replace("\r", ""));

  arr.forEach((line, index) => {
    line = line.substring(line.indexOf(":") + 1).trim();
    let sets = line.split(";").map((e) => e.trim());
    let flag = true;
    for (let set of sets) {
      console.log(set);
      if (!isSetPossible(set)) {
        flag = false;
        break;
      }
    }
    if (flag) sum += index + 1; /* {
      fs.appendFile("out.txt", `\n${index + 1}`, () => {});
    } */
  });
  console.log(sum);
})();
