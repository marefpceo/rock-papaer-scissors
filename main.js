//rock-paper-scissors game will be played against the computer
//The game will consist of a single round of game play. 

//Function that randomly makes computer selection
function getComputerChoice() {
    let x = Math.floor(Math.random() * 3);
    let selection;

    if (x === 0){
        selection = "rock";
    }
    else if(x === 1){
        selection = "paper";
    }
    else {
        selection = "scissor";
    }
    return selection;
}


//Prompt the player to make a selection
const playerSelection = prompt("Choose Rock, Paper, or Scissor");

//The computer's selection will be randomly generated 
const computerSelection = getComputerChoice();

//A winner will be declared based on the two selections
//Rock beats Scissors
//Paper beats Rock
//Scissor beat Paper

function playRound(playerSelection, computerSelection){
    let player = playerSelection.toLowerCase();


    if ((playerSelection !== "rock") && (playerSelection !== "paper") && (playerSelection !== "scissor")) {
        alert("Please enter a valid selection!");
        location.reload();
    }

    switch (player) {
        case "rock":
            if (player === computerSelection) {
                return "The game was tied. You both selected Rock";
            } 

            if (computerSelection === "scissor") {
                return "You win! Rock beats Scissor!";
            } else {
                return "You lose. Paper beats Rock.";
            }
            break;
    
        case "paper":
            if (player === computerSelection) {
                return "The game was tied. You both selected Paper";
            } 

            if (computerSelection === "rock") {
                return "You win! Paper beats Rock!";
            } else {
                return "You lose. Scissor beats Paper.";
            }
            break;

        case "scissor":
            if (player === computerSelection) {
                return "The game was tied. You both selected Scissor";
            } 

            if (computerSelection === "paper") {
                return "You win! Scissor beats Paper!";
            } else {
                return "You lose. Rock beats Scissor.";
            }
            break;
    }
}

console.log(playRound(playerSelection,computerSelection));