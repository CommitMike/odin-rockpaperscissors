let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {    
    const randomNum = Math.random();

    if (randomNum < 0.33) {
        return "Computer choice: rock";
    } else if (randomNum < 0.66) {
        return "Computer choice: paper";
    } else {
        return "Computer choice: scissors"
    }
}




function getHumanChoice() {
    const sign = prompt("Enter rock, paper or scissors (in lower case)");
    const choice = sign.toLowerCase();

     if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return "Your choice: " + choice;
    } else {
        console.log("Incorrect value input.");
        return null; 
    }
}

console.log(getHumanChoice())
console.log(getComputerChoice())