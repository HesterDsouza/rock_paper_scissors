import {moves, getComputerChoice, playRound} from './moves.js';

document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll(".gameButton");
    const playerMoveDisplay = document.querySelector(".playerMove");
    const compMoveDisplay = document.querySelector(".compMove");
    const roundResultDisplay = document.querySelector(".roundResult");
    const seriesResultDisplay = document.querySelector(".seriesResult");
    const scoreDisplay = document.querySelector(".scoreSheet");
    const resetButton = document.querySelector(".resetBtn");

    let playerWins = 0;
    let computerWins = 0;
    let gameOver = false;

    function resetGame() {
        playerWins = 0;
        computerWins = 0;
        playerMoveDisplay.textContent = "Player Move: ";
        compMoveDisplay.textContent = "Computer Move: ";
        roundResultDisplay.textContent = "Round Result: ";
        seriesResultDisplay.textContent = "Series Result: ";
        scoreDisplay.textContent = "Scores: ";
        gameOver = false;
        buttons.forEach(button => {
            button.disabled = false;
        });
    }

    function checkGameStatus(){
        if(playerWins === 5 || computerWins === 5){
            gameOver = true;
            buttons.forEach(button => {
                button.disabled = true;
            });
            if(playerWins === 5){
                seriesResultDisplay.textContent = "Series Result: Player wins the series!";
            }
            else if (computerWins === 5){
                seriesResultDisplay.textContent = "Series Result: Computer wins the series!";
            }
        }
    }

    buttons.forEach(button => {
        button.addEventListener("click", function(){
            const playerSelection = button.id;
            const computerSelection = getComputerChoice();

            playerMoveDisplay.textContent = `Player Move: ${playerSelection}`;
            compMoveDisplay.textContent = `Computer Move: ${computerSelection}`;

            const roundResult = playRound(playerSelection, computerSelection);
            roundResultDisplay.textContent = `Round Result: ${roundResult}`;

            if (roundResult.includes("win")){
                playerWins++;
            }
            else if (roundResult.includes("lose")) {
                computerWins++;
            }
            
            scoreDisplay.textContent = `Player ${playerWins} | Computer: ${computerWins}`;

            checkGameStatus();
        })
    })    
    
    resetButton.addEventListener("click", resetGame);
})
