//computer input
function getComputerChoice() {
	const selArray = ["Rock", "Paper", "Scissors"];

	let randomChoice = selArray[Math.floor(Math.random() * selArray.length)];

	return randomChoice;

	// let randomNum = Math.floor(Math.random() * 3);

	// let randomChoice = selArray.fromIndex(randomNum);

	// return randomChoice;
}

console.log(getComputerChoice());

//user input
// const userChoice = prompt("Make your selection: Rock, Paper, Scissors!");

//computer input
