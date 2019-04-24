let ary = [1, 2, 3, 4, 5]

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

// 保持資料內容 精簡、重要
let personT = {
  name: 'tai',
  birthday: '0407',
  weigh: 70,
  height: 190,
  gender: 'M'
}

let classRoom = {
  name: '3-B',
  teacher: personT,
  student: [
    {name: 'bob', birthday: '0503'},
    {name: 'alice', birthday: '0503'},
    {name: 'john', birthday: '0503'},
  ]
}