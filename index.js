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

function getHumanChoice() {

    let choice = prompt("rock, paper, scissors: ")

    if (choice.toLowerCase() == "rock") {

        return "rock"

    }

    if (choice.toLowerCase() == "paper") {

        return "paper"

    }

    if (choice.toLowerCase() == "scissors") {

        return "scissors"

    }

}

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {

    if (humanChoice == computerChoice) {

        console.log("Tie")

    }

    if (humanChoice == "rock") {

        if (computerChoice == "paper") {

            console.log("You lose! paper beats rock")
            computerScore += 1

        }

        if (computerChoice == "scissors") {

            console.log("You win! rock beats scissors")
            humanScore += 1

        }

    }

    if (humanChoice == "paper") {

        if (computerChoice == "scissors") {

            console.log("You lose! scissors cuts paper")
            computerScore += 1

        }

        if (computerChoice == "rock") {

            console.log("You win! paper beats rock")
            humanScore += 1

        }

    }

    if (humanChoice == "scissors") {

        if (computerChoice == "rock") {

            console.log("You lose! rock beats scissors")
            computerScore += 1

        }

        if (computerChoice == "paper") {

            console.log("You win! scissors cuts paper")
            humanScore += 1

        }

    }

}

function playGame() {
    let humanSelection = getHumanChoice()
    let computerSelection = getComputerChoice()

    playRound(humanSelection, computerSelection)

    humanSelection = getHumanChoice()
    computerSelection = getComputerChoice()

    playRound(humanSelection, computerSelection)

    humanSelection = getHumanChoice()
    computerSelection = getComputerChoice()

    playRound(humanSelection, computerSelection)

    humanSelection = getHumanChoice()
    computerSelection = getComputerChoice()

    playRound(humanSelection, computerSelection)

    humanSelection = getHumanChoice()
    computerSelection = getComputerChoice()

    playRound(humanSelection, computerSelection)

    console.log("The computer won " + computerScore + " time(s), you won " + humanScore + " time(s), and you tied " + (5 - (computerScore + humanScore)) + " time(s)")
}

playGame()