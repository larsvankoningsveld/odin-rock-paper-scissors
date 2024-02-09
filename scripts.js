//Get player selection
const playerSelection = prompt("Rock, paper, scissors, shoot!").toLowerCase()

//Get computer selection
const computerSelection = getComputerChoice()

function getComputerChoice(){
  const RANDOM_NUMBER = Math.random();
  console.log(RANDOM_NUMBER)
  if (RANDOM_NUMBER < 0.33) return "rock"
  else if (RANDOM_NUMBER >= 0.66) return "paper"
  else return "scissors"
}

//Compare and determine winner
function calcResult (){
  let result
  if (playerSelection === "rock") {
    if (computerSelection === "rock") result = "tie"
    else if (computerSelection === "paper") result = "loss"
    else result = "win"
  }
  if (playerSelection === "paper") {
    if (computerSelection === "rock") result = "win"
    else if (computerSelection === "paper") result = "tie"
    else result = "loss"
  }
  if (playerSelection === "scissors") {
    if (computerSelection === "rock") result = "loss"
    else if (computerSelection === "paper") result = "win"
    else result = "tie"
  }
  return result
}

//Print selections and win or loss message
console.log("computer selection: " + computerSelection)
console.log("player selection: " + playerSelection)
console.log(calcResult())
