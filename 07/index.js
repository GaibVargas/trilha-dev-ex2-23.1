// Crie sua função aqui
function sumArray(numbers) {
  return numbers.reduce((acc, cur) => acc + cur, 0)
}

// Não altere as linhas abaixo
console.log(sumArray([0, 1, 2, 3, 4, 5]))
console.log(sumArray([-1, 10, 20, 30, -10]))
console.log(sumArray([0, 7, 4, 3, 9, 0, 0]))
console.log(sumArray([-7, -4, -3, -9]))