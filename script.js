
// Score vairables
let humanScore = 0;
let computerScore = 0;

// Computer choice function
function getComputerChoice() {
    let choice = (Math.random() * 10) / 4;
    console.log(choice);
    if (choice > 2) {
        let computerChoice = "Rock";
        console.log(computerChoice);
        return computerChoice;
    } else if (choice < 2 && choice > 1) {
        let computerChoice = "Paper";
        console.log(computerChoice);
        return computerChoice;
    } else {
        let computerChoice = "Scissor";
        console.log(computerChoice);
        return computerChoice;
    }
    
}

//Human choice function.
function getHumanChoice() {
    let humanChoice = prompt("Please type 'rock' 'paper' 'scissors' to play the game: ");
    let lastString = humanChoice.substring(1);
    humanChoice = humanChoice[0].toUpperCase()+lastString.toLowerCase();
    console.log(humanChoice);
    return humanChoice;
}

//Function to play a single round

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice){
        console.log("Draw!!!");
    }else if(humanChoice === "Rock" && computerChoice === "Paper"){
        console.log("You Lose! Paper beats Rock.");
    }else if (humanChoice === "Paper" && computerChoice === "Scissor"){
        console.log("You Lose! Scissor beats paper.");
    }else if (humanChoice === "Scissor" && computerChoice === "Rock"){
        console.log("You lose! Rock beats Scissor!")
    }else{
        console.log(`You win! ${humanChoice} beats ${computerChoice} !!!`)
    }

}
//Callin functions
const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();
playRound(humanChoice, computerChoice);
