let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {    
    const randomNum = Math.random();

    if (randomNum < 0.33) {
        return "rock";
    } else if (randomNum < 0.66) {
        return "paper";
    } else {
        return "scissors"
    }
}


function getHumanChoice() {
    const sign = prompt("Enter rock, paper or scissors (in lower case)");
    const choice = sign.toLowerCase();

     if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    } else {
        console.log("Incorrect value input.");
        return null; 
    }
}

console.log(getHumanChoice())
console.log(getComputerChoice())



// Play a round function
function playRound(humanChoice, computerChoice) {
  // Step 1: Check if input is valid
  if (!humanChoice) {
    console.log("Invalid human choice.");
    return;
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
