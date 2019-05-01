// 6 kyu, but very hard...
// Simple Fun #116: Prime String

// The string is called prime if it cannot be constructed by concatenating some (more than one) equal strings together.
// For example, "abac" is prime, but "xyxy" is not("xyxy"="xy"+"xy").
// Given a string determine if it is prime or not.

// nput/Output
// [input] string s
// string containing only lowercase English letters
// [output] a boolean value
// true if the string is prime, false otherwise




// 190501 - 01:43
// Did not solve yet
// Still working on it
// function primeString(s) {
  // // 轉成單字陣列
  // let sArr = s.split("");
  // console.log(s.indexOf(s[0]))
  // // 比較第一個字和第二個字重複出現的次數
  // let firstCharCount = 0;
  // let secondCharCount = 0;
  
  // for (let i of sArr) {
    //   if (sArr[0] == i) {
      //     firstCharCount += 1;
      //   };
      //   if (sArr[1] == i) {
        //     secondCharCount += 1;
        //   };
        // };
        // return firstCharCount === secondCharCount ? false : true;
      // }
      
      // simple test
function primeString(s) {
  let spStr = s[0] + s[1];
  let spArr = s.split(spStr);
  spArr.shift();
  let falseCount = 0;
  for(let i = 1; i < spArr.length; i ++){
    console.log(spArr[i]);
    console.log(spArr[i - 1]);
    if(spArr[i] !== spArr[i - 1]){
      falseCount += 1;
    };
  };
  return !!falseCount;
}
let str = "xyxy";
// console.log(primeString(str));
// console.log(primeString("fdsyffdsyffdsyffdsyffdsyf")); // should be false
// console.log(primeString("qiuefgqiuefgqiuefg")); // should be false
console.log(primeString("zkvjhuj")); // should be true