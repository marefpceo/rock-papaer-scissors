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




//Game function starts the game. Prompts the player for a selection. Generates the computer's
//selection. Verifies the player has inputted a valid selection.  


function game(){

    let count = 0;

    const playerSelection = prompt("Choose Rock, Paper, or Scissor");
    const computerSelection = getComputerChoice();

    let playerLowerCase = playerSelection.toLowerCase();

    if (inputVerify(playerLowerCase) === false){
        game();
    }else {
        console.log(playRound(playerLowerCase, computerSelection));
        count++;
        console.log("Game:  " + count + "\nPlayer:  " + playerScore + "  " + "Computer:  " + computerScore);
    }
}

const btnRock = document.querySelector('#btnRock');
btnRock.addEventListener('click', () => {
    console.log(playRound("rock", getComputerChoice()));
});

const btnPaper = document.querySelector('#btnPaper');
btnPaper.addEventListener('click', () => {
    console.log(playRound("paper", getComputerChoice()));
});

const btnScissor = document.querySelector('#btnScissor');
btnScissor.addEventListener('click', () => {
    console.log(playRound("scissor", getComputerChoice()));
});