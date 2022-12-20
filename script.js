let playerScore = 0;
let computerScore = 0;
let match = function () {
	//player input
	function getPlayerSelection() {
		const playerInput = prompt("Pick rock, paper or scissors!");

		const playerSelection = playerInput.trim().toLowerCase();

		return playerSelection;
	}

	//computer input
	function getComputerChoice() {
		const selArray = ["rock", "paper", "scissors"];

		let randomChoice = selArray[Math.floor(Math.random() * selArray.length)];

		return randomChoice;
	}

	const computerSelection = getComputerChoice();

	const playerSelection = getPlayerSelection();

	return { playerSelection, computerSelection };
};

function playRound(playerSelection, computerSelection) {
	if (
		playerSelection !== "rock" ||
		playerSelection !== "paper" ||
		playerSelection !== "scissors"
	) {
		results = "You did not pick rock, paper, or scissors!";
	}
	if (playerSelection === computerSelection) {
		results = "Tie game.";
	} else if (
		(playerSelection === "rock" && computerSelection === "scissors") ||
		(playerSelection === "paper" && computerSelection === "rock") ||
		(playerSelection === "scissors" && computerSelection === "paper")
	) {
		playerScore++;
		results = "You win!!";
	} else if (
		(playerSelection === "rock" && computerSelection === "paper") ||
		(playerSelection === "paper" && computerSelection === "scissors") ||
		(playerSelection === "scissors" && computerSelection === "rock")
	) {
		computerScore++;
		results = "You lose this round!";
	}

	return { results, playerScore, computerScore };
}

function game() {
	for (let i = 1; i <= 5; i++) {
		let opt = match();
		console.log(playRound(opt.playerSelection, opt.computerSelection));
	}
	if (playerScore === computerScore) {
		console.log("No winner, tie game!");
	} else if (playerScore > computerScore) {
		console.log("You are the winner!");
	} else if (playerScore < computerScore) {
		console.log("You lost");
	}
}

// console.log(playRound(playerSelection, computerSelection));

game();
