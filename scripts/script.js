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

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection == computerSelection) {
    return "It's a Tie!";
  } else if (
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "rock")
  ) {
    computerScore++;
    return `You lose, ${computerSelection} beats ${playerSelection}`;
  } else {
    playerScore++;
    return `You win, ${playerSelection} beats ${computerSelection}`;
  }
};

const game = () => {
  for (let i = 0; i < 5; i++) {
    const computerSelection = getComputerChoice();
    const playerSelection = prompt("rock, paper, or scissors?").toLowerCase();
    console.log(playRound(playerSelection, computerSelection));
  }
  if (playerScore < computerScore) {
    console.log(`You Lose, ${playerScore} : ${computerScore}`);
  } else if (playerScore == computerScore) {
    console.log(`It's a Tie, ${playerScore} : ${computerScore}`);
  } else {
    console.log(`You Win, ${playerScore} : ${computerScore}`);
  }
};

console.log(game());
