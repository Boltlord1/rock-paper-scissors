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
    return moveID(Math.floor(Math.random() * 3))
}

function playerChoice(choice) {
    choice = parseInt(prompt(`Enter your choice`, `0, 1 or 2`))
    return moveID(choice)
}
