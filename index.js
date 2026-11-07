const results = document.querySelector(".results h2") 
const score = document.querySelector(".score p")
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

let tie = 0
let humanScore = 0
let computerScore = 0

rockButton.addEventListener("click", (event) => {
    humanChoice = "rock"
    compChoice = getComputerChoice()

    if (humanChoice == compChoice) {
        tie += 1
        results.textContent = "Tie."
        score.textContent = "Score: " + humanScore + " wins, " + computerScore + " loses, " + tie + " ties."
    }

    if (compChoice == "paper") {
        computerScore += 1
        results.textContent = "You lost, paper beats rock."
        score.textContent = "Score: " + humanScore + " wins, " + computerScore + " loses, " + tie + " ties."
    }

    if (compChoice == "scissors") {
        humanScore += 1
        results.textContent = "You won, rock beats scissors!"
        score.textContent = "Score: " + humanScore + " wins, " + computerScore + " loses, " + tie + " ties."
    }

})

paperButton.addEventListener("click", (event) => {
    humanChoice = "paper"
    compChoice = getComputerChoice()

    if (humanChoice == compChoice) {
        tie += 1
        results.textContent = "Tie."
        score.textContent = "Score: " + humanScore + " wins, " + computerScore + " loses, " + tie + " ties."
    }

    if (compChoice == "scissors") {
        computerScore += 1
        results.textContent = "You lost, scissors cuts paper."
        score.textContent = "Score: " + humanScore + " wins, " + computerScore + " loses, " + tie + " ties."
    }

    if (compChoice == "rock") {
        humanScore += 1
        results.textContent = "You won, paper beats rock!"
        score.textContent = "Score: " + humanScore + " wins, " + computerScore + " loses, " + tie + " ties."
    }
})

scissorsButton.addEventListener("click", (event) => {
    humanChoice = "scissors"
    compChoice = getComputerChoice()

    if (humanChoice == compChoice) {
        tie += 1
        results.textContent = "Tie."
        score.textContent = "Score: " + humanScore + " wins, " + computerScore + " loses, " + tie + " ties."
    }

    if (compChoice == "rock") {
        computerScore += 1
        results.textContent = "You lost, rock beats scissors."
        score.textContent = "Score: " + humanScore + " wins, " + computerScore + " loses, " + tie + " ties."
    }

    if (compChoice == "paper") {
        humanScore += 1
        results.textContent = "You won, scissors cuts paper!"
        score.textContent = "Score: " + humanScore + " wins, " + computerScore + " loses, " + tie + " ties."
    }
})




