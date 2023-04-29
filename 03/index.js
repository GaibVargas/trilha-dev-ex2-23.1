// Crie sua função aqui
function biggestNumber(numbers) {
  let biggest
  numbers.forEach((number, index) => {
    if (index === 0) {
      biggest = number
      return
    }
    if (number > biggest) biggest = number
  })
  return biggest
}

// Não altere as linhas abaixo
console.log(biggestNumber([0, 1, 2, 3, 4, 5]))
console.log(biggestNumber([9, 4, 6, -1, 5, 8]))
console.log(biggestNumber([-1, 7, 10, -10, 100]))
console.log(biggestNumber([10, 9, 8, 7, 6, 5]))