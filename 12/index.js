// Crie sua função aqui
async function delayedSumArray(array) {
  try {
    const response = await sumAPI(array)
    console.log(response)
  } catch (error) {
    console.log(error.message)
  }
}

// Não altere as linhas abaixo

// Funções auxiliares
function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function sumAPI(array) {
  const delay = getRandomNumber(1000, 5000)
  return new Promise((resolve, reject) => {
    if (array.length > 0) {
      setTimeout(() => {
        resolve(array.reduce((acc, cur) => acc + cur, 0))
      }, delay)
    } else {
      reject(new Error('Erro: array está vazio'))
    }
  })
}

// Isso se chama IIFE em javascript, pesquise para saber mais sobre
(async () => {
  await delayedSumArray([0, 1, 2, 3, 4, 5])
  await delayedSumArray([0])
  await delayedSumArray([])
})()