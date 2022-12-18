//computer input
function getComputerChoice() {
	const selArray = ["rock", "paper", "scissors"];

	let randomChoice = selArray[Math.floor(Math.random() * selArray.length)];

	return randomChoice;
}

function playRound(playerSelection, computerSelection) {
	if (playerSelection === computerSelection) {
		results = "Tie Game";
	} else if (
		(playerSelection === "rock" && computerSelection === "scissors") ||
		(playerSelection === "paper" && computerSelection === "rock") ||
		(playerSelection === "scissors" && computerSelection === "paper")
	) {
		results = "You win this round!";
	} else if (
		(playerSelection === "rock" && computerSelection === "paper") ||
		(playerSelection === "paper" && computerSelection === "scissors") ||
		(playerSelection === "scissors" && computerSelection === "rock")
	) {
		results = "You lose!";
	}

	// if (playerSelection === "rock" && computerSelection === " scissors") {
	//     results = "You win this round!";
	// }

	// (playerSelection === "rock") {
	// 	if (computerSelection === "scissors") {
	// 		results = "You win this round!";
	// 	} else if (computerSelection === "paper") {
	// 		results = "You Lose";
	// 	}
	// }
	return results;
}

const playerInput = prompt("Pick rock, paper or scissors!");

const playerSelection = playerInput.trim().toLowerCase();

const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));
