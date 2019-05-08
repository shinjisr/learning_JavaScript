# 190507

## @11:10 Regular expression 正規表達式

直接比對（一個字一個字比對）
`"abced".match(/abc/)` // true
`"abcde".match(/1/)` // true

```js
let r = "abcde".match(/abc/)
console.log(r) // ["abc"]

/abcde/.exec("abc")     // null
/abcde/.exec("abcdefg") // ["abcde"]
```

- 包含

```js
"abce".match(/[a-z]/) // ["a"]
"Abce".match(/[A-Za-z]/) // ["A"]
"abce1".match(/[1-9a-z]/) // ["a"] 只抓一個
```

- 不包含

```js
"abcde".match(/[^a-d]/) // ["e"]
"Abce1234".match(/[^A-Za-z]/) // ["1"]
"abce1".match(/[^1-9a-z]/) // null
```

類型

```js
"abcde".match(/\w/) // 所有字加底線，等同於 [A-Za-z0-9_]
"abcde".match(/\W/) // 所有不屬於 [A-Za-z0-9_] // null
"1abcde".match(/\d/) // 等同於 [0-9]
"1abcde".match(/\D/) // 所有不屬於 [0-9]

\s // 空白
\t // tab
\n // 換行
\r // 換行
```

- 任一種
`"bar.js".match(/js/)` // 比對 "js"
`"bar.js".match(/rb|js/)` // 比對 "rb" 或者 "js"

- 條件(修飾前面一個字)

```js
"abde".match(/abc?de/) // ["abde"], 零個或一個 c
"abde".match(/abc+de/) // null, 一個以上的 c (abccccde)
"abccccccde".match(/abc*de/) // ["abccccccde"] 零個或多個 c
```

重複次數

```js
"aaabc".match(/aaa/) // ["aaa"]
"aaabc".match(/a{3}/) // a 重複正好 3 次 ["aaa"]
"aaabc".match(/\w{3,5}/) // ["aaabc"]3~5 英字、數字、"_"
"aaaaaaaabc".match(/\w{3,}/) // ["aaaaaaaabc"] 找 3 個以上～
"A12sakef345".match(/[A-Z]\d\d\d\d\d)

let goodGuy = /[A-Z]\d{9}/.exec("A123456789")

console.log(goodGuy) // ["A123456789"]

let regex = /[A-Z]\d{9}/

var goodGuy = "A123456789".match(regex) // ["A123456789"]
```

- 任何東西： "."

`"@-_%las".match(/....las/) // ["@-_%las"`

- 脱逸符號： "\"

```js
"foo.js".match("\.js") // [".js"]
```

> Note:[]裡面不需要脱逸

比對副檔名：

```js
// group
var picRgx = /(\w+)(\.jpe?g|\.png)/
// match
var picRgx1 = /\w+\.jpe?g|\w+\.png/

console.log("bbb.jpg".match(picRgx))
console.log("ccc.jpeg".match(picRgx))
console.log("ddd.png".match(picRgx))
console.log("fff.xls".match(picRgx))
console.log("aaa.doc".match(picRgx))
console.log("aaa".match(picRgx))
```

## @14:00群組

- 群組

比對電話

```js
let rgx = /(0\d)-?(\d{4})-?(\d{4})/
let numbers = "02-28825252".match(rgx)
console.log(numbers) // ["02-28825252", "02", "2882", "5252"]
let tex = "02-28825252".match(phoneNumber)
let phoneNumber = /(0\d)(?:[-\s])?(\d{4})(?:[-\s])?(\d{4})/
console.log(tex)

let [,...aaa] = [1, 2, 3, 4, 5]
console.log(aaa) // [2, 3, 4, 5]
```

比對 email

```js
// 比對 email

// let emailRgx = /\w+\@(\w+)\.\w{2,4}/
// 括號位置和群組顯示有關
let emailRgx = /\w+\@((\w{2,}\.)+\w{2,4})/

// 可以的

let a = "aaabb@gmail.com".match(emailRgx);
console.log(a)

let b = "cc@yahoo.com".match(emailRgx);
console.log(b)
let yy = "cc@yahoo.com.tw".match(emailRgx);
console.log(yy)

// 不行的

let c = "example.com".match(emailRgx);
console.log(c)

let d = "asdf@.com".match(emailRgx);
console.log(d)
```

進階用法：不記憶群組，look ahead，look behind

 ```js
 (?:a) // 不記憶群組
 (?=a) // look ahead 加入搜尋的字串『往回找』額外條件，例如往前找不能出現某條件
 (?!a) // look behind

 let emailRgx = /\w+\@((?:\w{2,}\.)+\w{2,4})/

// 190507 homework - done
let emailRgx = /((\w+\.*\+*)*(\w+))@((?:\w{2,}\.)+\w{2,4})/

```

- 有時候事情並不美好...

## 文字邊界：\b

```js
比對 "oo"

// oo 的前後都下邊界
let rgx = /\boo\b/

"moon".match(/\boo/) // null
```

## 冷知識： s.t.e.v.e.n.c.c.h@gmail.com

### 開頭與結尾： `^` 以及 `$`

`"history".match(/his$/) // null`
`"history".match(/^is/) // null`

- 常用修飾符

g:global：不管幾次 match 都抓出來
i:不在乎大小寫

也可以把字串轉為 reg

```js
let rgx1 = new RegExp("oo", 'ig')
let rgx1 = new RegExp("\\wo", 'ig')

let rgx = /oo/ig

let a = "the Oo design is good, I love OOP".match(rgx)

console.log(a)
```

- 替換威能

```js
"oomgbbq".replace(/b+q/, '0000') // 'oomg0000'

let str = "I love Oop design, its oOP, moon"
let r = str.replace(/\boo/ig, 'OO');
console.log(r)
```

regular expression應用

```js
exec
match
test

search
replace
split
```

## @15:52什麼是 this

### ! this 所指涉的對象，係由呼叫的時候去決定，而不是宣告的時候。

```js
let a = 999

let obj = {
  a: 200,
  foo: function(i) { console.log(this.a + i)}
}

obj.foo(1) // 201

// confus part
let f = obj.foo
f(1) // 1000 指涉到運作的背景 scope
// 等同於
f.call(this, 1) // 同 f(1)，"this" 指涉到 windows

obj.foo(1) // 201
// 等於
f.call(obj, 1) // 201, obj 在這裡指環境變數
```

- apply and call

f.apply(obj, [2]) // 唯一和 call 不同的地方在接受參數的方法。
f.call(obj, 2)

### 大寫開頭函式：建構式

- JavaScript 類似 OO 的地方：
prototype

```js
// 第一種方法 - 建構式：
function Car(brand, model) {
  this.brand = brand
  this.model = model
};


Car.prototype.drive = function(point) { console.log(point)};

let c = new Car('Toyota', 'RAV4');
c.drive(1000)

console.log(c.brand)
```

## ES6 syntax:

```js
// 來自 ES6 的第二種創建方法語法糖 - 類別：
// 如果要繼承 React：
class Car extends React{
  constructor(brand, model) {
    this.brand = brand
    this.model = model
  }

  drive() {
    console.log(this.brand)
    console.log("vrooooom")
  }
}

let c = new Car('totyta', 'RAV4')
c.drive()
```

- 如何加上函式或共用屬性？

```js
Car.prototype.drive = function() { console.log("booom!")}

Car.prototype.wheelsCount = 4
```

- 字串

```js
'a'.padStart(5, '-=') // '-=-=a'
'a'.padStart(4, '-=') // '-=-a'
'a'.padEnd(4, '-=') // 'a-=-'

.trimStart()
.trimEnd()
```

@17:13 obj function shorthand

- Arrow function

```js
let foo = function(a) {
  return a + 1
}

// 注意 arrow function 的 this 與一般函式不同
let foo2 = (a) => { return a + 1}

let foo3 = a => { return a + 1}

let foo4 = a => a + 1
```

### 範疇論
### functional programing 三神器

map : 相等
filter ： 相等或減少
reduce ： 收斂，最終折疊而成的型別，會變成預設的型別

```js
let ary2 = [{a: 10}, {a: 20}, {a: 30}]
let r = ary2.reduce((accu, i) => accu += i.a) // 如果沒加預設值，結果會很奇怪 "[object Object]2030"
let r = ary2.reduce((accu, i) => accu += i.a, 0) // 60
console.log(r)
```

...zip.etc.

善用三神器：

```js
let ary = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let keep2 = i => i % 2 == 0
let multi3 = i => i * 3

let result =
    ary.filter(keep2)
       .map(multi3)
       .reduce((accu, i) => accu + i, 0)
console.log(result)
```

```js
// ...[1, 2, 3] => [1, 2, 3]

function myMap(ary, f){
  // ...accu 可以把第一次運轉收到的 null
  return ary.reduce((accu, i) => [...accu, f(i)], [])
}

// TODO
let r =
  mayMap([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], i => i * 100)
console.log(r)
console.log([...[1, 2, 3], ...[4, 5, 6]])
```

```js
let f = i => [i, i * 2]
let r = [1, 2, 3].map(f)
console.log(r) // [[1, 2], [3, 4], [5, 6]]
let r = [1, 2, 3].flatMap(f) // [1, 2, 3, 4, 5, 6]
```