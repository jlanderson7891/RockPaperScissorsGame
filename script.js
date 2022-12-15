//computer input
function getComputerChoice() {
	const selArray = ["rock", "paper", "scissors"];

	let randomChoice = selArray[Math.floor(Math.random() * selArray.length)];

	return randomChoice;
}

function playRound(playerSelection, computerSelection) {
	if (playerSelection === "rock") {
		if (computerSelection === "sissors") {
			winner = playerSelection;
		} else if (computerSelection === "paper") {
			winner = computerSelection;
		} else {
			winner = "Tie Game";
		}
	}
	return winner;
}

const playerSelection = "rock";

const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));
