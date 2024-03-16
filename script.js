'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let message = document.querySelector('.message')
let score = 20
let highscore = 0;
let scores = document.querySelector('.score')
let number = document.querySelector('.number')

number.value = secretNumber

const correctNumber=(msg,color,scoreInput)=>{
    message.textContent = msg
    document.querySelector('body').style.backgroundColor=color
    scores.textContent =scoreInput
    number.textContent=secretNumber
    highscores(score)
}

const gameOver =(msg,color)=>{
    message.textContent = msg;
    document.querySelector('body').style.backgroundColor=color
    scores.textContent = 0
    number.textContent=secretNumber
}

const wrongNumber =(msg,scoreInput,color)=>{
    message.textContent = msg;
    scoreInput--
    score=scoreInput
    scores.textContent =score
    document.querySelector('body').style.backgroundColor=color
    
}

const highscores =(scoreInput)=> {
    if (scoreInput > highscore) {
        highscore = scoreInput
        document.querySelector('.highscore').textContent=highscore
    }   
}

const compare = (guess)=> {
    if (score > 1) {
        guess > secretNumber ? wrongNumber('Too high', score, '#ff7400'):wrongNumber('Too Low', score, '#ff7400')
    } else {
        gameOver('you lost the game', '#fd0505')
    }
}


const start = ()=> {
    const guess =Number(document.querySelector('.guess').value)

    if (!guess) {
        message.textContent = "No Number";
    } else if (guess === secretNumber) {
        correctNumber('Correct Number','#60b347',score)
    } else if (guess !== secretNumber) {
        compare(guess)
    }
}

const playAgain =()=>{
    score = 20 
    scores.textContent=score
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('body').style.backgroundColor='#222'
    message.textContent='Start guessing...'
    number.textContent='?'
    document.querySelector('.guess').value = '';
}


document.querySelector('.check').addEventListener('click',start)
document.querySelector('.again').addEventListener('click',playAgain)


