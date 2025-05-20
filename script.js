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

let result = document.querySelector("div");
let resultLine1 = document.createElement("p");
let resultLine2 = document.createElement("p");
let resultLine3 = document.createElement("p");

result.appendChild(resultLine1);
result.appendChild(resultLine2);
result.appendChild(resultLine3);

let buttons = document.querySelector("buttons");

buttons.addEventListener("click", (event) => {
    let humanChoice = event.target.id;
    let computerChoice = getComputerChoice();
    resultLine1.textContent = `You chose ${humanChoice}`;
    playRound(humanChoice, computerChoice);

})

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {    
    if (humanChoice == computerChoice) {
        resultLine2.textContent = `Tie! 
        Your Score: ${humanScore} Computer Score:${computerScore}`;
    } else if ((humanChoice == "rock" && computerChoice == "scissors") 
                || (humanChoice == "paper" && computerChoice == "rock")
                || (humanChoice == "scissors" && computerChoice == "paper")) {
        humanScore++;
        resultLine2.textContent = `You win! 
        Your Score: ${humanScore} Computer Score:${computerScore}`;
    } else {
        computerScore++;
        resultLine2.textContent = `You lose! 
        Your Score: ${humanScore} Computer Score:${computerScore}`;
    }
    
    if (humanScore === 5) {
        resultLine3.textContent = `You win this game`;
    } else if(computerScore === 5) {
        resultLine3.textContent = `Computer wins this game`;
    }
}
