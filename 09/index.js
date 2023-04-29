// Crie sua função aqui
function filterLegalAge(people) {
  return people.filter(({age}) => age >= 18)
}

// Não altere as linhas abaixo
console.log(filterLegalAge([
  {
    name: 'Maria',
    age: 1
  },
  {
    name: 'Gabriel',
    age: 10
  },
  {
    name: 'Matheus',
    age: 18
  },
  {
    name: 'Ana',
    age: 29
  },
]))