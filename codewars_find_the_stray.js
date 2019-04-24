function stray(numbers) {
  for(let i = 0; i < numbers.length; i ++){
    if (numbers[i] !== numbers[(i + 1)] && numbers[i] !== numbers[i - 1]){
      return numbers[i]
    }
  }
}

// anothor practice:
function stray(numbers) {
  let j = numbers.length - 1
  for(let i = 0; i < numbers.length; i ++){
    if(numbers[i] !== numbers[j]){
      return numbers[i] === numbers[i + 1] ? numbers[j] : numbers[i];
    i += 1
    j -= 1
    }
  }
}

// The best practice:

// The most clever solution: