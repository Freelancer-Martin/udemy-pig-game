//console.log('this a test');

const rollDice = document.querySelector('.middle-roll-dice');
const diceImg = document.querySelector('.dice-img');
const btnHold = document.querySelector('.middle-hold');
const btnNewGame = document.querySelector('.middle-new-game');
const playerCurrentTwoNumber = document.querySelector('.current-player-1-number');
const playerCurrentOneNumber = document.querySelector('.current-player-0-number');
const playerTwoNumber = document.querySelector('.player-1-dice-number');
const playerOneNumber = document.querySelector('.player-0-dice-number');
const leftContainer = document.querySelector('.left-container');
const rightContainer = document.querySelector('.right-container');
const diceEl = document.querySelector('.dice-img');
let activePlayer = document.querySelector('.active').className.match(/\d+/)[0];

rollDice.addEventListener('click', rollTheDice);
btnNewGame.addEventListener('click', newGame);
btnHold.addEventListener('click', holdButton);

//diceImg.setAttribute('src', 'dice-2.png')

let scores, currentScore, playing;

function newGame()
{
    scores = [0,0]
    currentScore = 0
    activeplayer = 0
    playing = true

    playerCurrentTwoNumber.textContent = 0;
    playerCurrentOneNumber.textContent = 0;
    playerTwoNumber.textContent = 0;
    playerOneNumber.textContent = 0;

    diceEl .style = 'display:hidden';
    leftContainer.classList.remove('player--winner');
    rightContainer.classList.remove('player--winner');
    leftContainer.classList.add('active');
    rightContainer.classList.remove('active');
    //console.log(leftContainer)
}
newGame();

function switchPlayer(){

    currentScore = 0
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 1 ? 0 : 1;
    document.querySelector(`.player--1`).classList.toggle('active')
    document.querySelector(`.player--0`).classList.toggle('active')

}

function rollTheDice() {


    const dice = Math.trunc(Math.random() * 6) + 1;


    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if (dice == 1) {
        switchPlayer()
    } else{
        currentScore += dice
        document.querySelector(`.current-player-${activePlayer}-number`).textContent = currentScore;

    }


}

function holdButton()
{
    console.log(scores);
    scores[activePlayer] += currentScore;
    document.querySelector(`.player-${activePlayer}-dice-number`).textContent = scores[activePlayer]
    if(Number(scores[activePlayer]) >= Number(10)) {
        //scores[activePlayer] = currentScore;
        document.getElementById(`player--${activePlayer}`).classList.toggle('player--winner')
        //console.log(currentScore);
    } else {
        switchPlayer();
    }

}




