const playerSelection = prompt("Rock, paper, scissors, shoot!")
const computerSelection = getComputerChoice()

function getComputerChoice(){
  const RANDOM_NUMBER = Math.random();
  console.log(RANDOM_NUMBER)
  if (RANDOM_NUMBER < 0.33) return "Rock"
  else if (RANDOM_NUMBER >= 0.66) return "Paper"
  else return "Scissors"
}

console.log("computer selection: " + computerSelection)
console.log("player selection: " + playerSelection)



