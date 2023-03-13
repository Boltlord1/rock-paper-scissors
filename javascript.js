function getComputerChoice() {
    let computerChoice = Math.floor(Math.random()*3)
    if(computerChoice == 0) {
        return computerSelection = "Rock"
    } else if(computerChoice == 1) {
        return computerSelection = "Paper"
    } else if(computerChoice == 2) {
        return computerSelection = "Scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "Rock" && computerSelection == "Rock") {
        return "Draw! Both sides chose Rock!"
    } else if (playerSelection == "Rock" && computerSelection == "Paper") {
        return "Computer wins! Paper beats Rock"
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        return "Player wins! Rock beats Scissors"
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        return "Player wins! Paper beats Rock"
    } else if (playerSelection == "Paper" && computerSelection == "Paper") {
        return "Draw! Both sides chose Paper"
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        return "Computer wins! Scissors beat Paper"
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        return "Computer wins! Rock beats Scissors!"
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        return "Player wins! Scissors beat Paper"
    } else if (playerSelection == "Scissors" && computerSelection == "Scissors") {
        return "Draw! Both sides chose Scissors"
    } return "Invalid input"
}

const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')

rock.addEventListener('click', () => {
    console.log(playRound('Rock', getComputerChoice()));
});
paper.addEventListener('click', () => {
    console.log(playRound('Paper', getComputerChoice()));
});
scissors.addEventListener('click', () => {
    console.log(playRound('Scissors', getComputerChoice()));
});

/* function game() {
    let playerScore = 0
    let computerScore = 0
    while (playerScore != 5 && computerScore != 5) {
        let playerSelection = prompt("Choose Object:", "rock")
        let computerSelection = getComputerChoice()
        let result = playRound(playerSelection, computerSelection)
        console.log(result)
        if (result[0] == "P") {
            playerScore++
        } else if (result[0] == "C") {
            computerScore++
        }
        let scoreboard = `Player ${playerScore} - ${computerScore} Computer`
        console.log(scoreboard)
    }
    if (playerScore == 5) {
        console.log("Player wins!")
    } else if (computerScore == 5) {
        console.log("Computer wins!")
    }
}

console.log(game()) */

// remember to use $ git push orign rps-ui