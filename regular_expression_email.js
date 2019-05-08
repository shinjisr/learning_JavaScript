// 比對 email

// let emailRgx = /\w+\@(\w+)\.\w{2,4}/
// 括號位置和群組顯示有關
// let emailRgx = /\w+\@((\w{2,}\.)+\w{2,4})/
// 進階技巧 (?:a)
// let emailRgx = /\w+\@((?:\w{2,}\.)+\w{2,4})/

// 190507 homework - 
let emailRgx = /((\w+\.*\+*)*(\w+))@((?:\w{2,}\.)+\w{2,4})/
// 精簡匹配後的陣列
let emailRgx = /(?:(?:\w+\.*\+*)*(?:\w+))@(?:(?:\w{2,}\.)+\w{2,4})/
// 可以的

let a = "aaabb@gmail.com".match(emailRgx);
console.log(a)

let b = "cc@yahoo.com".match(emailRgx);
console.log(b)
let yy = "cc@yahoo.com.tw".match(emailRgx);
console.log(yy)

console.log("abcde@gmail.com".match(emailRgx))
console.log("abc.de@gmail.com".match(emailRgx))
console.log("abcd.e@gmail.com".match(emailRgx))
console.log("ab.cd.e@gmail.com".match(emailRgx))
console.log("a.b.c.d.e@gmail.com".match(emailRgx))
console.log("abcde+pchome@gmail.com".match(emailRgx))



// 不行的

let c = "example.com".match(emailRgx);
console.log(c)

let d = "asdf@.com".match(emailRgx);
console.log(d)
