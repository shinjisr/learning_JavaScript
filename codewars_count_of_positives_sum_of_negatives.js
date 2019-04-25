// Count of positives / sum of negatives

// Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
// If the input array is empty or null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
  let ansArr = [];
  if( input == null || input == undefined || input.length == 0 ){
    return  ansArr;
  }
  ansArr[0] = input.filter(x => x > 0).length;
  ansArr[1] = input.reduce((x, y) => x + (y < 0 ? y : 0), 0);
  return ansArr;
}


// Refactor
function countPositivesSumNegatives(input) {
  return input == null || input.length == 0 ? [] : [input.filter(x => x > 0).length, input.reduce((x, y) => x + (y < 0 ? y : 0), 0)]
  // console.log(input) // 確認輸入的好方法
  // if( input == null || input == undefined || input.length == 0 ){
  //   return  ansArr
  // }
  // // ansArr[0] = input.filter(x => x > 0).length;
  // ansArr[0] = input.filter(x => x > 0).length;
  // ansArr[1] = input.reduce((x, y) => x + (y < 0 ? y : 0), 0);
  //   return ansArr;
}
// Refactor2
function countPositivesSumNegatives(input) {
  return input && input.length ? [input.filter(x => x > 0).length, input.reduce((x, y) => x + (y < 0 ? y : 0), 0)] : [];
}