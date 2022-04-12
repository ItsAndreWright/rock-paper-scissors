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
        return "tie";
     }
     if (userSelection === "rock" && computerSelection === "paper") {
        alert("You lost! Paper beats rock.");
        return "computer";
    }
    if (userSelection === "rock" && computerSelection === "scissors") {
        alert("You won! Rock beats scissors.");
        return "user";
    }
    if (userSelection === "paper" && computerSelection === "rock") {
        alert("You won! Paper beats rock.");
        return "user";
    }
    if (userSelection === "paper" && computerSelection === "scissors") {
        alert("You lost! Scissors beats paper.");
        return "computer";
    }
    if (userSelection === "scissors" && computerSelection === "rock") {
        alert("You lost! Rock beats scissors.");
        return "computer";
    }
    if (userSelection === "scissors" && computerSelection === "paper") {
        alert("You won! Scissors beats paper.");
        return "user";
    }
    if (userSelection != "rock" && userSelection != "paper" && userSelection != "scissors") {
        alert("Invalid input.")
        return "failure";
    }
}

function game() {
    let userScore = 0;
    let computerScore = 0;

    while (userScore < 3 && computerScore < 3) {
        userPlay();
        computerPlay();
        const roundWinner = playRound();
        if (roundWinner === "user") {
            userScore++; 
        }
        if (roundWinner === "computer") {
            computerScore++;
        }
        console.log("Your Score: " + userScore);
        console.log("Computer Score: " + computerScore);
    }
    if (userScore === 3) {
        alert("Congratulations! You won the game!");
    } else {
        alert("The computer won the game.");
    }
}

game();