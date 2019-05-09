# 190509

@10:40學程式最難的事

## 推薦書單

- [一個人的獲利模式：用這張圖，探索你未來要走的路](https://www.books.com.tw/products/0010756794)
- [刻意練習](https://www.books.com.tw/products/0010752714)
- [Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones](https://www.books.com.tw/products/F014268227)

## @10:50 JavaScript expression

與 expression 相對的是 statement

- statement 沒有回傳值

## @10:57 ES6

- Arrow function tip: 如果想要回傳物件

```js
let foo = (a) => { return {a: a, b: 10}}

// 解法
let foo = (a) => ({a: a, b: 10})
```

## 解構賦值

等號的右邊接的是陣列或物件的時候，大約就是在做解構賦值。
效能會比較好。

```js
p = ["bob", 18, "male"]
let [name, age, gender] = p

// ! 不一定要全部取出
let [name] = p

var person = {name: "ashley", age: 19, gender: "F"}
let {gender: gender, name: name, age: age} = person

// ！ 如果 key 和變數的名稱相同，可以省略 key:
let {gender, name, age} = person

//也不一定要全部取出
let {gender, name} = person

cnosole.log(name)
```

## @11:29 解構賦值特技

```js
var person = {name: "ashley", age: 19, gender: "F"}

var isAdult = function(person) {
  // var {age} = person
  return person.age > 18
}
// refactor with destructure assignment
var isAdult = function({age}) {
  age > 18
}

let r = isAdult(person)
console.log(r) // true

// ! 可以寫出這樣漂亮的程式
var isAdult2 = ({age}) => age > 18
let n = isAdult2(person)
console.log(n)

var greeting = ({name}) => `Hello, ${name}`
let h = greeting(person)
console.log(h)
```

## "..." 具有『拆開』和『組裝』的含義

```js
// 拆掉空值：
console.log([...[1, 2, 3], ...[], [4, 5, 6]])
// [1, 2, 3, 4, 5, 6]

// 接受不定參數
function foo(name, age, ...options) {
  console.log(name)
  console.log(options)
}

foo(7, 8, 9, 0, 1)

let [head, ...tails] = ['x', 'y', 'z', 'omgbbq']
console.log(head) // "y"
console.log(tails) // ["z", "omgbbq"]
```

## @11:52 live coding 遞迴

```js
function mult3sum([head, ...tails]) {
  if (tails.length === 0) { return 0}
  return foo(tails) + (head * 3)
}

let r = foo([1, 2, 3, 4, 5])
console.log(r)
```

### tail recursion 尾遞迴

最後一行回傳函式時 節省記憶體

```js
// function foo([head, ...tails]) {
//   // return tails
//   if (tails.length === 0) { return 0}
//   return foo(tails) + (head * 3)
// }


// version 2 偽遞迴

function foo([head, ...tails], accu) {
  // return tails
  if (tails.length === 0) { return accu}
  return foo(tails, accu + head * 3)
}


let r = foo([1, 2, 3, 4, 5], 0)
console.log(r)

// version 3

function foo(list) {
  return execFoo(list, 0)
}

function execFoo(list, accu) {
  if (list.length === 0) { return accu }
  let [head, ...tails] = list
  return execFoo(tails, accu + head * 3)
}

let n = foo([1, 2, 3, 4, 5])
console.log(r)
```

## @13:21 函式的預設參數

預設參數通常會放在後面，避免出問題
`function bar(x, y = 3, z = 4) {}`

```js
// 在 bar(100, 0) 會出問題
// function bar(x, y) {
//   y = y || 1
//   return x * y
// }

// 真的給參數預設值
function bar(x, y = 1) {
  return x * y
}

let r1 = bar(100, 2) // 200
console.log(r1)
let r2 = bar(100) // 100
console.log(r2)
let r3 = bar(100, 0)
console.log(r3)
```

### 模擬參數過少導致函式爆炸：

```js
function baz(x = argumentError()) {
  return x * 200
}

function argumentError() {
  throw new Error('argument not enouth')
}

let r = baz()
console.log(r)

function foo(obj, keys = Object.keys(obj)) {
  console.log(keys)
}

foo({a: 1, b: 2, c: 3})
```

### @13:48 示範

```js
function checkValues(obj, keys = Object.keys(obj)) {
 return Object.entries(obj)
              .filter(([k, v]) => keys.includes(k))
              .filter(([k, v]) => v === null)
              .map(([k]) => k)
}

let obj = {
  a: 1,
  b: null,
  c: null,
  d: 10
}

let r = checkValues(obj, ["a", "c"])
console.log(r)
```

## 加掛套件功能：

從舊到新排列

1. underscore.js
2. Lodash.js
3. Ramda

```js
var ks = ["a", "b", "c"]
var vs = [1, 2, 3]
_.zip(ks, vs) // underscore.js
```

## Futhermore https://es6.ruanyifeng.com/

重要的，章節依照重要性排列：
1, 8, 9, 23, 10, 11, 16, 21, 3, 5

特定情況下好用的
13, 22, 20, 12

## @14:48 Befor Babel and Webpack

- CommonJS, node_module and npm

- (動態加載)
- require & module.exports 互相成對

- (靜態加載)
- 另一種方法： "import baz from" "export" 沒有 s

### 參考

好的套件大多反映在好的文件：

- Ramda
- Moment.js
差不多要變成公規版的時間套件。

## @15:28 package.json

`npm init`

### 待釐清

License:

- ISC
- GPL
- LGPL

- npx: 會在 local 找 node module, 如果沒有就會去網路上找。

- 指定啟動檔案
在 `package.json` "scripts": {}內加入：
    `"start": "node index.js",`
    `"dev": "node index.js",`

`npm run start` or `npm run dev`

- 安裝 moment 套件
- `npm i -s moment`
此指令會幫忙修改  `package.json` 內容， "-s" 代表由使用者安裝的時候才會下載套件。

- 在主要檔案 `index.js` 內加入
`const moment = require('moment')`
再輸入
`npm run start`

- 指定此套件只在開發階段使用
`npm i -D jest`
回到 `package.json` 修改  `"test": "jest",`

- 其他人要用，必須複製整個資料夾
`npm install momentjs`

- 把它存到 `package.json` 裡
  `npm install -s react`
  `npm install -D @babel/core`

- 想在這台電腦上都可以用的話
  `npm install -g yarn`
  此指令透過 `yarn` 取代 `npm` 以避免早期 npm 因為沒有 `package-lock.json` 而衍生的問題。
  - 升級 npm: npm install -g npm

## @16:14 Babel

`npx create_react_app my_react_168`

- babel 翻譯新版 JavaScript 語法為可以使用在各種瀏覽器上相容的 ES5 舊語法，規定翻譯的規則放在`babel.config.js`。

## @16:21 Webpack

四個重點：

### 入口

- "CSS in JS" 相當先進的做法。
從哪邊開始載入，通常是一張你寫的 `js` 檔案。有些人會把 .cs or .scss 也放進來，是比較 hack 的做法，有可能造成預期之外的結果。

- 此做法可以將指定 特定 CSS 的作用域。

### 輸出

通常是個資料夾，慣例上會用 build/ 或是 dist/，處理好的檔案

### Loaders

用來處理檔案的工具，需要先用 `npm install` 安裝

### Plugins

其他工具，需要先用 `npm install` 安裝

## `npm i -d webpack`

## 如果要在 Rails 專案中使用：

Webpacker (Rails 專用 Gem)

- 需要有 yarn
- 想要用 webpack 打包的檔案放在 a//javascript/packs
- 與 Rails 整合的設定檔在 config.webpacker.yml
- webpack 行為的設定檔在 config/webpack/development.js

Installation:

- `rails new myapp --webpack`

- 舊專案：
  - Add into Gemfile
  - `bundle exec rails webpacker:install`