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

function playGame() {
    let playerScore = 0
    let computerScore = 0
    function playRound(computer, player) {
        let computerWon = `Computer wins, ${moveID(computer)} beats ${moveID(player)}`
        let playerWon = `Player wins, ${moveID(player)} beats ${moveID(computer)}`
        if (computer === player) {
            console.log(`Draw, both sides chose ${moveID(computer)}`)
            return
        } else if (computer === (player - 1)) {
            console.log(playerWon)
            return playerScore++
        } else if (computer === (player + 1) || computer === 0) {
            console.log(computerWon)
            return computerScore++
        } else {
            console.log(playerWon)
            return playerScore++
        }
    }
    for (;(playerScore < 5 && computerScore < 5);) {
        playRound(computerChoice(), playerChoice())
        console.log(`Player ${playerScore} - ${computerScore} Computer`)
    }
}

playGame()