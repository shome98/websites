let randomNumber = parseInt(Math.random() * 100 + 1)
const submit = document.querySelector('#submit')
const userInput = document.querySelector('#guessField');
const previousGuesses = document.querySelector('previousGuesses')
const remaining = document.querySelector('remainingChances')
const lowOrHi = document.querySelector('lowOrHi')
const startOver = document.querySelector('result')
const p = document.createElement('p')

let guessNumber = 1
let playGame = true
let previousGuessesList=[]

if (playGame) {
    submit.addEventListener('click', function (event) {
        event.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

//validate input is number or not
function validateGuess(guess) {
    if (isNaN(guess)) {
        alert(`please enter a valid number`)
    }
    else if (guess < 1) {
        alert(`please enter a number more than one`)
    }
    else if (guess > 100) {
        alert(`please enter a number less than hundred`)
    }
    else {
        previousGuessesList.push(guess)
        if (guessNumber === 11) {
            displayGuess(guess)
            displayMessage(`game over. random number was ${randomNumber}`)
            endGame()
        }
        else {
            displayGuess(guess)
            checkGuess(guess)
        }
        
    }
}

//check the guess
function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`you guessed it right`)
        endGame()
    }
    else if (guess < randomNumber) {
        displayMessage(`your guess is tooo loowwww`)
    }
    else if (guess > randomNumber) {
        displayMessage(`your guess is tooo highhhhh`)
    }
}

//display guess and cleanup
function displayGuess(guess) {
    userInput.value = ''
    previousGuesses.innerHTML = `${guess}`
    guessNumber++
    remaining.innerHTML=`${11-guessNumber}`
}
//display message
function displayMessage(message) {
    lowOrHi.innerHTML=`<h2>${messsage}</h2>`
}
//end the game
function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">start new game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}
//new game
function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function (event) {
        randomNumber = parseInt(Math.random() * 100 + 1)
        previousGuessesList = []
        guessNumber = 1
        previousGuesses.innerHTML = ''
        remaining.innerHTML = `{11-guessNumber}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame=true
    })
    
}