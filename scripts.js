function playGame(){
  let roundsWon = 0;
  for (let i = 1; i <= 5; i++){
    const playerSelection = prompt("Rock, paper, scissors, shoot!").toLowerCase()
    const computerSelection = getComputerChoice()

    function getComputerChoice(){
      const RANDOM_NUMBER = Math.random();
      if (RANDOM_NUMBER < 0.33) return "rock"
      else if (RANDOM_NUMBER >= 0.66) return "paper"
      else return "scissors"
    }

    //Print selections and win or loss message
    console.log("computer selection: " + computerSelection)
    console.log("player selection: " + playerSelection)

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
    if (result === "win") roundsWon += 1
  }
    return roundsWon
}

let totalRoundsWon = playGame()

console.log("You have won " + totalRoundsWon + " rounds.")




