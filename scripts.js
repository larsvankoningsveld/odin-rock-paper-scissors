function getComputerChoice(){
  const RANDOM_NUMBER = Math.random();
  if (RANDOM_NUMBER < 0,33) return "Rock"
  else if (RANDOM_NUMBER >= 0,66) return "Paper"
  else return "Scissors"
}

console.log(getComputerChoice())
