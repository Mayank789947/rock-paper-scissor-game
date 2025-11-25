let humanScore = 0;
let computerScore = 0;
let round = 0;


function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"]
    let computerChoice = Math.floor(Math.random() * 3);
    return choices[computerChoice];
}

function getHumanChoice() {
    let userChoice = prompt("Enter your choice: ");
    return userChoice;
}


function playRound(humanChoice, computerChoice) {

    humanChoice = humanChoice.toLowerCase();
    
    if (computerChoice === humanChoice) {
       return(`Round tie! Play continue...`)
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        computerScore = ++computerScore;
        return (`You lose! ${computerChoice} beats ${humanChoice}`);
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        computerScore = ++computerScore;
        return (`You lose! ${computerChoice} beats ${humanChoice}`);
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        computerScore = ++computerScore;
        return (`You lose! ${computerChoice} beats ${humanChoice}`);
    } else {
        humanScore = ++humanScore;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    }
}


function playGame() {
    round++;

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    console.log(`Round: ${round}`);
    let result = playRound(humanSelection, computerSelection);
    console.log(`Computer Score: ${computerScore}`);
    console.log(`Player Score: ${humanScore}`);

    return result;
}


// console.log(playGame());
// console.log(playGame());
// console.log(playGame());
// console.log(playGame());
// console.log(playGame());


function finalResult() {
    if (computerScore === humanScore) {
        console.log("Final Result: Match tie. Play again");
    } else if (computerScore > humanScore) {
        console.log("Final Result: Computer win the match");
    } else {
        console.log("Final Result: Player Win the match");
    }
}

console.log(finalResult());