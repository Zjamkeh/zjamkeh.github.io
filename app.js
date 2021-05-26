const squares = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')

let result = 0
let currentTime = 60

function randomSquare() {
   squares.forEach(square => {
      square.classList.remove('mole')
   })
   
   let randomSquare = squares[Math.floor(Math.random() * 9)]
   randomSquare.classList.add('mole')

   hitPosition = randomSquare.id 
}

squares.forEach(square => {
   square.addEventListener('mousedown', () => {
      if (square.id == hitPosition) {
         result = result + 1
         score.textContent = result
         hitPosition = null
      }
   })
})

function moveMole() {
   let timerId = null
   timerId = setInterval(randomSquare, 500)
}

moveMole()

function countDown() {
   currentTime--
   timeLeft.textContent = currentTime

   if (currentTime === 0) {
      clearInterval(timerId)
      alert('GAME OVER! Your final score is ' + result)
   }
}

let timerId = setInterval(countDown, 1000)
