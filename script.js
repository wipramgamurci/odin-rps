// console.log("Hello, World!");

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

const computerSelection = getComputerChoice();
const playerSelection = prompt("rock, paper, or scissors?").toLowerCase();

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection == computerSelection) {
    return "It's a Tie!";
  } else if (
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "rock")
  ) {
    return `You lose, ${computerSelection} beats ${playerSelection}`;
  } else {
    return `You win, ${playerSelection} beats ${computerSelection}`;
  }
};

console.log(computerSelection);
console.log(playerSelection);

console.log(playRound(playerSelection, computerSelection));
