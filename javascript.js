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
    let checkS = `s`
    if (player === 2) chcekS = ``

    if (playerScore > 4 || computerScore > 4) return

    let roundText
    if (computer === player) {
        roundText = `Draw! Both sides chose ${moveID(computer)}`
    } else if (computer === (player - 1) || player === 0 && computer === 2) {
        roundText = `Player wins! ${moveID(player)} beat${checkS} ${moveID(computer)}`
        playerScore++
    } else if (computer === (player + 1) || computer === 0 && player === 2) {
        roundText = `Computer wins! ${moveID(player)} lose${checkS} to ${moveID(computer)}`
        computerScore++
    }

    scoreCounter.textContent = `Player ${playerScore} - ${computerScore} Computer`
    const round = document.createElement(`li`)
    round.textContent = roundText
    roundList.appendChild(round)
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
            console.log(3)
            break
    }
})

let computerScore = 0
let playerScore = 0

const roundList = document.querySelector(`.rounds`)
const scoreCounter = document.querySelector(`.score`)