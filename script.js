// Score vairables
let humanScore = 0;
let computerScore = 0;

// Number of times the game has been played/ buttons clicked.
let gameCount = 0;

// Computer choice function
function getComputerChoice() {
    let choice = (Math.random() * 10) / 4;
    // console.log(choice);
    if (choice > 2) {
        let computerChoice = "Rock";
        return computerChoice;
    } else if (choice < 2 && choice > 1) {
        let computerChoice = "Paper";
        return computerChoice;
    } else {
        let computerChoice = "Scissor";
        return computerChoice;
    }
}
// *********************** Adding User interface********************
// Author: Nabin Shrestha
// Date: 05 September 2024.

const playersOption = document.querySelector(".humanInterface");

// Creating buttons to provide player to choose rock,paper or scissor.
const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorBtn = document.createElement("button");

const formatting = document.querySelector(".formatting");

rockBtn.textContent = "Rock";
paperBtn.textContent = "Paper";
scissorBtn.textContent = "Scissor";

playersOption.setAttribute("Style","display: flex; background:orange; justify-content: center; padding: 20px; gap: 25px; align-items: center;");
rockBtn.setAttribute("style","font-weight: bold; font-size: 25px;border-radius: 5px; width: 120px;");
paperBtn.setAttribute("style","font-weight: bold;font-size: 25px;border-radius: 5px; width: 120px;");
scissorBtn.setAttribute("style","font-weight: bold;font-size: 25px;border-radius: 5px; width: 120px;");

playersOption.appendChild(rockBtn);
playersOption.appendChild(paperBtn);
playersOption.appendChild(scissorBtn);
const buttons = document.querySelectorAll(".humanInterface>button");

// Eventlistener to decide which button the player clicked and based on that by referring to random item chosen by compter winner is decided.
buttons.forEach((button) => {
    button.addEventListener("click", () => {

        // variable to save what the player selected "Rock", "Paper", "Scissor" based on button clicked.
        humanChoice = button.textContent;

        //Using the functionn getComputerChoice() to get random selection from computer.
        computerChoice = getComputerChoice();

        // Creating elements in DOM to display and interface that shows the player's, computer's selection, Winner message, 
        //player & computer's score, number of games played and the Final score.
        const playerSelection = document.createElement("p");
        const computerSelection = document.createElement("p");
        const winnerMessage = document.createElement("p");
        const playerScore = document.createElement("p");
        const machineScore = document.createElement("p");
        const numberOfGames = document.createElement("p");
        const finalScore = document.createElement("p");

        // If else statement to decide who won and set the CSS style to the winner message and 
        // also increase computerScore, humanScore, numer of games played count.
        if (humanChoice === computerChoice) {
            winnerMessage.textContent = `Draw!!!`;
            winnerMessage.setAttribute("style", "background: grey;");
            gameCount++;
        } else if (humanChoice === "Rock" && computerChoice === "Paper") {
            winnerMessage.textContent = `You Lose! Paper beats Rock.`;
            winnerMessage.setAttribute("style", "background: red;");
            computerScore++;
            gameCount++;

        } else if (humanChoice === "Paper" && computerChoice === "Scissor") {
            winnerMessage.textContent = `You Lose! Scissor beats paper.`;
            winnerMessage.setAttribute("style", "background: red;");
            computerScore++;
            gameCount++;
        } else if (humanChoice === "Scissor" && computerChoice === "Rock") {
            winnerMessage.textContent = `You lose! Rock beats Scissor!`;
            winnerMessage.setAttribute("style", "background: red;");
            computerScore++;
            gameCount++;
        } else {
            winnerMessage.textContent = `You win! ${humanChoice} beats ${computerChoice} !!!`;
            winnerMessage.setAttribute("style", "background:green;");
            humanScore++;
            gameCount++;
        }

        // Providing text to the DOM elements to display in the interface based on the interactions and results.
        numberOfGames.textContent = (`Game number: ${gameCount}`);
        numberOfGames.setAttribute("style", "background: blue; color: white; font-size: 25px; margin-top: 5px; padding: 5px; text-align: center;");
        playerSelection.textContent = (`Human selection: ${humanChoice}`);
        computerSelection.textContent = (`Computer selection: ${computerChoice}`);
        playerScore.textContent = (`Human Score: ${humanScore}`);
        machineScore.textContent = (`Computer Score: ${computerScore}`);

        // Function to reset score and count to start a new game.
        function conuterReset() {
            humanScore = 0;
            computerScore = 0;
            gameCount = 0;
        }

        // Final score to display once either computer or human achieves a score of 5
        // And also reset the counter to start new game.
        if (computerScore === 5 && humanScore < 5) {
            finalScore.textContent = "You Lose!!!";
            finalScore.setAttribute("style", "font-size: 35px; background-color: red;")
            conuterReset();

        } else if (computerScore === 5 && humanScore === 5) {
            finalScore.textContent = "It's a draw";
            finalScore.setAttribute("style", "font-size: 35px; background-color: grey;")
            conuterReset();
        }
        else if (humanScore === 5 && computerScore < 5) {
            finalScore.textContent = "You Win!!!";
            finalScore.setAttribute("style", "font-size: 35px; background-color: green;")
            conuterReset();
        }

        // The function to display interface with new instance of computer VS Human score. 

        function increaseDiv(gameCount) {
            if (gameCount > -1) {
                // newDiv.setAttribute("class", "newbox");
                const newDiv = document.createElement("div");
                newDiv.appendChild(numberOfGames);
                newDiv.appendChild(playerSelection);
                newDiv.appendChild(computerSelection);
                newDiv.appendChild(winnerMessage);
                newDiv.appendChild(playerScore);
                newDiv.appendChild(machineScore);
                newDiv.appendChild(finalScore);
                newDiv.setAttribute("style", "border: 1px solid black; padding: 10px;");
                formatting.appendChild(newDiv);
            }
        }
        increaseDiv(gameCount);




    });
});




/*   Legacy codes         */

//Function to play a single round
// function playRound(humanChoice, computerChoice) {
//     if (humanChoice === computerChoice) {
//         winnerMessage.textContent = `Draw!!!`;
//         winnderMessage.setAttribute("style", "background: grey;");
//     } else if (humanChoice === "Rock" && computerChoice === "Paper") {
//         console.log(`%c You Lose! Paper beats Rock.`, `background: red;`);
//         computerScore++;
//     } else if (humanChoice === "Paper" && computerChoice === "Scissor") {
//         console.log(`%c You Lose! Scissor beats paper.`, `background: red;`);
//         computerScore++;
//     } else if (humanChoice === "Scissor" && computerChoice === "Rock") {
//         console.log(`%c You lose! Rock beats Scissor!`, `background: red;`);
//         computerScore++;
//     } else {
//         console.log(`%c You win! ${humanChoice} beats ${computerChoice} !!!`, `background:green;`)
//         humanScore++;
//     }
//     console.log("Computer's Score: " + computerScore);
//     console.log("Human's Score: " + humanScore);
//     console.log(`%c Next game.`, `background: blue;`);
// }

//Human choice function.
// function getHumanChoice() {
//     let humanChoice = prompt("Please type 'Rock' || 'Paper' || 'Scissor' to play the game: ");
//     let lastString = humanChoice.substring(1);
//     humanChoice = humanChoice[0].toUpperCase() + lastString.toLowerCase();
//     console.log("Human's Choice: " + humanChoice);
//     return humanChoice;
// }

// function returnWinner(humanScore, computerScore){
//     if (computerScore === 5 && humanScore < 5) {
//         return "computerWins";
//     } else if (computerScore === 5 && humanScore === 5) {
//         return "draw";
//     } else if (humanScore === 5 && computerScore < 5) {
//         return "humanWins";
//     }
// }


// Function to change the final round's back ground colour.
// function increaseDiv(gameCount){
//     if (gameCount > -1) {
//         // newDiv.setAttribute("class", "newbox");
//         const newDiv = document.createElement("div");
//         newDiv.appendChild(numberOfGames);
//         newDiv.appendChild(playerSelection);
//         newDiv.appendChild(computerSelection);
//         newDiv.appendChild(winnerMessage);
//         newDiv.appendChild(playerScore);
//         newDiv.appendChild(machineScore);
//         newDiv.appendChild(finalScore);
//         newDiv.setAttribute("style", "border: 1px solid black;");
//         if (Winner==="draw"){
//             newDiv.setAttribute("style", "background: grey;")
//         }else if(Winner ==="computerWins"){
//             newDiv.setAttribute("style", "background: red;")
//         }else if(Winner ==="humanWins"){
//             newDiv.setAttribute("style", "background: green;")
//         }
//         formatting.appendChild(newDiv);
//     }
// }
// increaseDiv(gameCount);


// Function to play 5 times.
/* function playGame() {
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
    */

//Calling functions
// playGame();
