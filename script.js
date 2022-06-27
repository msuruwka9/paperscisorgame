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
        return "There is Draw!"
    }
    switch (playerSelection){
        case 'rock':
            if(computerSelection === 'paper') return 'You Lose ' + computerSelection + ' beats ' + playerSelection;
            return 'You win ' + playerSelection+ ' beats ' + computerSelection;
            break;
        case 'paper':
            if(computerSelection === 'scissors') return 'You Lose ' + computerSelection + ' beats ' + playerSelection;
            return 'You win ' + playerSelection+ ' beats ' + computerSelection;
            break;
        case 'scissors':
            if(computerSelection === 'rock') return 'You Lose ' + computerSelection + ' beats ' + playerSelection;
            return 'You win ' + playerSelection+ ' beats ' + computerSelection;
            break;
    }
}


const buttons = document.querySelectorAll('button');
const result = document.querySelector('#result');

buttons.forEach(button => button.addEventListener('click', () => consoleRound(button.id)) );

function consoleRound(playerSelection){
    result.textContent = playRound(playerSelection, computerPlay());
}
