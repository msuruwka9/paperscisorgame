function computerPlay() {
    //create array of possibilities to play
    let RPSarr = ['rock', 'paper', 'scissors']

    //generate random number to choose element from array
    let randomNum = Math.floor(Math.random() * 3);

    //return the random pick
    return RPSarr[randomNum];
}

function playRound(playerSelection, computerSelection){
    //create array of possibilities to play
    let RPSarr = ['rock', 'paper', 'scissors']

    //changing string to lower case bc of case-insesitivity
    playerSelection = playerSelection.toLowerCase();

    //checking who wins
    if(playerSelection === computerSelection){
        return 2;
    }
    switch (playerSelection){
        case 'rock':
            if(computerSelection === 'paper') 0; //return 'You Lose ' + computerSelection + ' beats ' + playerSelection;
            return 1; //'You win ' + playerSelection+ ' beats ' + computerSelection;
            break;
        case 'paper':
            if(computerSelection === 'scissors') return 0; //'You Lose ' + computerSelection + ' beats ' + playerSelection;
            return 1;//'You win ' + playerSelection+ ' beats ' + computerSelection;
            break;
        case 'scissors':
            if(computerSelection === 'rock') return 0;//'You Lose ' + computerSelection + ' beats ' + playerSelection;
            return 1;//'You win ' + playerSelection+ ' beats ' + computerSelection;
            break;
    }
}


const buttons = document.querySelectorAll('button');
const resultText = document.querySelector('#result');
const currScore = document.querySelector('#curr-score');
const finalScore = document.querySelector('#final-score');
let arrOfResults = [0, 0]; //first - computer, second - human

buttons.forEach(button => button.addEventListener('click', () => game(button.id)) );

function game(playerSelection){
    computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    if(result === 0){
        arrOfResults[0] += 1;
        resultText.textContent = 'You Lose this round ' + computerSelection + ' beats ' + playerSelection;
    }
    if(result === 1){
        arrOfResults[1] += 1;
        resultText.textContent = 'You win this round ' + playerSelection+ ' beats ' + computerSelection;
    } 
    if(result === 2){
        resultText.textContent = "There is Draw in this round!"
    }
    currScore.textContent = `Computer: ${arrOfResults[0]} - Human: ${arrOfResults[1]}`
    if(arrOfResults[0] === 5){
        finalScore.textContent = 'Computer win!';
        createRestartButton();

    } else if (arrOfResults[1] === 5) {
        finalScore.textContent = 'Human win!'
        createRestartButton();
    }
}

function createRestartButton(){
    buttons.forEach(button => button.disabled = true);
    let restartButton = document.createElement('button');
    restartButton.id = 'restart-button';
    restartButton.textContent = 'Restart the game!'
    finalScore.after(restartButton);
    restartButton.addEventListener('click', restartGame);
}

function restartGame(){
    let restartButton = document.querySelector('#restart-button');
    arrOfResults[0] = 0;
    arrOfResults[1] = 0;
    currScore.textContent = `Computer: ${arrOfResults[0]} - Human: ${arrOfResults[1]}`
    finalScore.textContent = '';
    buttons.forEach(button => button.disabled = false);
    restartButton.remove();
}


