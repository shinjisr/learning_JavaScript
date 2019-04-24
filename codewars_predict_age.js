function predictAge(...ages){
  
  // let agesArr = [age1, age2, age3, age4, age5, age6, age7, age8];
  let agesArr = [...ages];
  // let ag2 = agesArr.map(ag => ag * ag);
  // sum = ag2.reduce((a, b) => a + b);
  let sum = agesArr.map(ag => ag * ag).reduce((a, b) => a + b);
  // console.log(Math.floor(Math.sqrt(sum) / 2));
  console.log(Math.sqrt(sum) / 2 | 0); // trun  answer to Integer
}

predictAge(65, 60, 75, 55, 60, 63, 64, 45)