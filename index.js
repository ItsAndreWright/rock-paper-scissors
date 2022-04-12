let computerSelection;

function computerPlay() {
    computerSelection = Math.floor(Math.random() * 3 + 1);
    if (computerSelection === 1) {
        computerSelection = "rock";
    } else if (computerSelection === 2) {
        computerSelection = "paper";
    } else {
        computerSelection = "scissors";
    }
}

let userSelection;

function userPlay() {
    userSelection = prompt("Enter rock, paper, or scissors.");
    userSelection = userSelection.toLowerCase();
}

function playRound() {

    if (userSelection === computerSelection) {
        alert("It was a tie! You both played the same hand.");
     }
     if (userSelection === "rock" && computerSelection === "paper") {
        alert("You lost! Paper beats rock.");
    }
    if (userSelection === "rock" && computerSelection === "scissors") {
        alert("You won! Rock beats scissors.");
    }
    if (userSelection === "paper" && computerSelection === "rock") {
        alert("You won! Paper beats rock.");
    }
    if (userSelection === "paper" && computerSelection === "scissors") {
        alert("You lost! Scissors beats paper.");
    }
    if (userSelection === "scissors" && computerSelection === "rock") {
        alert("You lost! Rock beats scissors.");
    }
    if (userSelection === "scissors" && computerSelection === "paper") {
        alert("You won! Scissors beats paper.");
    }
    if (userSelection != "rock" && userSelection != "paper" && userSelection != "scissors") {
        alert("Invalid input.")
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        userPlay();
        computerPlay();
        playRound();
    }
}

game();