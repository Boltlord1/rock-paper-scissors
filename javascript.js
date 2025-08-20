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

function playRound(computerChoice, playerChoice) {
    console.log(computerChoice + ` ` + playerChoice)
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

const scoreList = document.querySelector(`.score`)
const scoreListItem = document.createElement(`li`)