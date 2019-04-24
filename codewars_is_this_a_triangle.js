// Is this a triangle?
function isTriangle(a,b,c)
{
  let s = (a + b + c) / 2;
   if ((s * (s - a) * (s - b) * (s - c)) ** 0.5) {
     return true
   } else {return false};
}

// The best practice
function isTriangle(a,b,c)
{
   return a + b > c && a + c > b && c + b > a;
}

// The most clever solution:
function isTriangle(a,b,c)
{
  [a, b, c] = [a, b, c].sort((x, y) => x-y);
  
  return a+b > c;
}
// The most clever solution:
let isTriangle = (a,b,c) => Math.max(a,b,c)<(a+b+c)/2
