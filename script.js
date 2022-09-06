//console.log('this a test');

const rollDice = document.querySelector('.middle-roll-dice');
const diceImg = document.querySelector('.dice-img');
const btnHold = document.querySelector('.middle-hold');
const btnNewGame = document.querySelector('.middle-new-game');
//let activePlayer = document.querySelector('.active');

rollDice.addEventListener('click', rollTheDice);
btnNewGame.addEventListener('click', newGame);
btnHold.addEventListener('click', changeActivePlayer);

diceImg.setAttribute('src', 'dice-2.png')

function rollTheDice() {

    let randomDiceNumber = Math.trunc(Math.random() * 6) + 1;
    const player = document.querySelector('.active').querySelector('.player-name').textContent
    if (randomDiceNumber >= 0) randomDiceNumber++;
    //const player = activePlayer.querySelector('.player-name').textContent
    const playerCurrentTwoNumber = document.querySelector('.current-player-2-number');
    const playerCurrentOneNumber = document.querySelector('.current-player-1-number');

    diceImg.setAttribute('src', 'dice-'+(Number(randomDiceNumber))+'.png')


    if( player === 'PLAYER 2' )
    {
        //Increase player number every time butoon is pushed
        let increaseNumber = (randomDiceNumber + 1)  + Number(playerCurrentTwoNumber.textContent);
        playerCurrentTwoNumber.textContent = increaseNumber
        playerCurrentTwoNumber.setAttribute('data-dice-number', increaseNumber );
    }
    else if(player === 'PLAYER 1')
    {
        let increaseNumber = (randomDiceNumber + 1)  + Number(playerCurrentOneNumber.textContent);
        playerCurrentOneNumber.textContent = increaseNumber
        playerCurrentOneNumber.setAttribute('data-dice-number', increaseNumber );
    }
    else((randomDiceNumber + 1) === 1 )
    {
        let increaseNumber = (randomDiceNumber + 1)  + Number(playerCurrentOneNumber.textContent);
        playerCurrentOneNumber.textContent = increaseNumber
        playerCurrentOneNumber.setAttribute('data-dice-number', increaseNumber );
    }
    console.log( randomDiceNumber);

}

function changeActivePlayer()
{
    const player = document.querySelector('.active').querySelector('.player-name').textContent
    const playerCurrentTwoNumber = document.querySelector('.current-player-2-number');
    const playerCurrentOneNumber = document.querySelector('.current-player-1-number');
    const playerTwoNumber = document.querySelector('.player-2-dice-number');
    const playerOneNumber = document.querySelector('.player-1-dice-number');
    const rightContainer = document.querySelector('.right-container');
    const leftContainer = document.querySelector('.left-container');
    let getDiceNumber1 = playerCurrentTwoNumber.getAttribute('data-dice-number' );
    let getDiceNumber2 =  playerCurrentOneNumber.getAttribute('data-dice-number' )
    //console.log(diceImg.getAttribute('data-dice-number' ));
    if( player === 'PLAYER 2' )
    {
        playerTwoNumber.textContent = getDiceNumber1;
        leftContainer.classList.add('active');
        rightContainer.classList.remove('active');
        //console.log(leftContainer.classList)
    }
    else if(player === 'PLAYER 1')
    {
        playerOneNumber.textContent = getDiceNumber2;
        leftContainer.classList.remove('active');
        rightContainer.classList.add('active');
    }
    //console.log(leftContainer);
}


function newGame()
{
    const playerCurrentTwoNumber = document.querySelector('.current-player-2-number');
    const playerCurrentOneNumber = document.querySelector('.current-player-1-number');
    const playerTwoNumber = document.querySelector('.player-2-dice-number');
    const playerOneNumber = document.querySelector('.player-1-dice-number');

    playerCurrentTwoNumber.textContent = 0;
    playerCurrentOneNumber.textContent = 0;
    playerTwoNumber.textContent = 0;
    playerOneNumber.textContent = 0;

}