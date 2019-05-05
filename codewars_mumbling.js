// 7 kyu Mumbling
// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/solutions/javascript

// function accum(s) {
//   let sArr = s.toLowerCase().split("");
//   let aArr = [];
//   sArr.map((x, i) => aArr.push(x.repeat(i + 1)));
//   return aArr.map(x => x.replace(x[0], x[0].toUpperCase())).join('-');
// }


// The best practice:
// The most clever solution:

function accum(s) {
  return s.split('').map((x, i) => (x.toUpperCase() + x.toLowerCase().repeat(i))).join('-');
}

accum("ZpglnRxqenU");
accum("NyffsGeyylB");