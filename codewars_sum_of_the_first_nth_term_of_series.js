function SeriesSum(n)
{
  let sum = 0.00;
    for(let i = 0; i < n; i ++){
      sum += (1 / (1 + i * 3));
    }
  console.log(sum.toFixed(2))
}

SeriesSum(1) // 1.00
SeriesSum(2) // 1.25
SeriesSum(3) // 1.39
SeriesSum(4) // 1.49
