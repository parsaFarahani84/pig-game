'use strict';

const score0EL = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1');
const diceEL = document.querySelector('.dice');
let player0EL = document.querySelector('.player--0');
let player1EL = document.querySelector('.player--1');
const overly = document.querySelector('.overlay');
const player0 = document.getElementById('current--0');
const player1 = document.getElementById('current--1');
const newbtn = document.querySelector('.btn--new');
const rollbtn = document.querySelector('.btn--roll');
const holdbtn = document.querySelector('.btn--hold');

let playing, currentscore, activeplayer, scores;

const init = function () {
  playing = true;
  currentscore = 0;
  activeplayer = 0;
  scores = [0, 0];
  diceEL.classList.add('hidden');
  document.getElementById('score--0').textContent = 0;
  document.getElementById('score--1').textContent = 0;
  player0.textContent = 0;
  player1.textContent = 0;
  player0EL.classList.remove('player--winner');
  player1EL.classList.remove('player--winner');

  document.querySelector('.player--0').classList.add('player--active');
  document.querySelector('.player--1').classList.remove('player--active');
};
init();

const switchplayer = function () {
  document.getElementById(`current--${activeplayer}`).textContent = 0;
  currentscore = 0;
  activeplayer = activeplayer === 0 ? 1 : 0;
  player0EL.classList.toggle('player--active');
  player1EL.classList.toggle('player--active');
};

score0EL.textContent = 0;
score1EL.textContent = 0;

rollbtn.addEventListener('click', function () {
  if (playing) {
    let dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    diceEL.classList.remove('hidden');
    diceEL.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentscore = currentscore + dice;
      document.getElementById(`current--${activeplayer}`).textContent =
        currentscore;
    } else {
      switchplayer();
    }
  }
});

holdbtn.addEventListener('click', function () {
  if (playing) {
    scores[activeplayer] += currentscore;
    document.getElementById(`score--${activeplayer}`).textContent =
      scores[activeplayer];
    //

    if (scores[activeplayer] >= 50) {
      playing = false;
      diceEL.classList.add('hidden');
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.add(`player--winner`);
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.remove('player--active');
    } else {
      switchplayer();
    }
  }
});

newbtn.addEventListener('click', init);
//
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closebtn = document.querySelector('.close-modal');
const btninfo = document.querySelector('.btn--info');
// console.log(btninfo);
btninfo.addEventListener('click', function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

closebtn.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

overlay.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});
