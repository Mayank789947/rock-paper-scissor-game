let humanScore = 0;
let computerScore = 0;
let round = 1;
let roundValue = document.querySelector(".round");
let computerScoreValue = document.querySelector(".computer-score");
let humanScoreValue = document.querySelector(".human-score")
let computerChoiceValue = document.querySelector(".computer-choice");
let humanChoiceValue = document.querySelector(".human-choice");
let roundResult = document.querySelector(".round-result");
let roundText = document.querySelector(".round-text");
let finalScore = document.querySelector(".final-score");
let btnContainer = document.querySelector(".btn-container");
let restartBtn = document.querySelector(".btn-restart");
const buttons = document.querySelectorAll(".btn");


function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"]
    let computerChoice = Math.floor(Math.random() * 3);
    return choices[computerChoice];
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice;
    
    if (computerChoice === humanChoice) {
       roundResult.textContent = `Round tie! Play continue...`;
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        computerScore = ++computerScore;
        roundResult.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        computerScore = ++computerScore;
        roundResult.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        computerScore = ++computerScore;
        roundResult.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    } else {
        humanScore = ++humanScore;
        roundResult.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    }
}


function playGame(humanSelection) {
    
    const computerSelection = getComputerChoice();
    
    roundValue.textContent = round;
    let result = playRound(humanSelection, computerSelection);
    computerScoreValue.textContent = computerScore;
    computerChoiceValue.textContent = computerSelection;

    humanScoreValue.textContent = humanScore;
    humanChoiceValue.textContent = humanSelection;

    round++;
    finalResult();
    return result;
}


function finalResult() {
   if(computerScore === 1) {
     roundResult.style.display = "none";
     roundText.style.display = "none";
     finalScore.style.height = "200px";
     finalScore.style.color = "#78E3FD";
     finalScore.textContent = "Final Result: Computer Wins!";
     btnContainer.style.display = "none";
     restartBtn.style.display = "block";
   } else if (humanScore === 1) {
     roundResult.style.display = "none";
     roundText.style.display = "none";
     finalScore.style.height = "200px";
     finalScore.style.color = "#78E3FD";
     finalScore.textContent = "Final Result: Player Wins!";
     btnContainer.style.display = "none";
     restartBtn.style.display = "block";
   }
}


buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        const clickedValue = e.target.value;
        playGame(clickedValue);
    })
})

restartBtn.addEventListener("click", () => {
   window.location.reload();
})