//computer input
function getComputerChoice() {
	const selArray = ["rock", "paper", "scissors"];

	let randomChoice = selArray[Math.floor(Math.random() * selArray.length)];

	return randomChoice;
}

function playRound(playerSelection, computerSelection) {
	let player = playerSelection.toLowerCase();
	if (player === "rock") {
		if (computerSelection === "scissors") {
			winner = "You win this round!";
		} else if (computerSelection === "paper") {
			winner = "You Lose";
		} else {
			winner = "Tie Game";
		}
	}
	return winner;
}

const playerSelection = "roCk";

const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));
