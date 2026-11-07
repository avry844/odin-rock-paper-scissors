const results = document.querySelector(".results h1") 
const rockButton = document.querySelector('#rock')
const paperButton = document.querySelector('#paper')
const scissorsButton = document.querySelector('#scissors')

function getComputerChoice() {

    r = Math.random()
    if (r > 0.66) {
        return "scissors"
    }

    if (r > 0.33) {
        return "paper"
    }

    else {
        return "rock"
    }

}

let compChoice = ""
let humanChoice = ""

let humanScore = 0
let computerScore = 0

rockButton.addEventListener("click", (event) => {
    humanChoice = "rock"
    compChoice = getComputerChoice()

    if (humanChoice == compChoice) {
        results.textContent = "Tie."
    }

    if (compChoice == "paper") {
        results.textContent = "You lost, paper beats rock."
    }

    if (compChoice == "scissors") {
        results.textContent = "You won, rock beats scissors!"
    }

})

paperButton.addEventListener("click", (event) => {
    humanChoice = "paper"
    compChoice = getComputerChoice()

    if (humanChoice == compChoice) {
        results.textContent = "Tie."
    }

    if (compChoice == "scissors") {
        results.textContent = "You lost, scissors cuts paper."
    }

    if (compChoice == "rock") {
        results.textContent = "You won, paper beats rock!"
    }
})

scissorsButton.addEventListener("click", (event) => {
    humanChoice = "scissors"
    compChoice = getComputerChoice()

    if (humanChoice == compChoice) {
        results.textContent = "Tie."
    }

    if (compChoice == "rock") {
        results.textContent = "You lost, rock beats scissors."
    }

    if (compChoice == "paper") {
        results.textContent = "You won, scissors cuts paper!"
    }
})




