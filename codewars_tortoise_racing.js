// 6 kyu Tortoise racing
// https://www.codewars.com/kata/tortoise-racing/train/javascript

// function race(v1, v2, g) {
//   const secs = 3600;
//   // let time = g / (v2/secs - v1/secs);
//   let time = g / (v2 - v1);
//   // return v2 > v1 ? [hh, mm, ss] = [time | 0, ((time / 60) | 0) % 60, Math.floor((time % 60))]: null;
// 	console.log("TCL: race -> [time | 0, ((time * 60) | 0) % 60, (time * 3600 % 60) | 0]", [time | 0, ((time * 60) | 0) % 60, (time * 3600 % 60) | 0])
//   return v2 > v1 ? [hh, mm, ss] = [time | 0, (time * 60) % 60 | 0, (time * 3600 % 60) | 0]: null;
// }


function race(v1, v2, g) {
  let time = g / (v2 - v1);
  return v2 > v1 ? [hh, mm, ss] = [time | 0, (time * 60) % 60 | 0, (time * 3600 % 60) | 0]: null;
}


race(720, 850, 70) //  [0, 32, 18] or "0 32 18"
race(80, 91, 37)   //  [3, 21, 49] or "3 21 49"