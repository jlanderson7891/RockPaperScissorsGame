let playerScore;
let computerScore;

const playerInput = prompt("Pick rock, paper or scissors!");

const playerSelection = playerInput.trim().toLowerCase();

//computer input
function getComputerChoice() {
	const selArray = ["rock", "paper", "scissors"];

	let randomChoice = selArray[Math.floor(Math.random() * selArray.length)];

	return randomChoice;
}

function playRound(playerSelection, computerSelection) {
	if (
		playerSelection !== "rock" ||
		playerSelection !== "paper" ||
		playerSelection !== "scissors"
	) {
		results = "You did not pick rock, paper, or scissors!";
	}
	if (playerSelection === computerSelection) {
		results = 0;
	} else if (
		(playerSelection === "rock" && computerSelection === "scissors") ||
		(playerSelection === "paper" && computerSelection === "rock") ||
		(playerSelection === "scissors" && computerSelection === "paper")
	) {
		results = 1;
	} else if (
		(playerSelection === "rock" && computerSelection === "paper") ||
		(playerSelection === "paper" && computerSelection === "scissors") ||
		(playerSelection === "scissors" && computerSelection === "rock")
	) {
		computerScore++;
		results = 2;
	}

	return results;
}

function game() {
	for (let i = 0; i, 5; i++) {
		playRound(playerSelection, computerSelection);
	}
	return "winner";
}

const computerSelection = getComputerChoice();

// console.log(playRound(playerSelection, computerSelection));

// game(0);
