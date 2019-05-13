// let myLib = require('./a.js')
// let z = myLib.bar(200)

// 如果只想要 import './a.js' 其中的 "bar" 方法
let {bar} = require('./a.js')
let z = bar(200)
console.log(z)


// FIXME 方法二 沒完成
import {baz} from './b.mjs'
console.log((baz(200)))
