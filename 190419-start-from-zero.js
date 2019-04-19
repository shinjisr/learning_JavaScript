let cartAmount = 30;
if (cartAmount >= 1000) {
    cartAmount = cartAmount *0.8;
} else if (cartAmount >= 100) {
    cartAmount = cartAmount
}

// 簡化條件判斷式
let cartAmount = 30, discount = 1;
if (cartAmount >= 1000) {
    discount = 0.8;
} else if (cartAmount >= 100) {
    discount = 0.85;
} else if (cartAmount >= 10) {
    discount = 0.9;
} 


cartAmount *= discount
console.log(cartAmount)

// 條件分支: case
// 不好的示範
let a = 1;

switch(a) {
    case 1: // fall through
    case 2: // fall through
    case 3: // fall through
    console.log(a);
    break;
    case 4:
    case 5:
    console.log(a * 200);
    break;
}


// 陣列
let myNumbers = [3, 4, 5, 6, 7, 8, 9, 10]

// for 迴圈
let langs = ['JavaScript', 'Ruby', 'Elixir', 'Haskell'];

for(let i =0; i < langs.length; i++) {
    console.log(`I love ${langs[i]}`);
};

// 新版的 for..in 迴圈：

let langs2 = ['JavaScript', 'Ruby', 'Elixir', 'Haskell'];
for(let lang in langs) {
    console.log(`I love ${lang}`);
}

// 將字串全部相加：
let langs = ['Ruby', 'JavaScript', 'Elixir', 'Haskell'], ansString = '';

for(let i = 0; i < langs.length; i++) {
  ansString += langs[i];
}

console.log(ansString); // "RubyJavaScriptElixirHaskell"

//## 鍵值對 (also call "Hash" in Ruby)
let costomWantToBuy = 'apple'

let fruitPrices = {
    "apple": 3,
    "banana": 2,
    "orange": 4
}

console.log(fruitPrices.banana)
console.log(fruitPrices["banana"]) 
console.log(fruitPrices[costomWantToBuy]) // 可以引入變數
