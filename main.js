//rock-paper-scissors game will be played against the computer
//The game will consist of a single round of game play. 


let playerScore = 0;
let computerScore = 0;


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


//Helper function to verify player input. Improper inputs return a value of false. 
function inputVerify(playerInput){
    if ((playerInput !== "rock") && (playerInput !== "paper") && (playerInput !== "scissor")) {
        alert("Please enter a valid selection!");
        return false;
    }
}



//Function to play a single round of the rock, paper, scissor game
function playRound(playerSelection, computerSelection){

    switch (playerSelection) {
        case "rock":
            if (playerSelection === computerSelection) {
                return "The game was tied. You both selected Rock";
            } 

            if (computerSelection === "scissor") {
                playerScore++;
                return "You win! Rock beats Scissor!";
            } else {
                computerScore++;
                return "You lose. Paper beats Rock.";
            }
            break;
    
        case "paper":
            if (playerSelection === computerSelection) {
                return "The game was tied. You both selected Paper";
            } 

            if (computerSelection === "rock") {
                playerScore++;
                return "You win! Paper beats Rock!";
            } else {
                computerScore++;
                return "You lose. Scissor beats Paper.";
            }
            break;

        case "scissor":
            if (playerSelection === computerSelection) {
                return "The game was tied. You both selected Scissor";
            } 

            if (computerSelection === "paper") {
                playerScore++;
                return "You win! Scissor beats Paper!";
            } else {
                computerScore++;
                return "You lose. Rock beats Scissor.";
            }
            break;
    }
}




//Game functon that plays 5 rounds and keeps score. Calls inputVerify() helper function to verify player inputs before proceeding. 


function game(){

    let count = 0;
    for (let i = 0; i < 5; i++){
        const playerSelection = prompt("Choose Rock, Paper, or Scissor");
        const computerSelection = getComputerChoice();

        let playerLowerCase = playerSelection.toLowerCase();

        if (inputVerify(playerLowerCase) === false){
            i--;
        }else {
            console.log(playRound(playerLowerCase, computerSelection));
            count++;
            console.log("Game:  " + count + "\nPlayer:  " + playerScore + "  " + "Computer:  " + computerScore);
        }
    }

    if (playerScore > computerScore) {
        return "You won. You beat the computer " + playerScore + " to " + computerScore; 
    }else if (playerScore === computerScore){
        return "Tie score! You both won " + playerScore + " " + "games!";
    }else {
        return "You lost. The computer beat you " + computerScore + " to " + playerScore;
    }
}

console.log(game());