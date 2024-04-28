function getComputerChoice() {
    let choice = Math.floor(Math.random() * 10) % 3;
    if (choice == 0) {
        return "Rock";
    } else if (choice == 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "Rock") {
        if (computerChoice == "Paper") {
            roundResult.textContent = `Player chose ${humanChoice}. Computer chose ${computerChoice}. Computer wins!`;
            computerScore++;
        } else if (computerChoice == "Scissors") {
            roundResult.textContent = `Player chose ${humanChoice}. Computer chose ${computerChoice}. Player wins!`;
            humanScore++;
        } else {
            roundResult.textContent = `Player chose ${humanChoice}. Computer chose ${computerChoice}. Tie!`;
        }
    } else if (humanChoice == "Paper") {
        if (computerChoice == "Scissors") {
            roundResult.textContent = `Player chose ${humanChoice}. Computer chose ${computerChoice}. Computer wins!`;
            computerScore++;
        } else if (computerChoice == "Rock") {
            roundResult.textContent = `Player chose ${humanChoice}. Computer chose ${computerChoice}. Player wins!`;
            humanScore++;
        } else {
            roundResult.textContent = `Player chose ${humanChoice}. Computer chose ${computerChoice}. Tie!`;
        }
    } else if (humanChoice == "Scissors") {
        if (computerChoice == "Rock") {
            roundResult.textContent = `Player chose ${humanChoice}. Computer chose ${computerChoice}. Computer wins!`;
            computerScore++;
        } else if (computerChoice == "Paper") {
            roundResult.textContent = `Player chose ${humanChoice}. Computer chose ${computerChoice}. Player wins!`;
            humanScore++;
        } else {
            roundResult.textContent = `Player chose ${humanChoice}. Computer chose ${computerChoice}. Tie!`;
        }
    } else {
        roundResult.textContent = "An error occured.";
    }
}

let computerScore = 0;
let humanScore = 0;

const results = document.querySelector("#results");

const roundResult = document.createElement("div");
roundResult.classList.add("result");
roundResult.textContent = "Let's play Rock, Paper, Scissors! First to 5 wins. \
                            Choose an option above to start the game.";
results.appendChild(roundResult);

const score = document.createElement("div");
score.classList.add("score");
score.setAttribute("style", "white-space: pre;");
score.textContent = `Player Score: ${humanScore}\nComputer Score: ${computerScore}`;
results.appendChild(score);

const winner = document.createElement("div");
winner.classList.add("winner");

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.id == "Reset") {
        if (results.contains(winner)) {
            results.removeChild(winner);
        }
        computerScore = 0;
        humanScore = 0;
        score.textContent = `Player Score: ${humanScore}\nComputer Score: ${computerScore}`;
    } else {
        let computerSelection = getComputerChoice();
        playRound(button.id, computerSelection);

        score.textContent = `Player Score: ${humanScore}\nComputer Score: ${computerScore}`;

        if (computerScore == 5 || humanScore == 5) {
            if (computerScore == 5) {
                winner.textContent = "We have a winner! Computer is the first to reach 5 points!"
            } else {
                winner.textContent = "We have a winner! Player is the first to reach 5 points! \
                                        To start a new game, press the 'Reset' button"
            }
            results.appendChild(winner);
        }
    }
  });
});