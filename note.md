# JavaScript note

190423 - 12:12

```js
let fruits = ["apple", "banana", "orange"];
fruits.length

fruits.push("pear") // 在最後面加一個元素
fruits.pop() // 把最後一個元素丟出來
fruits.unshift("grape") // 在最前面加入一個元素
fruits.shift() // 丟出最前面的元素
fruits.join() // 將陣列轉成字串
fruits.concat() // 連接陣列 不改變原始資料
fruits.includes("lalala"); // 判斷陣列內是否有包含 'lalala'
```

```js
let langs = ["Ruby", "Python", "Java"];
let otherLangs = ["Elixir", "Haskell"];

langs = langs.concat(otherLangs); // 印出相加，不會改變原始資料

console.log(langs); //
```
