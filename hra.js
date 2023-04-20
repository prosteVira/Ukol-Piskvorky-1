
import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4'
let currentPlayer = 'circle';

/*const btnElm1 = document.querySelector('#firstbtn');
const btnElm2 = document.querySelector('#secondbtn');
const btnElm3 = document.querySelector('#thirdbtn');
const btnElm4 = document.querySelector('#fourthbtn');
const btnElm5 = document.querySelector('#fifthbtn');
const btnElm6 = document.querySelector('#sixthbtn');
const btnElm7 = document.querySelector('#seventhbtn');
const btnElm8 = document.querySelector('#eighthbtn');
const btnElm9 = document.querySelector('#ninthbtn');
const btnElm10 = document.querySelector('#tenthbtn');*/


const crossOrCircle = (event) => {
 /* const gamerElm = document.querySelector ('.gamer')*/

    if (currentPlayer === 'circle') {
      event.target.classList.add('board__field--circle');
      currentPlayer = 'cross';
      gamer.className = 'board__player--cross';
    } else if (currentPlayer === 'cross') {
      event.target.classList.add('board__field--cross');
      currentPlayer = 'circle';
      gamer.className = 'board__player--circle';
    }
    event.target.disabled = true;
  };

const gameCellElm = document.querySelectorAll('.game-cell');
gameCellElm.forEach ((cell) => {
  cell.addEventListener('click', crossOrCircle);

});

/*gamer po te funkci nefunguje na malych obrazovkach*/


const gameFieldElm = document.querySelectorAll('.game-cell')  //mozna lip vybrat .game-field//
const gameField = gameFieldElm.map(cell).join ('') 

//tady ma byt funkce a posluchac udalosti (jeste nevim na co ho mam povesit), ktery bude predavat po kazdem tahu retezec funkci findWinner/
  if (cell.contains('circle')) {
    return 'o'
  }
  if (cell.contains('cross')) {
    return 'x'
  }


const winner = findWinner(gameField)
if (winner === 'o' || winner === 'x') {
	alert(`Vyhrál hráč se symbolem ${winner}.`) 
};

alert.addEventListener('click', location.reload());

  /*btnElm1.addEventListener('click', crossOrCircle);
  btnElm2.addEventListener('click', crossOrCircle);
  btnElm3.addEventListener('click', crossOrCircle);
  btnElm4.addEventListener('click', crossOrCircle);
  btnElm5.addEventListener('click', crossOrCircle);
  btnElm6.addEventListener('click', crossOrCircle);
  btnElm7.addEventListener('click', crossOrCircle);
  btnElm8.addEventListener('click', crossOrCircle);
  btnElm9.addEventListener('click', crossOrCircle);
  btnElm10.addEventListener('click', crossOrCircle);*/

const restart=document.querySelector(`.game-menu-restart `)

restart.addEventListener(`click`, (event) => {
    if (window.confirm (`Opravdu chceš začít znuvu?`)===true) {
        window.location.reload();
        event.preventDefault()
    } 

})

//asi budu potrebovat pomoc, v patek proberu kod na pracovni skupine//

