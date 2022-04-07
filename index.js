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

let userSelection;

function userPlay() {
    userSelection = prompt("Enter rock, paper, or scissors.");
    userSelection = userSelection.toLowerCase();
}

userPlay();

let announcement;

function playRound() {
    if (userSelection == computerSelection) {
        announcement = "It was a tie! You both played the same hand.";
     } else if (userSelection == "rock" && computerSelection == "paper") {
        announcement = "You lost! Paper beats rock.";
    } else if (userSelection == "rock" && computerSelection == "scissors") {
        announcement = "You won! Rock beats scissors.";
    } else if (userSelection == "paper" && computerSelection == "rock") {
        announcement = "You won! Paper beats rock.";
    } else if (userSelection == "paper" && computerSelection == "scissors") {
        announcement = "You lost! Scissors beats paper.";
    } else if (userSelection == "scissors" && computerSelection == "rock") {
        announcement = "You lost! Rock beats scissors.";
    } else if (userSelection == "scissors" && computerSelection == "paper") {
        announcement = "You won! Scissors beats paper.";
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        computerPlay();
        userPlay();
        playRound();
        console.log(userSelection);
        console.log(computerSelection);
        console.log(announcement);
    }
}

game();