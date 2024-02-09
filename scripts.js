//Get player selection
const playerSelection = prompt("Rock, paper, scissors, shoot!")
//Get computer selection
const computerSelection = getComputerChoice()

function getComputerChoice(){
  const RANDOM_NUMBER = Math.random();
  console.log(RANDOM_NUMBER)
  if (RANDOM_NUMBER < 0.33) return "Rock"
  else if (RANDOM_NUMBER >= 0.66) return "Paper"
  else return "Scissors"
}

//Compare and determine winner

function calcResult (){
  let result
  if (playerSelection === "Rock") {
    if (computerSelection === "Rock") result = "tie"
    else if (computerSelection === "Paper") result = "loss"
    else result = "win"
  }
  if (playerSelection === "Paper") {
    if (computerSelection === "Rock") result = "win"
    else if (computerSelection === "Paper") result = "tie"
    else result = "loss"
  }
  if (playerSelection === "Scissors") {
    if (computerSelection === "Rock") result = "loss"
    else if (computerSelection === "Paper") result = "win"
    else result = "tie"
  }
  return result
}
//Print win or loss message

console.log("computer selection: " + computerSelection)
console.log("player selection: " + playerSelection)
console.log(calcResult())
