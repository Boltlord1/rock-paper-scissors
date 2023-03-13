function getComputerChoice() {
    let botChoice = Math.floor(Math.random()*3);``
    if(botChoice == 0) {
        return botChoice = "Rock";
    } else if(botChoice == 1) {
        return botChoice = "Paper";
    } else if(botChoice == 2) {
        return botChoice = "Scissors";
    }
}

function playRound(userChoice, botChoice) {
    let winner;
    let resultMessage;
    if (userChoice == 'Rock' && botChoice == 'Scissors' ||
    userChoice == 'Paper' && botChoice == 'Rock' ||
    userChoice == 'Scissors' && botChoice == 'Paper') {
        winner = 'Player'
        return resultMessage = `${winner} wins! ${userChoice} beats ${botChoice}!`;
    } else if (botChoice == 'Rock' && userChoice == 'Scissors' ||
    botChoice == 'Paper' && userChoice == 'Rock' ||
    botChoice == 'Scissors' && userChoice == 'Paper') {
        winner = 'Computer'
        return resultMessage = `${winner} wins! ${botChoice} beats ${userChoice}!`;
    } return resultMessage = `Draw! both sides chose ${userChoice}!`
}

function removeEventListeners() {
    rock.removeEventListener('click', chooseRock);
    paper.removeEventListener('click', choosePaper);
    scissors.removeEventListener('click', chooseScissors);
}

function declareWinner(winner) {
    score.textContent += `. ${winner} wins!`
}

let userScore = 0;
let botScore = 0;

function playGame(userChoice) {
    let resultMessage = playRound(userChoice, getComputerChoice());
    if (resultMessage.startsWith('Player') == true) {
        userScore++
    } else if (resultMessage.startsWith('Computer') == true) {
        botScore++
    }
    const resultList = document.createElement('li');
    resultList.textContent = resultMessage;
    result.appendChild(resultList);
    score.textContent = `Player ${userScore} - ${botScore} Computer`;
    score.append;
    if (userScore == 5) {
        removeEventListeners();
        declareWinner('Player');
    } else if (botScore == 5) {
        removeEventListeners();
        declareWinner('Computer');
    }
}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const result = document.querySelector('#results');
const score = document.querySelector('#score');
let chooseRock = () => playGame('Rock');
let choosePaper = () => playGame('Paper');
let chooseScissors = () => playGame('Scissors');

rock.addEventListener('click', chooseRock);
paper.addEventListener('click', choosePaper);
scissors.addEventListener('click', chooseScissors);

// remember to use $ git push orign rps-ui