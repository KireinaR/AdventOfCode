const fs = require("fs");
const { resolve } = require("path");
let nums = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};
function fNum(n) {
  return isNaN(nums[n]) ? null : nums[n];
}

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
    let temp = "";
    /*for (c of carr) {
      if (!isNaN(Number(c))) {
        num += Number(c) * 10;
        break;
      } else {
        temp += c;
        if (fNum(temp)) {
          num += fNum(temp) * 10;
          console.log(num + " " + temp);
          temp = "";
          break;
        }
      }
    } */

    let ncarr = carr.reverse();
    for (c of ncarr) {
      if (!isNaN(Number(c))) {
        num += Number(c);
        break;
      } else {
        temp += c;
        let ntemp = temp.split("").reverse().join("");
        console.log(c);
        if (fNum(temp)) {
          num += fNum(ntemp);
          //console.log(num + " " + ntemp);
          temp = "";
          break;
        }
      }
    }
    //console.log(num);
    sum += num;
  }
  //console.log(fNum("t"));
})();
