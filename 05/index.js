// Crie sua função aqui
function evenArray(number) {
  const array = []
  if (number <= 0) return array
  for (let i = 0; i <= number; i++) {
    if (i % 2 === 0) array.push(i)
  }
  return array
}

// Não altere as linhas abaixo
console.log(evenArray(10))
console.log(evenArray(5))
console.log(evenArray(1))
console.log(evenArray(-1))