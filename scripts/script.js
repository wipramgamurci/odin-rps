const getComputerChoice = () => {
  const choices = Math.floor(Math.random() * 3);
  if (choices == 0) {
    return "rock";
  } else if (choices == 1) {
    return "paper";
  } else {
    return "scissors";
  }
};

let playerScore = 0;
let computerScore = 0;
let isGameOver = false;

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection == computerSelection) {
    resultText.textContent = "It's a tie!";
  } else if (
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "rock")
  ) {
    computerScore++;
    resultText.textContent = `You lose, ${computerSelection} beats ${playerSelection}`;
    playerScoreText.textContent = playerScore;
    computerScoreText.textContent = computerScore;
  } else {
    playerScore++;
    resultText.textContent = `You win, ${playerSelection} beats ${computerSelection}`;
    playerScoreText.textContent = playerScore;
    computerScoreText.textContent = computerScore;
  }

  if (playerScore === 5) {
    resultText.textContent = "You Win!!!";
    isGameOver = true;
  } else if (computerScore === 5) {
    resultText.textContent = "You Lose :(";
    isGameOver = true;
  }

  if (isGameOver === true) {
    playerSelectionButton.forEach((button) => (button.disabled = true));
    const resetButtonWrapper = document.querySelector("#reset");
    const resetButton = document.createElement("button");
    resetButton.setAttribute("id", "resetButton");
    resetButton.textContent = "Reset";
    resetButtonWrapper.appendChild(resetButton);
    resetButton.addEventListener("click", () => {
      location.reload();
    });
  }
};

const playerSelectionButton = document.querySelectorAll("button");

playerSelectionButton.forEach((button) => {
  button.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    const playerSelection = button.id;
    playRound(playerSelection, computerSelection);
  });
});

const resultText = document.querySelector("#result");
const playerScoreText = document.querySelector("#playerScore");
const computerScoreText = document.querySelector("#computerScore");

// const game = () => {
//   for (let i = 0; i < 5; i++) {
//     const computerSelection = getComputerChoice();
//     const playerSelection = prompt("rock, paper, or scissors?").toLowerCase();
//     console.log(playRound(playerSelection, computerSelection));
//   }
//   if (playerScore < computerScore) {
//     console.log(`You Lose, ${playerScore} : ${computerScore}`);
//   } else if (playerScore == computerScore) {
//     console.log(`It's a Tie, ${playerScore} : ${computerScore}`);
//   } else {
//     console.log(`You Win, ${playerScore} : ${computerScore}`);
//   }
// };

// console.log(game());
