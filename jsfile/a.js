let foo = 100

function bar(i) {
  return i + foo
}

// export 出去的 name = key
// module.exports = {bar: bar}
// we cand omit key, when key and value have same name
module.exports = {bar}
// export const bar = bar;