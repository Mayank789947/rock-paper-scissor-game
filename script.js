let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"]
    let computerChoice = Math.floor(Math.random() * 3);
    return choices[computerChoice];
}

// console.log(getComputerChoice());

function getHumanChoice() {
    let userChoice = prompt("Enter your choice: ");
    return userChoice;
}

// console.log(getHumanChoice());

function playRound(humanChoice, computerChoice) {

    humanChoice = humanChoice.toLowerCase();
    
    if (computerChoice === humanChoice) {
       return(`Round tie! Play again...`)
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        computerScore++;
        return (`You lose! ${computerChoice} beats ${humanChoice}`);
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        computerScore++;
        return (`You lose! ${computerChoice} beats ${humanChoice}`);
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        computerScore++;
        return (`You lose! ${computerChoice} beats ${humanChoice}`);
    } else {
        humanScore++;
        return (`You win! ${humanChoice} beats ${computerChoice}`);
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playGame() {

    console.log(playRound(humanSelection, computerSelection));
    console.log(computerScore);
    console.log(humanScore);
}


playGame();

