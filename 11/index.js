// Crie sua função aqui
function filterContainsA(array) {
  return array.filter(item => item.toLowerCase().includes('a'))
}

// Não altere as linhas abaixo
console.log(filterContainsA([
  'abacaxi',
  'nuvem',
  'Abismo',
  'KOMBI',
  'TERRA',
  'felicidade',
  'Urso',
  'queijo',
]))