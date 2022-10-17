const buttons = document.querySelectorAll('button');
const btnReset = document.querySelector('#btnReset');
const results = document.querySelector('#results');
const player = document.querySelector('#player').querySelector('p');
const computer = document.querySelector('#computer').querySelector('p');
const playerIcon = document.createElement("img");
const computerIcon = document.createElement("img");
const selection = document.getElementById("selection");
const playerDiv = document.getElementById("player");
const computerDiv = document.getElementById("computer");

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
        playerDiv.style.boxShadow = "0 2px 10px 0px #ff7419";
        results.textContent = `You win!! You won ${playerScore} games first!!`;
    } else if (computerScore === 5) {
        disablePlayButtons();
        computerDiv.style.boxShadow = "0 2px 10px 0px #ff7419";
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
    document.getElementById('Rock').style.opacity = "0.3";
    document.getElementById('Paper').style.opacity = "0.3";
    document.getElementById('Scissor').style.opacity = "0.3";
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

    playerDiv.style.boxShadow = "0 2px 10px 0px #bcc9df";
    computerDiv.style.boxShadow = "0 2px 10px 0px #bcc9df";

    buttons.forEach((button) => {
        button.disabled = false;
    });
});

//Displays current year in footer
let date = new Date().getFullYear();
const footer = document.querySelector('.footer');
const footerDiv = document.createElement('div');
footerDiv.textContent = `Lamar Stevens ${date}`;

footer.appendChild(footerDiv);
