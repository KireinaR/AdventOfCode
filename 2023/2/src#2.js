const fs = require("fs");
const { resolve } = require("path");

const setPower = (game) => {
  let sets = game.split(";").map((e) => e.trim());
  let rmax = 0,
    gmax = 0,
    bmax = 0;

  for (let set of sets) {
    let cubes = set.split(",").map((e) => e.trim());

    for (let cube of cubes) {
      if (cube.split(" ")[1] == "red" && cube.split(" ")[0] > rmax)
        rmax = Number(cube.split(" ")[0]);
      if (cube.split(" ")[1] == "green" && cube.split(" ")[0] > gmax)
        gmax = Number(cube.split(" ")[0]);
      if (cube.split(" ")[1] == "blue" && cube.split(" ")[0] > bmax)
        bmax = Number(cube.split(" ")[0]);
    }
  }

  return rmax * gmax * bmax;
};

(async function out() {
  const dat = resolve(__dirname, "Data.txt");
  const data = await fs.readFileSync(dat);
  const input = data.toString();
  let sum = 0;

  let arr = input.split("\n");
  arr = arr.map((e) => e.replace("\r", ""));

  arr.forEach((line, index) => {
    line = line.substring(line.indexOf(":") + 1).trim();
    sum += setPower(line);
  });
  console.log(sum);
})();
