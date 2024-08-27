
// Score vairables
let humanScore = 0;
let computerScore = 0;

// Computer choice function
function getComputerChoice() {
    let choice = (Math.random() * 10) / 4;
    // console.log(choice);
    if (choice > 2) {
        let computerChoice = "Rock";
        console.log("Computer's Choice: " + computerChoice);
        return computerChoice;
    } else if (choice < 2 && choice > 1) {
        let computerChoice = "Paper";
        console.log("Computer's Choice: " + computerChoice);
        return computerChoice;
    } else {
        let computerChoice = "Scissor";
        console.log("Computer's Choice: " + computerChoice);
        return computerChoice;
    }

}

//Human choice function.
function getHumanChoice() {
    let humanChoice = prompt("Please type 'Rock' || 'Paper' || 'Scissor' to play the game: ");
    let lastString = humanChoice.substring(1);
    humanChoice = humanChoice[0].toUpperCase() + lastString.toLowerCase();
    console.log("Human's Choice: " + humanChoice);
    return humanChoice;
}

//Function to play a single round

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`%c Draw!!!`,`background: grey;`);
    } else if (humanChoice === "Rock" && computerChoice === "Paper") {
        console.log(`%c You Lose! Paper beats Rock.`,`background: red;`);
        computerScore++;
    } else if (humanChoice === "Paper" && computerChoice === "Scissor") {
        console.log(`%c You Lose! Scissor beats paper.`,`background: red;`);
        computerScore++;
    } else if (humanChoice === "Scissor" && computerChoice === "Rock") {
        console.log(`%c You lose! Rock beats Scissor!`,`background: red;`);
        computerScore++;
    } else {
        console.log(`%c You win! ${humanChoice} beats ${computerChoice} !!!`,`background:green;`)
        humanScore++;
    }
    console.log("Computer's Score: " + computerScore);
    console.log("Human's Score: " + humanScore);
}

// Function to play 5 times.
function playGame() {
    for (i = 1; i < 6; i++) {
        console.log(`%c *****     Round ${i}     *****`, `font-size: 20px; background: Blue;`);
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);

    }
    if (humanScore > computerScore) {
        console.log(`%c Hurray You Won!!! ${humanScore}: ${computerScore}`, `font-size: 25px; background: green;`);
    } else if (humanScore === computerScore) {
        console.log(`%c It Was a Draw!!! ${humanScore}: ${computerScore}`, `font-size: 25px; background: orange;`);
    }
    else {
        console.log(`%c Computer Won!!! ${computerScore}: ${humanScore}`, `font-size: 25px; background: red;`);
    }
}

//Calling functions
playGame();
