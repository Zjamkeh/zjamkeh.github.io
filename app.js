document.addEventListener('DOMContentLoaded', () => {
   const squares = document.querySelectorAll('.grid div')
   const result = document.querySelector('#result')
   const displayCurrentPlayer = document.querySelector('#current-player')
   let currentPlayer = 1

   for (var i = 0, len = squares.length; i < len; i++)

   (function(index){
      //add an onclick to each square in your grid
      squares[i].onclick = function(){
         //if your square below the current square is taken' you can go on top of it
         if (squares[index + 7].classList.contains('taken') &&!
            squares[index].classList.contains('taken')) {
            if (currentPlayer === 1) {
               squares[index].classList.add('taken')
               squares[index].classList.add('player-one')
               //change the player
               currentPlayer = 2
               displayCurrentPlayer.innerHTML = '2\'s'
            } else if (currentPlayer === 2) {
               squares[index].classList.add('player-two')
               squares[index].classList.add('taken')
               //change the player
               currentPlayer = 1
               displayCurrentPlayer.innerHTML = '1\'s'
            }
            //if the square bellow the current square is taken - you can't go here
         }  else alert('Woops, you can\'t go there')
      }
   })(i)

   //trigger the checkBoard function on click
   squares.forEach(square => square.addEventListener('click', checkBoard))

   //check the board for a win or lose
   function checkBoard() {
      //make const that show all winnig Arrays
      const winningAray = [
         [7, 14, 21, 28], [38, 31, 24, 17], [34, 33, 32, 31], [14, 15, 16, 17], [21, 22, 23, 24], [0, 1, 2, 3],   
         [2, 10, 18, 26], [41, 40, 39, 38], [20, 19, 18, 17], [28, 29, 30, 31], [13, 12, 11, 10], [1, 2, 3, 4],   
         [5, 12, 19, 26], [35, 29, 23, 17], [41, 34, 27, 20], [40, 33, 26, 19], [39, 32, 25, 18], [5, 4, 3, 2],   
         [6, 13, 20, 27], [14, 22, 30, 38], [37, 30, 23, 16], [36, 29, 22, 15], [35, 36, 37, 38], [6, 5, 4, 3],   
         [6, 12, 18, 24], [22, 23, 24, 25], [35, 28, 21, 14], [41, 33, 25, 17], [34, 26, 18, 10], [7, 8, 9, 10],  
         [8, 15, 22, 29], [12, 18, 24, 30], [28, 22, 16, 10], [13, 19, 25, 31], [12, 11, 10, 9], [21, 15, 9, 3], 
         [3, 10, 17, 24], [19, 18, 17, 16], [20, 26, 32, 38], [36, 30, 24, 18], [5, 11, 17, 23], [1, 9, 17, 25], 
         [4, 11, 18, 25], [40, 39, 38, 37], [12, 19, 26, 33], [39, 31, 23, 15], [9, 17, 25, 33], [0, 8, 16, 24], 
         [9, 16, 23, 30], [11, 17, 23, 29], [29, 30, 31, 32], [40, 32, 24, 16], [8, 16, 24, 32], [8, 9, 10, 11], 
         [27, 19, 11, 3], [15, 16, 17, 18], [26, 25, 24, 23], [33, 32, 31, 30], [1, 8, 15, 22], 
         [7, 15, 23, 31], [36, 37, 38, 39], [27, 26, 25, 24], [10, 17, 24, 31], [0, 7, 14, 21], 
         [4, 10, 16, 22], [11, 18, 25, 32], [13, 20, 27, 34], [37, 31, 25, 19], [2, 9, 16, 23], 
      ]
      //the values of the winnigArrays
      for(let y = 0; y< winningAray.length; y++) {
         const square1 = squares[winningAray[y][0]]
         const square2 = squares[winningAray[y][1]]
         const square3 = squares[winningAray[y][2]]
         const square4 = squares[winningAray[y][3]]
      
         //if player-one contains all the winning spaces
         if (square1.classList.contains('player-one') &&
            square2.classList.contains('player-one') &&
            square3.classList.contains('player-one') &&
            square4.classList.contains('player-one')) {
               //than player-one won
               result.innerHTML = "Player 1 wins, </br> CONGRADULATIONS!!!"
            }
         //and if player-two contains all the winnig spaces
         else if (square1.classList.contains('player-two') &&
            square2.classList.contains('player-two') &&
            square3.classList.contains('player-two') &&
            square4.classList.contains('player-two')) {
               //than player-two is the winner
               result.innerHTML = "Player 2 wins, CONGRADULATIONS!!!"
         }
      }
   }

})
