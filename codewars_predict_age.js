// 7 kyu Predict your age!
// My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

// In honor of my grandfather's memory we will write a function using his formula!

// Take a list of ages when each of your great-grandparent died.
// Multiply each number by itself.
// Add them all together.
// Take the square root of the result.
// Divide by two.


function predictAge(...ages){
  
  // let agesArr = [age1, age2, age3, age4, age5, age6, age7, age8];
  let agesArr = [...ages];
  // let ag2 = agesArr.map(ag => ag * ag);
  // sum = ag2.reduce((a, b) => a + b);
  let sum = agesArr.map(ag => ag * ag).reduce((a, b) => a + b);
  // console.log(Math.floor(Math.sqrt(sum) / 2));
  console.log(Math.sqrt(sum) / 2 | 0); // trun  answer to Integer
}

// The Best Practices:
// function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
//   let arr = [age1, age2, age3, age4, age5, age6, age7, age8]
//   return Math.floor(Math.sqrt(arr.map(a => a * a).reduce((b,c) => b + c)) / 2)
// }

// * The most clever answer:
// const predictAge = (...ages) => Math.hypot(...ages) / 2 | 0;



predictAge(65, 60, 75, 55, 60, 63, 64, 45) // 86