# odin-rockpaperscissors

Absolutely — here’s a full breakdown of the logic and structure of your **Rock Paper Scissors game** so you can re-write it confidently from scratch without needing my help again.

---

## 🧠 Full Game Logic Explained (Step by Step)

---

### **1. The Goal of the Game**

* You (the human) play **5 rounds** of Rock, Paper, Scissors against the computer.
* Each round:

  * You both pick a move.
  * The winner is decided.
* After 5 rounds:

  * The total scores are compared.
  * The overall winner is announced.
* Then the game **asks if you want to play again.**

---

## ✅ Structure of the Code

---

### **2. The `startGame()` function**

This is the **main function** that:

* Runs the 5 rounds.
* Tracks the score.
* Declares the winner.

It’s called every time the game begins.

```js
function startGame() {
    // all main game logic goes here
}
```

---

### **3. Setting up the scores**

Inside `startGame()`:

```js
let humanScore = 0;
let computerScore = 0;
```

You use two variables to track scores for both players, starting at 0.

---

### **4. Getting the Computer's Choice**

A helper function inside `startGame()`:

```js
function getComputerChoice() {
    const randomNum = Math.random(); // gives a number between 0 and 1

    if (randomNum < 0.33) return "rock";
    else if (randomNum < 0.66) return "paper";
    else return "scissors";
}
```

* `Math.random()` gives a random number.
* Based on that, we randomly return `"rock"`, `"paper"`, or `"scissors"`.

---

### **5. Getting the Human’s Choice**

Another helper function:

```js
function getHumanChoice() {
    const sign = prompt("Enter rock, paper or scissors (in lower case)");
    const choice = sign.toLowerCase();

    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    } else {
        return null; // invalid input
    }
}
```

* Prompts the user.
* Converts their input to lowercase.
* Checks if the input is valid — if not, it returns `null`.

---

### **6. Playing One Round**

Another helper:

```js
function playRound(humanChoice, computerChoice) {
    if (!humanChoice) {
        console.log("Invalid human choice.");
        return;
    }

    if (humanChoice === computerChoice) {
        console.log("It's a draw");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }

    console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
}
```

* Compares the two choices.
* Increases the score depending on who wins.
* Logs the outcome and current score.

---

### **7. Running 5 Rounds**

You loop through 5 rounds:

```js
for (let round = 1; round <= 5; round++) {
    console.log(`--- Round ${round} ---`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
}
```

---

### **8. End of Game — Show Final Score**

After the loop:

```js
console.log("--- Game Over ---");
console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
```

Then you check who won:

```js
if (humanScore > computerScore) {
    console.log("🎉 You won the game!");
} else if (computerScore > humanScore) {
    console.log("💻 Computer won the game!");
} else {
    console.log("🤝 It's a tie game!");
}
```

---

### **9. The Game Loop — Play Again Option**

This is outside of `startGame()`:

```js
while (true) {
    startGame(); // Play one full game (5 rounds)

    const playAgain = prompt("Do you want to play again? (yes or no)").toLowerCase();

    if (playAgain !== "yes") {
        console.log("Thanks for playing! Goodbye.");
        break;
    }
}
```

* It keeps looping forever until the user types anything other than `"yes"`.
* Then it breaks out of the loop and ends the program.

---

## 🔁 Summary (Quick Mental Checklist)

1. **Game starts** → `startGame()`
2. **Score variables reset**
3. **5 rounds loop**

   * Prompt for human choice
   * Generate computer choice
   * Compare & update scores
4. **Final score printed**
5. **Winner declared**
6. **Prompt: "Do you want to play again?"**
7. If yes → repeat from step 1

---

## ✏️ Tips to Practice

* Try writing the whole game from memory in a new file.
* Then test it in your browser console.
* Once that works, try making a version with a **single round only**.
* Then turn that into a **best of 3** version.
