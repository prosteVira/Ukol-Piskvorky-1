


let currentPlayer = 'circle';

const btnElm1 = document.querySelector('button:nth-child(1)');
const btnElm2 = document.querySelector('button:nth-child(2)');
const btnElm3 = document.querySelector('button:nth-child(3)');
const btnElm4 = document.querySelector('button:nth-child(4)');
const btnElm5 = document.querySelector('button:nth-child(5)');
const btnElm6 = document.querySelector('button:nth-child(6)');
const btnElm7 = document.querySelector('button:nth-child(7)');
const btnElm8 = document.querySelector('button:nth-child(8)');
const btnElm9 = document.querySelector('button:nth-child(9)');
const btnElm10 = document.querySelector('button:nth-child(10)');

/* najde 3 a 4. bunka*/

const crossOrCircle = (event) => {
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

  btnElm1.addEventListener('click', crossOrCircle);
  btnElm2.addEventListener('click', crossOrCircle);
  btnElm3.addEventListener('click', crossOrCircle);
  btnElm4.addEventListener('click', crossOrCircle);
  btnElm5.addEventListener('click', crossOrCircle);
  btnElm6.addEventListener('click', crossOrCircle);
  btnElm7.addEventListener('click', crossOrCircle);
  btnElm8.addEventListener('click', crossOrCircle);
  btnElm9.addEventListener('click', crossOrCircle);
  btnElm10.addEventListener('click', crossOrCircle);

const restart=document.querySelector(`.game-menu-restart `)

restart.addEventListener(`click`, (event) => {
    if (window.confirm (`Opravdu chceš začít znuvu?`)===true) {
        window.location.reload();
    } 

})


