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

const result = document.querySelector('#results')

rock.addEventListener('click', () => {
    const resultList = document.createElement('li')
    resultList.textContent = playRound('Rock', getComputerChoice())
    result.appendChild(resultList)
});
paper.addEventListener('click', () => {
    const resultList = document.createElement('li')
    resultList.textContent = playRound('Paper', getComputerChoice())
    result.appendChild(resultList)
});
scissors.addEventListener('click', () => {
    const resultList = document.createElement('li')
    resultList.textContent = playRound('Scissors', getComputerChoice())
    result.appendChild(resultList)
});

// remember to use $ git push orign rps-ui