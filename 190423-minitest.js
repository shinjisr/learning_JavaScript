let ary = [1, 2, 3, 4, 5]
// turn to [9, 8, 7, 6, 5, 4]

// #1
count = 0
for(e in ary){
  ary[count] = 9 - e
  console.log(e)
  count += 1
}
ary.push(4)

// #2

// 1. reverse
// 2. push 0
// 3. plus 4 into it

console.log(ary)