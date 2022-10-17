const buttons = document.querySelectorAll('button');
const btnReset = document.querySelector('#btnReset');
const results = document.querySelector('#results');
const player = document.querySelector('#player').querySelector('p');
const computer = document.querySelector('#computer').querySelector('p');
const playerIcon = document.createElement("img");
const computerIcon = document.createElement("img");
const selection = document.getElementById("selection");

let playerScore = 0;
let computerScore = 0;


//Function to generate computer selection
function getComputerChoice() {
    let x = Math.floor(Math.random() * 3);
    let selection = '';
 
    if (x === 0){
        selection = "Rock";
    }
    else if(x === 1){
        selection = "Paper";
    }
    else {
        selection = "Scissor";
    }
    return selection;
}


//Function determines winner and disable selection buttons
function gameWinner(playerScore, computerScore) {
    if (playerScore === 5) {
        disablePlayButtons();
        results.textContent = `You win!! You won ${playerScore} games first!!`;
    } else if (computerScore === 5) {
        disablePlayButtons();
        results.textContent = `You lose. The computer won ${computerScore} games first`;
    }
}


//Displays the current selection for each player. 
function displaySelection(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toLowerCase();
    let computerChoice = computerSelection.toLowerCase();
    
    playerIcon.src = `images/${playerChoice}-orange.svg`;
    computerIcon.src = `images/${computerChoice}-orange.svg`;
    selection.appendChild(playerIcon);
    selection.appendChild(computerIcon);
}


//Function to play a single round of the rock, paper, scissor game
function playRound(playerSelection, computerSelection){

        displaySelection(playerSelection, computerSelection);

        if (playerSelection === computerSelection){
            results.textContent = `The game was tied. You both selected ${playerSelection}`;
        } else if (((playerSelection === "Rock") && (computerSelection === "Scissor")) || 
                  ((playerSelection === "Paper") && (computerSelection === "Rock")) || 
                  ((playerSelection === "Scissor") && (computerSelection === "Paper"))) {
            playerScore++;
            player.textContent = playerScore;
            results.textContent = `You scored!! ${playerSelection} 
                                   beats ${computerSelection}`;
            gameWinner(playerScore, computerScore);
        } else {
            computerScore++;
            computer.textContent = computerScore;
            results.textContent = `Computer scored!! ${computerSelection} 
                                   beats ${playerSelection}`;
            gameWinner(playerScore, computerScore);
        }     
}


function disablePlayButtons() {
    document.getElementById('Rock').disabled = true;
    document.getElementById('Paper').disabled = true;
    document.getElementById('Scissor').disabled = true;
}


//Adds event listeners to each button and starts the game by calling playRound(
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, getComputerChoice());
    });
});


//Resets everything back to their initial state
btnReset.addEventListener('click', () => {
    results.textContent = 'Make a selection to begin';
    player.textContent = playerScore = 0;
    computer.textContent = computerScore = 0;

    selection.removeChild(playerIcon);
    selection.removeChild(computerIcon);

    buttons.forEach((button) => {
        button.disabled = false;
    });
});