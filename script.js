

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

function getHumanChoice() {

    let humanChoice = prompt("What do you choose? (rock, paper, scissors)")
    return humanChoice.toLowerCase()
}


function playGame() {

    let humanScore = 0
    let computerScore = 0

    function playRound(humanChoice, computerChoice) {

        if (humanChoice == 'rock' && computerChoice == 'rock') {
            console.log(`Draw! ${humanChoice} equal to  ${computerChoice} `)

        }
        else if (humanChoice == 'rock' && computerChoice == 'scissors') {
            console.log(`You win! ${humanChoice} beats  ${computerChoice} `)
            humanScore++
        }
        else if (humanChoice == 'rock' && computerChoice == 'paper') {
            console.log(`You Lose! ${computerChoice} beats  ${humanChoice} `)
            computerScore++
        }
        else if (humanChoice == 'paper' && computerChoice == 'paper') {
            console.log(`Draw! ${humanChoice} equal to  ${computerChoice} `)
        }
        else if (humanChoice == 'paper' && computerChoice == 'rock') {
            console.log(`You win! ${humanChoice} beats ${computerChoice} `)
            humanScore++
        }
        else if (humanChoice == 'rock' && computerChoice == 'scissors') {
            console.log(`You Lose! ${computerChoice} beats ${humanChoice} `)
            computerScore++
        }
        else if (humanChoice == 'scissors' && computerChoice == 'scissors') {
            console.log(`Draw! ${humanChoice} equal to ${computerChoice} `)
        }
        else if (humanChoice == 'scissors' && computerChoice == 'paper') {
            console.log(`You win! ${humanChoice} beats ${computerChoice} `)
            humanScore++
        }
        else if (humanChoice == 'scissors' && computerChoice == 'rock') {
            console.log(`You Lose! ${computerChoice} beats ${humanChoice} `)
            computerScore++
        }

    }

    for (i = 0; i < 5; i++) {

        let compuerSelection = getComputerChoice()
        let humanSelection = getHumanChoice()
        playRound(humanSelection, compuerSelection)
    }

    console.log("Human score is ", humanScore)
    console.log("Computer score is ", computerScore)

    if (humanScore > computerScore ) console.log("Human win!!")
    else if (humanScore < computerScore ) console.log("Computer win!!")
    else console.log("Draw!!")

}

playGame()
