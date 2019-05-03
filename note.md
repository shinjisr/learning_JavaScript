# JavaScript note

# 190423 - 12:12

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

# 190425

## callBack()

```js
function addTwo(i) {return i + 2}

function processNumberThenPlusThree(i, callBack) {
  let result = callBack(i)
  result = result + 3
  return result
}

let r = processNumberThenPlusThree(10, addTwo)


function happy() { console.log('lalala');}

function highOrder(callBack) {
  console.log('Hello')
  callBack()
}

highOrder(happy)
```

## IIFE
Immediately Invoked Function Expression
```js
let z = (function(x) {
  let i = 100
  let y = 3000
  return i = i + y + z
})(10000)

console.log(z)
```

### 包覆節點

```js
$(target).wrap('<div class="foo"></div>')
$(target).wrap('div.foo')

- 刪除及複製

('目標').remove()
('目標').detach()
('目標').empty()
('目標').clone()

('目標').replace('新節點')

.prop()
property

.attr()
取出屬性 attribute

.data()
取出 html 標籤中 data-.. 屬性的內容
data-attribute
```

## 處理表單
### 事件
```js
.change() == 按下 enter, 滑鼠離開表單觸發

.val() == for input 專用


.keypress() == 後面兩者
.keydown()
.keyup()
```

# 190430

```js
let person = {
  first_name: "t",
  last_name: "s",
  height: 176,
  weight: 70,
  greetingTo: function(name) {},
  full_name: function() {
    return this.first_name + ' ' + this.last_name}
  }
  // method short hand
  full_name() {}
}

console.log(person.greetingTo)


person.greetingTo

let r = person.full_name

console.log(r)

```

@13:54 DOM event level 2

- 事件冒泡的逆襲：

1. 阻止元素預設的行為：preventDefault()
2. 阻止事件冒泡機制：stopPropagation()
或是 (例如 google drive 拖曳檔案）@14:15
在 event handler 裡 return false

- 在還不存在的元素上綁定事件：[, selector]
在動態生成的頁面中，可以把事件綁在物件的靜態父層：

```js
$(父元素).on('click', 子元素, function(evt) {
  // do something
});


$('#imgDiv').on('click', 'img.pic', function(){})
```

- 可不可以不要用 jQuery?

```js
let elem = document.querySelector('#some_id')
elem.addEventListener('click', function(event) {
  // do something
})
```

參考：[YOU MIGHT NOT NEED JQUERY](http://youmightnotneedjquery.com)

# 190503 websocket

@10:50 關於表單填寫和使用者體驗

debounce: 使用者輸入停下後才進行下一步動作
actioncable: rails 用來處理 websocket 的輕量級套件

適用 rails 的雲端伺服器：

- Linode: 便宜划算的選擇、在東京有機房
- DigitalOcean: 在新加坡有機房，比較貴。
- Vultr: 最便宜的方案只提供 IPv6

@13:54 API 說明
@16:15 重新介紹 for 迴圈

## 作業：挑一個喜歡的 API 來打