// 1 = Rock 2 = Paper 3 = Scissors

function getComputerChoice () {
  let computerSelection = Math.floor(Math.random() * 3 + 1)
  // Here we generate a random number from 1 to 3, then:
  if (computerSelection === 1) {
    computerSelection = 'Rock';
  } else if (computerSelection === 2) {
    computerSelection = 'Paper';
  } else if (computerSelection === 3) {
    computerSelection = 'Scissors';
  }
  return computerSelection;
}

function playRound (playerSelection) { // This function does two things: 1. The logic 2. Display winner/loser/tie through console.log 
  let computer = getComputerChoice();
  getImages(playerSelection,computer);
  if (playerSelection === computer) {
    console.log('No one wins');
  } else if (playerSelection === 'Rock' && computer === 'Paper') {
    console.log('Paper beats Rock. Computer wins!');
  } else if (playerSelection === 'Paper' && computer === 'Rock') {
    console.log('Paper beats Rock. Player wins!');
  } else if (playerSelection === 'Paper' && computer === 'Scissors') {
    console.log('Scissors beats Paper. Computer wins!');
  } else if (playerSelection === 'Scissors' && computer === 'Paper') {
    console.log('Paper beats Scissors. Player wins!');
  } else if (playerSelection === 'Scissors' && computer === 'Rock') {
    console.log('Rock beats Scissors. Computer wins!');
  } else if (playerSelection === 'Rock' && computer === 'Scissors') {
    console.log('Rock beats Scissors. Player wins!');
  }
}

function getImages(playerSelection,computerSelection) {
//Player 
if(playerSelection = 'Rock') {
  let playerImage = document.querySelector(".playerImg");
  playerImage.setAttribute('src','./images/rock.png');
}
else if(playerSelection = 'Paper') {
  let playerImage = document.querySelector(".playerImg");
  playerImage.setAttribute('src','./images/paper.png');
}
if(playerSelection = 'Scissors') {
  let playerImage = document.querySelector(".playerImg");
  playerImage.setAttribute('src','./images/scissors.png');
}

//Computer
if(computerSelection = 'Rock') {
  let computerImage = document.querySelector(".computerImg");
  computerImage.setAttribute('src','./images/rock.png');
}
else if(computerSelection = 'Paper') {
  let computerImage = document.querySelector(".computerImg");
  computerImage.setAttribute('src','./images/paper.png');
}
if(playerSelection = 'Scissors') {
  let computerImage = document.querySelector(".ComputerImg");
  computerImage.setAttribute('src','./images/scissors.png');
}
}

