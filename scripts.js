let roundsWon = 0;
let roundsLost = 0;
let totalRounds = 0;

const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');

btnRock.addEventListener('click', playRound);
btnPaper.addEventListener('click', playRound)
btnScissors.addEventListener('click', playRound)

function playRound(){
  const playerSelection = prompt("Rock, paper, scissors, shoot!").toLowerCase()
  const computerSelection = getComputerChoice()

  totalRounds += 1
  function getComputerChoice(){
    const RANDOM_NUMBER = Math.random();
    if (RANDOM_NUMBER < 0.33) return "rock"
    else if (RANDOM_NUMBER >= 0.66) return "paper"
    else return "scissors"
  }

  //Print selections and win or loss message
  console.log(" ")
  console.log("Round: " + totalRounds)
  console.log("You chose: " + playerSelection)
  console.log("Your opponent chose: " + computerSelection)

  //Compare and determine winner
  function calcResult (){
    let res
    if (playerSelection === "rock") {
      if (computerSelection === "rock") res = "tie"
      else if (computerSelection === "paper") res = "loss"
      else res = "win"
    }
    if (playerSelection === "paper") {
      if (computerSelection === "rock") res = "win"
      else if (computerSelection === "paper") res = "tie"
      else res = "loss"
    }
    if (playerSelection === "scissors") {
      if (computerSelection === "rock") res = "loss"
      else if (computerSelection === "paper") res = "win"
      else res = "tie"
    }
    return res
  }
  let result = calcResult();
  
  if (result === "win"){
    roundsWon += 1 
    console.log("You win!")
  } 
  else if (result === "tie"){
    console.log("It's a tie.")
  }
  else {
    roundsLost += 1
    console.log ("You lose.")
  }
}
