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

console.log(getComputerChoice())