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

function getPlayerChoice() {
    let choice = prompt("Please choose rock, paper, or scissors: ");
    if (choice.toLowerCase() == 'rock' || choice.toLowerCase() == 'paper' || choice.toLowerCase() == 'scissors') {
        return choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
    } else {
        return 'Choice was not one of the options choosen.';
    }
}

console.log(getPlayerChoice());