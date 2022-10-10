//rock-paper-scissors game will be played against the computer

const cpuChoice = null;

//Function that randomly makes computer selection
function getComputerChoice() {
    let x = Math.floor(Math.random() * 3);
    let selection;

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

console.log(getComputerChoice());




//The game will consist of a single round of game play. 
//The player will make a selection
//The computer's selection will be randomly generated 
//A winner will be declared based on the two selections

