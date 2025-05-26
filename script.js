
// function getHumanChoice() {

//     let humanChoice = prompt("What do you choose? (rock, paper, scissors)")
//     return humanChoice.toLowerCase()
// }


function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3)

    if (computerChoice == 0) {
        return computerChoice = "rock"
    }
    else if (computerChoice == 1) {
        return computerChoice = "paper"
    }
    else if (computerChoice == 2) {
        return computerChoice = "scissors"
    }

}

let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');
buttons.forEach(btn => {
    btn.addEventListener('click', function (e) {
        playRound(e.target.id)
        humanScoreText.textContent = `Human score is ${humanScore}`;
        computerScoreText.textContent = `Computer score is ${computerScore}`;
        if(humanScore == 5){
            winner.textContent = 'Human win!!';
        
        }
        else if(computerScore == 5){
            winner.textContent = 'Computer win!!';
        }
    });
});


const divScore = document.querySelector('.divScore');
const humanScoreText = document.createElement('p');
humanScoreText.textContent = `Human score is ${humanScore}`;
divScore.appendChild(humanScoreText);
const computerScoreText = document.createElement('p');
computerScoreText.textContent = `Computer score is ${computerScore}`;
divScore.appendChild(computerScoreText);

const result = document.createElement('h3');
divScore.appendChild(result);

const winner = document.createElement('h1');
divScore.appendChild(winner);

function playRound(humanChoice) {

    let computerChoice = getComputerChoice()

    if (humanChoice == 'rock' && computerChoice == 'rock') {
        result.textContent = `Draw! ${humanChoice} equal to  ${computerChoice} `

    }
    else if (humanChoice == 'rock' && computerChoice == 'scissors') {
        result.textContent = `You win! ${humanChoice} beats  ${computerChoice} `
       
        humanScore++
    }
    else if (humanChoice == 'rock' && computerChoice == 'paper') {
        result.textContent = `You Lose! ${computerChoice} beats  ${humanChoice} `
        computerScore++
    }
    else if (humanChoice == 'paper' && computerChoice == 'paper') {
        result.textContent = `Draw! ${humanChoice} equal to  ${computerChoice} `
    }
    else if (humanChoice == 'paper' && computerChoice == 'rock') {
        result.textContent = `You win! ${humanChoice} beats ${computerChoice} `
        humanScore++
    }
    else if (humanChoice == 'rock' && computerChoice == 'scissors') {
        result.textContent = `You Lose! ${computerChoice} beats ${humanChoice} `
        computerScore++
    }
    else if (humanChoice == 'scissors' && computerChoice == 'scissors') {
        result.textContent = `Draw! ${humanChoice} equal to ${computerChoice} `
    }
    else if (humanChoice == 'scissors' && computerChoice == 'paper') {
        result.textContent = `You win! ${humanChoice} beats ${computerChoice} `
        humanScore++
    }
    else if (humanChoice == 'scissors' && computerChoice == 'rock') {
        result.textContent = `You Lose! ${computerChoice} beats ${humanChoice} `
        computerScore++
    }

}



