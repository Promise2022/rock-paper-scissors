const plays = ["Rock", "Paper", "Scissors"]
let playerSelection = "Rock"
let computerSelection = computerPlay()

function computerPlay() {
    let randomIndex = Math.floor(Math.random() * 3 )
    return plays[randomIndex]
}

function playRound(playerSelection, computerSelection) {
    console.log(playerSelection)
    console.log(computerSelection)

    if (playerSelection === "Rock" && computerSelection === "Paper") {
        return "You Lose! Paper beats Rock"
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "You win! Rock beats Scissors"
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "You win! Paper beats rock"
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return "You lose! Scissors beat Paper"
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return "You Lose! Rock beats Scissors"
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "You Win! Scissors beat Paper"
    } else {
        return "It's a Tie game!"
    }
}

console.log(playRound(playerSelection, computerSelection))


