function x(n) {
  str = "000000";
  str += n;
  return str.substr(-6);
}

console.log(x(229))