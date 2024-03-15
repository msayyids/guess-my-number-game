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
    number.textContent=secret
}

const gameOver =(msg,color)=>{
    message.textContent = msg;
    document.querySelector('body').style.backgroundColor=color
    scores.textContent = 0
}

const wrongNumber =(msg,scoreInput,color)=>{
    message.textContent = msg;
    scoreInput--
    score=scoreInput
    scores.textContent =score
    document.querySelector('body').style.backgroundColor=color
    
}

const highscores =(scoreInput)=> {
    if (scoreInput > Number(highscore.textContent)) {
       highscore.textContent = scoreInput
    }   

    return scoreInput
}


const compare = ()=> {
    const guess =Number(document.querySelector('.guess').value)
    
    if (!guess) {
        message.textContent = "No Number";
    } else if (guess === secretNumber) {
        correctNumber('Correct Number','#60b347',score)
        if (score > highscore) {
            highscores(score)
        }
    } else if (guess !== secretNumber) {
        if (score > 1) {
            guess > secretNumber ? wrongNumber('Too high', score, '#ff7400'):wrongNumber('Too Low', score, '#ff7400')
        } else {
            gameOver('you lost the game', '#fd0505')
        }
    }
}

const restart =()=>{
    score = 20 
    scores.textContent=score
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('body').style.backgroundColor='#222'
    message.textContent='Start guessing...'
    number.textContent='?'
    document.querySelector('.guess').value = '';
}


document.querySelector('.check').addEventListener('click',compare)
document.querySelector('.again').addEventListener('click',restart)


