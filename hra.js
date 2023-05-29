
import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4/dist/index.js';

console.log('jedeme!');

const circle = 'circle';
const cross = 'cross';

let currentPlayer = circle;

const currentPlayerElm = document.querySelector('.current-player');

const crossOrCircle = (event) => {
 /* const gamerElm = document.querySelector ('.gamer')*/

 event.target.disabled = true;

    if (currentPlayer === 'circle') {
      event.target.classList.add('cell-circle');
    } else {
      event.target.classList.add('cell-cross');
    }

    if (currentPlayer === circle) {
      currentPlayer = cross;
    } else {
      currentPlayer = circle;
    }
  }

currentPlayerElm.classList.toggle('player-cross');
currentPlayerElm.classList.toggle('player-circle');

const field = document.querySelectorAll('.cell');
const fieldOfCells = Array.from(field);
//console.log(fieldOfCell)


const gameField = fieldOfCells.map((cell) => {
  if (cell.classList.contains('cell-circle')) {
    return 'o';
  } else if (cell.classList.contains('cell-cross')) {
    return 'x';
  }
  return '_';
});
//console.log(gameField);

const winner = findWinner(gameField);
if (winner === 'o' || winner === 'x' || winner === 'tie') {
  setTimeout(() => {
    if (winner === 'o' || winner === 'x') {
      alert(`Vyhrál hráč se symbolem ${winner} 🥳!`);
    } else if (winner === 'tie') {
      alert(`Hra skončila remízou.`);
    }
    location.reload();
  }, 150);
}
//console.log(winner);


const restart = (event) => {
  if (confirm('Opravdu cheš začít znovu?')) {
    window.location.href = 'hra.html';
  } else {
    event.preventDefault();
  }
};

document.querySelector('.game-menu-restart').addEventListener('click', restart);



