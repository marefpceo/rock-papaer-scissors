const buttons = document.querySelectorAll('button');
const btnReset = document.querySelector('#btnReset');
const results = document.querySelector('#results');
const player = document.querySelector('#player').querySelector('p');
const computer = document.querySelector('#computer').querySelector('p');

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

//Function to play a single round of the rock, paper, scissor game
function playRound(playerSelection, computerSelection){

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

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, getComputerChoice());
        // player.textContent = playerScore;
        // computer.textContent = computerScore;
    });
});

btnReset.addEventListener('click', () => {
    results.textContent = '';
    player.textContent = playerScore = 0;
    computer.textContent = computerScore = 0;

    buttons.forEach((button) => {
        button.disabled = false;
    });
});