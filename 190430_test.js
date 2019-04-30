// 1

let a = 5;
console.log('第一題');
console.log(a);

console.log('第二題');
let ary = [];
ary[0] = a;
ary[1] = a * 2;
ary[2] = a * 3;

console.log(ary);

console.log('第三題');
function allSubTwo(ary) {
  // let ansAry = []
  // for(let e of ary){
  //   ansAry.push((e - 2));
  // }
  // return ansAry;
  return ary.map(x => x - 2);
}

// let allSubTwo = function(myAry) {}

console.log('Call allSubTwo()');
console.log(allSubTwo(ary));