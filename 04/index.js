// Crie sua função aqui
function oneToNumber(number) {
  const array = []
  if (number <= 0) return array
  for (let i = 1; i <= number; i++) {
    array.push(i)
  }
  return array
}

// Não altere as linhas abaixo
console.log(oneToNumber(10))
console.log(oneToNumber(5))
console.log(oneToNumber(1))
console.log(oneToNumber(-1))