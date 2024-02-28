function playGame(){
  let roundsWon = 0;
  let roundsLost = 0;
  let totalRounds = 0;
  
  for (let i = 1; i <= 5; i++) playRound()
  
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
  
  return roundsArray = [roundsWon, roundsLost, totalRounds];

}

let totalRoundsWon = playGame()

console.log(" ")
console.log("-------------------")
console.log("The game has ended!")
console.log("-------------------")
console.log(" ")

console.log("You have won " + roundsArray[0] + " out of " + roundsArray[2] + " rounds, and your opponent won " + roundsArray[1])

if (roundsArray[0] < roundsArray[1]) console.log("That means you lost. Better luck next time!")
else if (roundsArray[0] == roundsArray[1]) console.log("The game is a tie. Try a again!")
else console.log("You won! Nice job!")




