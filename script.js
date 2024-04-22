function getComputerChoice() {
    let choice = Math.floor(Math.random() * 10) % 3;
    if (choice == 0) {
        return 'Rock';
    } else if (choice == 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

function getHumanChoice() {
    let choice = prompt("Please choose rock, paper, or scissors: ");
    if (choice.toLowerCase() == 'rock' || choice.toLowerCase() == 'paper' || choice.toLowerCase() == 'scissors') {
        return choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
    } else {
        return 'Choice was not one of the options choosen.';
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == 'Rock') {
        if (computerChoice == 'Paper') {
            console.log('Player chose ' + humanChoice + '. Computer chose ' + computerChoice + '. Computer wins!');
            computerScore++;
        } else if (computerChoice == 'Scissors') {
            console.log('Player chose ' + humanChoice + '. Computer chose ' + computerChoice + '. Player wins!');
            humanScore++;
        } else {
            console.log('Player chose ' + humanChoice + '. Computer chose ' + computerChoice + '. Tie!');
        }
    } else if (humanChoice == 'Paper') {
        if (computerChoice == 'Scissors') {
            console.log('Player chose ' + humanChoice + '. Computer chose ' + computerChoice + '. Computer wins!');
            computerScore++;
        } else if (computerChoice == 'Rock') {
            console.log('Player chose ' + humanChoice + '. Computer chose ' + computerChoice + '. Player wins!');
            humanScore++;
        } else {
            console.log('Player chose ' + humanChoice + '. Computer chose ' + computerChoice + '. Tie!');
        }
    } else if (humanChoice == 'Scissors') {
        if (computerChoice == 'Rock') {
            console.log('Player chose ' + humanChoice + '. Computer chose ' + computerChoice + '. Computer wins!');
            computerScore++;
        } else if (computerChoice == 'Paper') {
            console.log('Player chose ' + humanChoice + '. Computer chose ' + computerChoice + '. Player wins!');
            humanScore++;
        } else {
            console.log('Player chose ' + humanChoice + '. Computer chose ' + computerChoice + '. Tie!');
        }
    } else {
        console.log('An error occured.');
    }
}

function playGame() {

    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (computerScore > humanScore) {
        console.log('Computer score is ' + computerScore + '. Player score is ' + humanScore + '. Winner is computer!');
    } else if (computerScore < humanScore) {
        console.log('Computer score is ' + computerScore + '. Player score is ' + humanScore + '. Winner is player!');
    } else {
        console.log('Computer score is ' + computerScore + '. Player score is ' + humanScore + '. No winner!');
    }
}

let computerScore = 0;
let humanScore = 0;

playGame();