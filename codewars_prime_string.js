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

function primeString(s) {
  // 將字串重複的部份切成一個規律的陣列
  let spArr = s.split(s[0]);
  spArr.shift();

  // 宣告 不重複計數器
  let falseCount = 0;
  // save all the element and repeat count into key-value pair
  let tCounter = {};
  spArr.forEach(x => { tCounter[x] = (tCounter[x] || 0) + 1; });
  
  // 將每個元素的重複出現次數清點過後比較，如果出現的次數相同表示有重複
  for(let e of spArr) {
    // 如果重複次數小於等於
    (tCounter[spArr[0]] <= 1) || (tCounter[spArr[0]] !== tCounter[e]) ? falseCount += 1: e;
  };
  
  // 將不重複計數器 falseCount 的值轉為布林值輸出
  return !!falseCount; 
}



console.log(primeString("asdf")); // should be true
console.log(primeString("abac")); // should be true
console.log(primeString("qiuefgqiuefgqiuefg")); // should be false
console.log(primeString("zkvjhuj")); // should be true

// The best practice & The most clever solution:

function primeString(s) {
  return (s + s).indexOf(s, 1) == s.length;
};
// The second most clever solution:
// using Regular Rxpression test
function primeString(s) {
  return !/^(.+)\1+$/.test(s)
};