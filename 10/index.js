// Crie sua função aqui
function secondBiggestNumber(numbers) {
  if (!Array.isArray(numbers)) return null
  if (numbers.length <= 1) return null
  numbers.sort((a, b) => b - a)
  return numbers[1]
}

// Não altere as linhas abaixo
console.log(secondBiggestNumber([0, 1, 2, 3, 4, 5]))
console.log(secondBiggestNumber([-1, 10, 20, 30, -10]))
console.log(secondBiggestNumber([100]))