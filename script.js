const plays = ["Rock", "Paper", "Scissors"]

function computerPlay() {
let randomIndex = Math.floor(Math.random() * 3 )
return plays[randomIndex]
}

console.log(computerPlay())
