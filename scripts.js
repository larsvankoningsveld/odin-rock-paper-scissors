const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');

btnRock.addEventListener('click', chooseRock);
btnPaper.addEventListener('click', choosePaper);
btnScissors.addEventListener('click', chooseScissors);

function chooseRock(){
  playRound('rock');
}

function choosePaper(){
  playRound('paper');
}

function chooseScissors(){
  playRound('scissors');
}

function playRound(playerSelection){
  const computerSelection = getComputerChoice()

  function getComputerChoice(){
    const RANDOM_NUMBER = Math.random();
    if (RANDOM_NUMBER < 0.33) return "rock"
    else if (RANDOM_NUMBER >= 0.66) return "paper"
    else return "scissors"
  }

  //Print selections and win or loss message
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
    console.log("You win!")
  } 
  else if (result === "tie"){
    console.log("It's a tie.")
  }
  else {
    console.log ("You lose.")
  }
  console.log(" ")
}
