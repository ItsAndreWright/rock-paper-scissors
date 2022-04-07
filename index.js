let computerSelection;

function computerPlay() {
    computerSelection = Math.floor((Math.random() * 3) + 1);
    if (computerSelection == 1) {
        computerSelection = "rock";
    } else if (computerSelection == 2) {
        computerSelection = "paper";
    } else {
        computerSelection = "scissors";
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

function declareWinner () {
    if (userSelection == computerSelection) {
        alert("It was a tie! You both played the same hand.");
    } else if (userSelection == "rock" && computerSelection == "paper") {
        alert("You lost! Paper beats rock.");
    } else if (userSelection == "rock" && computerSelection == "scissors") {
        alert("You won! Rock beats scissors.");
    } else if (userSelection == "paper" && computerSelection == "rock") {
        alert("You won! Paper beats rock.");
    } else if (userSelection == "paper" && computerSelection == "scissors") {
        alert("You lost! Scissors beats paper.");
    } else if (userSelection == "scissors" && computerSelection == "rock") {
        alert("You lost! Rock beats scissors.");
    } else if (userSelection == "scissors" && computerSelection == "paper") {
        alert("You won! Scissors beats paper.")
    }
}

declareWinner();