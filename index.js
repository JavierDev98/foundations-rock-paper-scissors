// 1 = Rock 2 = Paper 3 = Scissors

function getComputerChoice () {
  let computerSelection = Math.floor(Math.random() * 3 + 1)
  if (computerSelection === 1) {
    computerSelection = 'Rock'
  } else if (computerSelection === 2) {
    computerSelection = 'Paper'
  } else if (computerSelection === 3) {
    computerSelection = 'Scissors'
  }
  return computerSelection
}

function playRound (playerSelection) {
  let computer = getComputerChoice();
  if (playerSelection === computer) {
    console.log('No one wins')
  } else if (playerSelection === 'Rock' && computer === 'Paper') {
    console.log('Paper beats Rock. Computer wins!')
  } else if (playerSelection === 'Paper' && computer === 'Rock') {
    console.log('Paper beats Rock. Player wins!')
  } else if (playerSelection === 'Paper' && computer === 'Scissors') {
    console.log('Scissors beats Paper. Computer wins!')
  } else if (playerSelection === 'Scissors' && computer === 'Paper') {
    console.log('Paper beats Scissors. Player wins!')
  } else if (playerSelection === 'Scissors' && computer === 'Rock') {
    console.log('Rock beats Scissors. Computer wins!')
  } else if (playerSelection === 'Rock' && computer === 'Scissors') {
    console.log('Rock beats Scissors. Player wins!')
  }
}

function game() {
    for(let i=1; i <= 5; i++) {
      playRound("Paper");
    }
}

game();