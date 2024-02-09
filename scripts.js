function playGame(){
  let roundsWon = 0;
  let totalRounds = 1;
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
      console.log("You won!")
    } 
    else console.log("You lost.")
    console.log("                   ")
    totalRounds += 1
  }
    return roundsWon
}

let totalRoundsWon = playGame()

console.log("                   ")
console.log("-------------------")
console.log("The game has ended!")
console.log("-------------------")
console.log("                   ")
console.log("You have won " + totalRoundsWon + " out of 5 rounds.")
if (totalRoundsWon < 3) console.log("That means you lost. Better luck next time!")
else console.log("You won! Nice job!")




