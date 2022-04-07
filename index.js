let computerSelection;

function computerPlay() {
    computerSelection = Math.floor((Math.random() * 3) + 1);
    if (computerSelection == 1) {
        computerSelection = "Rock";
    } else if (computerSelection == 2) {
        computerSelection = "Paper";
    } else {
        computerSelection = "Scissors";
    }
}

computerPlay();
console.log(computerSelection);

let userSelection;

function userPlay() {
    userSelection = prompt("Enter rock, paper, or scissors.");
    userSelection = userSelection.toLowerCase();
}

userPlay();
console.log(userSelection);