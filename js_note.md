# 190510

@10:40 recap
@10:54
進階：
高階函式
this
物件與原形鍊
@10:57
解構賦值
spread(...拆掉或組裝陣列)

```js
let obj = {a: 1, b: 2, c: 3}
let obj2 = {...obj, b: 6, d: 7} // 合併兩個 物件

console.log(obj) // a: 1, b: 2, c: 3
console.log(obj2) // a: 1, b: 6, d: 7
```

## @11:05 Webpacker 安裝順序

- npm i -g yarn
- rails new my_app --webpack=react --skip-sprockets
- cd my_app
- rails g controller home index

## @11:39 Hello World from Webpacker

- 因為 skip 了 sprockets 所以要把以下的 `link` 改成 `pack`：
到 view > layout > application.html.erb
修改 <%= javascript_include_tag ...%> 改為 javascript_pack_tag

```ruby
<%= javascript_pack_tag 'application', 'data-turbolinks-track': 'reload' %>
```

同理：
`stylesheet_link_tag` -> `stylesheet_pack_tag`(讀取 webpack load 過的整包 css 檔案)

## @13:05 jQuery - $(document).ready 的問題

因為使用 ajax 生成網頁，故沒有document

- gem: turbo links 問題解法：
// 換頁的時候，需要以下幾行處理 trubolinks 的問題
$(document).on('turbolinks:load', function(){
  // ...
});

## @13:11 我們的 js 寫在 `/app/javascript/packs/application.js`

> 此檔案也就是整串肉粽的起點

### 如何引用 jQuery, lodash

`$ yarn add jquery lodash`
進入
`/app/javascript/packs/application.js`
加入以下兩行：

```js
var $ = require('jquery')
var _ = require('lodash')
```

> 開發階段因為動態載入(hotreload)的關係會讓網頁載入的速度比較慢

## @13:42 config Webpacker

```json

module: {
  rules: [
    {
      test: /\.js/,
      type: "javascript/auto"
    }
    {
      test: /\.(css|sass|scss)$/,

    }
  ]
}
```

## @13:51 Browserlist

透過簡單的設定就可以決定要支援到多少百分比的瀏覽器。

https://github.com/browserslist/browserslist

## Rails 的作法

1. config/webpack/developemnt.js
2. config/webpack/environment.js
   - 透過此檔案 將設定轉為 webpack-config.js
3. config/webpacker.yml
  - Rails 將 webpacker 以 .yml 的型態做設定

## @14:12 webpacker config 在 Rails 的流程講解

因為 Rails 的設定方式和一般的純 js 不一樣，故需要一些特別設定

1. JSmodule webpack 包裝 js 檔案
2. Rails 在`view/layout/application.html.erb`透過這一行來讀取：
   `<%= javascript_pack_tag 'application', 'data-turbolinks-track': 'reload' %>`
3. JSmodule webpack 透過 rails/config/webpack.yml 讀取轉換需要的設定檔，此檔案會轉出 webpacker 需要的 JS object 型態 config 設定檔
4. 如果要在各種環境(development, production)下讀取前面安裝的 jquery, lodash，我們透過修改 webpack/environment.js 來寫入步驟三的 yml 設定檔。

### yml?

ruby 圈的慣例是將設定檔寫在 yml
js > xml

## Curry

一個會等待的函式
從一個接收三個參數的函式變成⋯⋯

```js
function foo(x, y, z) {
  return x + y + z
}

let r = foo(1, 2, 3)
console.log(r)

function foo2(x) {
  return function(y) {
    return function(z) {
      return x + y + z
    }
  }
}

// let f1 = foo2(1)
// let f2 = f1(2)
// let r = f2(3)
// console.log(r)

let rr = foo2(1)(2)(3)

let foo3 = x => y => z => x + y + z
console.log(foo3(1)(2)(3))
```

## @14:59 React

» Always rerender
» One way data flow
» Component
» Virtual DOM

### 用元件的方式來思考

Single source of truth
Container
Presentor

## 15:12 使用 React

將 javascript_pack_tag 指定讀取 hello_react.jsx
修改 layout/application.html.erb

```ruby
<%# 改指定新的 JS 粽子頭到 app/javascript/packs/hello_react.jsx %>
<%= javascript_pack_tag 'hello_react', 'data-turbolinks-track': 'reload' %>
```

## React: Code as template

JavaScript 是圖靈完備的

相對於 erb 在 html 中鑲嵌 ruby, React 反其道而行，在 JavaScript 中寫 html

```js
// 加入自訂函式
function licked() {
  console.log('liiiiiiiiiiicked');
}

// 大寫開頭為自訂的 react component
const Hello = props => (
  <div onClick={licked}>Hello {props.name}!</div>
)
```

### 動態生成網頁對 SEO 的影響

爬蟲可能無法看到我們希望人類所見的網頁效果，因為 JavaScript 生成的頁面不會被執行產生，SEO 就會爛掉。

### JSX 的好處

» JSX可以幫助快速辨認出 <Template /> 
» 並阻止你在 <Template /> 裡面混雜過多的程式邏輯

## One way data flow

### Tips:

1. State 專注在最精簡的結構
2. 不要在 State 中儲存可以用計算得到的結果