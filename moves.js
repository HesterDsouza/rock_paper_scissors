//Define the moves
const moves = ["rock", "paper", "scissors"];

//Accept a move from the user.
// function getUserChoice(){
//     var usermove;
//     do {
//         usermove = prompt("Enter your choice (Rock | Paper | Scissors): ").toLowerCase();
//     } while (!moves.includes(usermove)); 
//     return usermove;
// }

//Funtion to get random move from array of moves for the computer's choice.
function getComputerChoice(){
    return moves[Math.floor(Math.random() * moves.length)];
}

//Store the user choice in "playerSelection" variable.
// var playerSelection = getUserChoice();

//Store the computer choice in "computerSelection" variable.
// var computerSelection = getComputerChoice();

//Round Results.
const winByRock = "You win! Rock crushes scissors."
const loseByRock = "You lose! Paper beats rock.";
const winByPaper = "You win! Paper beats rock";
const loseByPaper = "You lose! Scissors cuts paper.";
const winByScissors = "You win! Scissors cut paper";
const loseByScissors = "You lose! Rock crushes scissors";
const tie = "You both chose the same. You both are tied. Try again!";

//Function to play a round and display results 
function playRound(playerSelection, computerSelection){    
    if(playerSelection === "rock" && computerSelection === "scissors"){
        return winByRock
    }
    else if(playerSelection === "rock" && computerSelection === "paper"){
        return loseByRock
    }
    else if(playerSelection === "paper" && computerSelection === "rock"){
        return winByPaper
    }
    else if(playerSelection === "paper" && computerSelection === "scissors"){
        return loseByPaper
    }
    else if(playerSelection === "scissors" && computerSelection === "paper"){
        return winByScissors
    }
    else if(playerSelection === "scissors" && computerSelection === "rock"){
        return loseByScissors
    }
    else if(playerSelection === computerSelection){
        return tie
    }
    else{
        return "Invalid Input!"
    }
}

export {moves, getComputerChoice, playRound};

//Function to create the game where rounds are best of five.
// function playGame(){
//     let playerWins = 0;
//     let playerLoses = 0;
//     let ties = 0;

//     for(let i=0; i < 5; i++){
//         let playerSelection = getUserChoice();
//         console.log(playerSelection);
//         let computerSelection = getComputerChoice();
//         console.log(computerSelection);
//         playRound(playerSelection, computerSelection);
        
//         if(playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper"){
//                 playerWins++;
//         } else if(playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "rock"){
//             playerLoses++;
//         } else{
//             ties++;
//         }
//     }

//     if(playerWins > playerLoses){
//         alert("You won the series!")
//     } else if(playerWins < playerLoses) {
//         alert("You lost the series.")
//     } else {
//         alert("Series Tied!")
//     }

//     alert(`Player wins: ${playerWins} | Player losses: ${playerLoses}. | Player Ties: ${ties}`);
// }

// playGame();