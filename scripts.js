const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');
const results = document.querySelector('#results')

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
  const playerLog = document.createElement('p');
  playerLog.textContent = `You chose: ${playerSelection}`;
  results.appendChild(playerLog);
  
  const computerLog = document.createElement('p');
  computerLog.textContent = `They chose: ${computerSelection}`;
  results.appendChild(computerLog);

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

  const resultLog = document.createElement('p');

  
  if (result === "win"){
    resultLog.textContent = 'You win!'
  } 
  else if (result === "tie"){
    resultLog.textContent = "It's a tie."
  }
  else {
    resultLog.textContent = "You lose..."
  }
  results.appendChild(resultLog)

}
