function moveID(move) {
    if (move === 0) {
        return `rock`
    } else if (move === 1) {
        return `paper`
    } else if (move === 2) {
        return `scissors`
    }
}

function computerChoice() {
    return Math.floor(Math.random() * 3)
}

function playerChoice(choice) {
    choice = parseInt(prompt(`Enter your choice`, `0, 1 or 2`))
    return choice
}

function playRound(computer, player) {
    let computerWon = `Computer wins, ${moveID(computer)} beats ${moveID(player)}`
    let playerWon = `Player wins, ${moveID(player)} beats ${moveID(computer)}`
    console.log(computer)
    console.log(player)
    if (computer === player) {
        return `Draw, both sides chose ${moveID(computer)}`
    } else if (computer === (player - 1)) {
        return playerWon
    } else if (computer === (player + 1) || computer === 0) {
        return computerWon
    } else {
        return playerWon
    }
}