// Função que transforma 1 em 01
const preencheZero = function (num) {
  return ('0' + num).slice(-2)
}

// Cria intervalo
const interval = setInterval(() => {
  // Pega o horário atual
  const now = new Date();

  // Formata a data conforme dd/mm/aaaa hh:mm:ss
  const dataHora =
    preencheZero(now.getUTCDate()) + '/' +
    preencheZero((now.getMonth() + 1)) + '/' + now.getFullYear() + ' ' +
    preencheZero(now.getHours()) + ':' +
    preencheZero(now.getMinutes()) + ':' +
    preencheZero(now.getSeconds())

  // Exibe na tela usando a div .data-hora
  document.querySelector('.data-hora').innerHTML = dataHora
}, 1000)