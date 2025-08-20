function moveID(move) {
    switch(move) {
        case 0:
            return `rock`
        case 1:
            return`paper`
        case 2:
            return `scissors`
    }
}

function computerChoice() {
    return Math.floor(Math.random() * 3)
}

function playRound(computer, player) {
    if (someoneWon  === true) return
    if (player === 2) checkS = ``

    let roundText
    if (computer === player) {
        roundText = `Draw! Both sides chose ${moveID(computer)}.`
    } else if (computer === (player - 1) || player === 0 && computer === 2) {
        roundText = `Player wins! ${moveID(player)} beat${checkS} ${moveID(computer)}.`
        playerScore++
    } else if (computer === (player + 1) || computer === 0 && player === 2) {
        roundText = `Computer wins! ${moveID(player)} lose${checkS} to ${moveID(computer)}.`
        computerScore++
    }

    scoreCounter.textContent = `Player ${playerScore} - ${computerScore} Computer`
    const round = document.createElement(`li`)
    round.textContent = roundText
    roundList.appendChild(round)

    if (playerScore > 4) {
        return endGame(`Player`, playerScore, computerScore)
    } else if (computerScore > 4) {
        return endGame(`Computer`, computerScore, playerScore)
    }
}

function endGame(winner, winnerScore, loserScore) {
    const round = document.createElement(`li`)
    round.textContent = `${winner} is the winner! They won with a score of ${winnerScore} - ${loserScore}.`
    roundList.appendChild(round)
    someoneWon = true
}

function resetGame() {
    computerScore = 0
    playerScore = 0
    someoneWon = false
    scoreCounter.textContent = `Player 0 - 0 Computer`
    roundList.textContent = `Round:`
}

const buttons = document.querySelector(`.buttons`)
buttons.addEventListener(`click`, (event) => {
    let target = event.target
    switch(target.id) {
        case `rock`:
            playRound(computerChoice(), 0)
            break
        case `paper`:
            playRound(computerChoice(), 1)
            break
        case `scissors`:
            playRound(computerChoice(), 2)
            break
        case `reset`:
            resetGame()
            break
    }
})

let computerScore = 0
let playerScore = 0
let someoneWon = false
let checkS = `s`

const scoreCounter = document.querySelector(`.score`)
scoreCounter.textContent = `Player 0 - 0 Computer`
const roundList = document.querySelector(`.rounds`)
roundList.textContent = `Round:`