// Setting human and computer scores to 0
let humanScore = 0;
let computerScore = 0;

// Getting computer choice function
function getComputerChoice() {    
    // Math.random gives us a random number to use in the if statement below
    const randomNum = Math.random();

    // setting up what each value represents i.e. if random number is less than 0.33, then it is rock etc.
    if (randomNum < 0.33) {
        return "rock";
    } else if (randomNum < 0.66) {
        return "paper";
    } else {
        return "scissors"
    }
}

// Getting human choice function
function getHumanChoice() {
    // Prompt displayed for user to enter rock, paper or scissors
    const sign = prompt("Enter rock, paper or scissors (in lower case)");
    // the choice is changed to lower case for no case sensitivity 
    const choice = sign.toLowerCase();
    // Displaying human choices
     if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    } else {
        return null; 
    }
}

// Play a round function
function playRound(humanChoice, computerChoice) {
    // Step 1: Check if input is valid
    if (!humanChoice) {
        console.log("Invalid human choice.");
        return;
    }

    // Step 2: Compare choices
    if (humanChoice === computerChoice) {
        console.log("Its a draw")
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        // Human wins
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
        // Computer wins
        computerScore++;
        console.log(`You loose! ${computerChoice} beats ${humanChoice}`);
    }
    // Step 3: Scores update
      console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
