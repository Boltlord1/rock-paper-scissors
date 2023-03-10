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

function round(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection == "rock" && computerSelection == "Rock") {
        return "Draw! Both sides chose Rock!"
    } else if (playerSelection == "rock" && computerSelection == "Paper") {
        return "Computer wins! Paper beats Rock"
    } else if (playerSelection == "rock" && computerSelection == "Scissors") {
        return "Player wins! Rock beats Scissors"
    } else if (playerSelection == "paper" && computerSelection == "Rock") {
        return "Player wins! Paper beats Rock"
    } else if (playerSelection == "paper" && computerSelection == "Paper") {
        return "Draw! Both sides chose Paper"
    } else if (playerSelection == "paper" && computerSelection == "Scissors") {
        return "Computer wins! Scissors beat Paper"
    } else if (playerSelection == "scissors" && computerSelection == "Rock") {
        return "Computer wins! Rock beats Scissors!"
    } else if (playerSelection == "scissors" && computerSelection == "Paper") {
        return "Player wins! Scissors beat Paper"
    } else if (playerSelection == "scissors" && computerSelection == "Scissors") {
        return "Draw! Both sides chose Scissors"
    }
}

console.log(getComputerChoice())
console.log(round("RoCk", getComputerChoice()))