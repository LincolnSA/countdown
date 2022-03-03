// pegando elementos span do html
const daySpan = document.querySelector('.day')
const hourSpan = document.querySelector('.hour')
const minuteSpan = document.querySelector('.minute')
const secondSpan = document.querySelector('.second')

// inserindo o 0 a esquerda
const incrementZeroLeft = (number) => {
  return number < 10 ? `0${number}` : number
}

// funcao contagem regressiva
const countdown = () => {

  // convertendo string em numeros
  let day = +daySpan.innerText
  let hour = +hourSpan.innerText
  let minute = +minuteSpan.innerText
  let second = +secondSpan.innerText

  second--

  if (second === 0) {
    if (minute === 0) {
      second = 0
      clearTimeout(clock)
    } else {
      minute--
      second = 60
    }
  }

  if (minute === 0) {
    if (hour === 0) {
      minute = 0
    } else {
      hour--
      minute = 60
    }
  }

  if (hour === 0) {
    if (day === 0) {
      hour = 0
    } else {
      day--
      hour = 24
    }
  }

  // alterando os dados no html
  daySpan.innerText = incrementZeroLeft(day)
  hourSpan.innerText = incrementZeroLeft(hour)
  minuteSpan.innerText = incrementZeroLeft(minute)
  secondSpan.innerText = incrementZeroLeft(second)
}

// a cada 1 segundo eh chamado a funcao countdown
const clock = setInterval(countdown, 1000)