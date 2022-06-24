function computerPlay() {
    //create array of possibilities to play

    let RPSarr = ['Rock', 'Paper', 'Scissors']

    //generate random number to choose element from array
    let randomNum = Math.floor(Math.random() * 2);

    //return the random pick

    return RPSarr[randomNum];
}