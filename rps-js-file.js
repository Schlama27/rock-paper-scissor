//Computer generates a random number from 1-3 and each corresponding number returns rock, paper, or scissor
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

//Prompts for user to input rock, paper, or scissor
function getHumanChoice() {
    let userInput = prompt('Choose: Rock, Paper, or Scissor.').toLowerCase();

    if (userInput === 'rock' ||   
        userInput === 'paper' || 
        userInput === 'scissor') {
        return userInput;
    } else {
        alert('Invalid entry');
    }
}

let humanScore = 0;
let computerScore = 0;

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

//Plays 5 rounds to determine winner of entire game depending who wins the majority of rounds
function playGame() {
    for (let round = 1; round <= 5; round++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        let roundWinner = playRound(humanChoice, computerChoice);

        if (roundWinner === 'computerWin') {
            computerScore++;
            alert(`You lose! Computer chose ${computerChoice}. The score is ${humanScore} to ${computerScore}.`)
        } else if (roundWinner === 'humanWin') {
            humanScore++;
            alert(`You win! Computer chose ${computerChoice}. The score is ${humanScore} to ${computerScore}.`)
        } else if (humanChoice === computerChoice) {
            alert(`Tie. The score is ${humanScore} to ${computerScore}.`);
        } else {
            alert('Press ESC to restart game.');
        }

        if (humanScore > computerScore && round === 5) {
            alert(`You have won the game. Final score is ${humanScore} to ${computerScore}. Congratulations!`);
        } else if (humanScore < computerScore && round === 5) {
            alert(`You have lost the game. Final score is ${humanScore} to ${computerScore}.`);
        } else if (humanScore === computerScore && round === 5) {
            alert(`The game ended in a Tie. Final score is ${humanScore} to ${computerScore}.`)
        }
    }
}

playGame();

