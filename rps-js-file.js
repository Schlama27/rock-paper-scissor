//Computer generates a random number from 1-3 and each corresponding number returns rock, paper, or scissor
const buttonChoice = document.querySelectorAll('.btn-choice');
const score = document.querySelector('#score');
const computerChoiceDisplay = document.querySelector('#computer-choice');

let humanScore = 0;
let computerScore = 0;
let round = 1;

score.innerHTML = 'Score: 0 to 0';

buttonChoice.forEach(function(e) {
    e.addEventListener('click', function() {
        let computerChoice = getComputerChoice();
        let humanChoice = this.id;
        let roundWinner = playRound(humanChoice, computerChoice);
        if (roundWinner === 'computerWin') {
            computerScore++;
            alert(`You lose! Computer chose ${computerChoice}. The score is ${humanScore} to ${computerScore}.`)
        } else if (roundWinner === 'humanWin') {
            humanScore++;
            alert(`You win! Computer chose ${computerChoice}. The score is ${humanScore} to ${computerScore}.`)
        } else if (humanChoice === computerChoice) {
            alert(`Tie. The score is ${humanScore} to ${computerScore}.`);
        };
        computerChoiceDisplay.innerHTML = `Computer Chose: ${capitalizeFirstLetter(computerChoice)}`;
        score.innerHTML = `Score: ${humanScore} to ${computerScore}`
        if (humanScore === 5) {
            alert(`You have won the game. Final score is ${humanScore} to ${computerScore}. Congratulations!`);
            score.innerHTML = 'YOU WIN!';
            resetGame();
        } else if (computerScore === 5) {
            alert(`You have lost the game. Final score is ${humanScore} to ${computerScore}.`);
            score.innerHTML = 'YOU LOSE!';
            resetGame();
        };
    })
});

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

function resetGame() {
    humanScore = 0;
    computerScore = 0;
}


function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    
    if (randomNumber === 1) {
        return 'rock';
    } else if (randomNumber === 2) {
        return 'paper';
    } else if (randomNumber === 3) {
        return 'scissor';
    }
}




//Plays a round to determine winner
function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'rock' && computerChoice === 'paper' ||
        humanChoice === 'paper' && computerChoice === 'scissor' ||
        humanChoice === 'scissor' && computerChoice === 'rock') {
            return 'computerWin';
        } 
    if (humanChoice === 'rock' && computerChoice === 'scissor' ||
        humanChoice === 'paper' && computerChoice === 'rock' ||
        humanChoice === 'scissor' && computerChoice === 'paper') {
            return 'humanWin';
        }
}
