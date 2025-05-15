function getComputerChoice() {
    i = Math.random();
    let choice;
    if (i < 0.33) {
        choice = 'rock';
    } else if (i < 0.66) {
        choice = 'paper';
    } else {
        choice = 'scissors';
    }
    return choice;
}

function getHumanChoice() {
    let choice;
    return choice = prompt("Please make a choice: ");

}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("Tie");
    } else if ((humanChoice == "rock" && computerChoice == "scissors") 
                || (humanChoice == "paper" && computerChoice == "rock")
                || (humanChoice == "scissors" && computerChoice == "paper")) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }

}

let humanScore = 0;
let computerScore = 0;

function playGame() {
    for (let i = 0; i < 5; i++) {
        humanSelection = getHumanChoice().toLowerCase();
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore == computerScore) {
        console.log("You tie this game!");
    } else if (humanScore > computerScore) {
        console.log("Yah you win the game!");
    } else {
        console.log("Sorry you lose the game!");
    }
}

playGame();
