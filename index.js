let computerResult;

function computerPlay() {
    computerResult = Math.floor((Math.random() * 3) + 1);
    if (computerResult == 1) {
        computerResult = "Rock";
    } else if (computerResult == 2) {
        computerResult = "Paper";
    } else {
        computerResult = "Scissors";
    }
}

computerPlay();

console.log(computerResult);