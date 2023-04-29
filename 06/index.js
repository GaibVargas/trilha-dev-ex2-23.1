// Crie sua função aqui
function factorial(number) {
  if (number <= 0) return 1
  return number * factorial(number - 1)
}

// Não altere as linhas abaixo
console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(4))
console.log(factorial(8))