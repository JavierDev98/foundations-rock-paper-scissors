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
   let announcement = document.querySelector('.title');
   
  if (playerSelection === computer) {
    announcement.textContent = 'No one wins';
    getTie(playerSelection,computer);
  } else if (playerSelection === 'Rock' && computer === 'Paper') {
    announcement.textContent = "'Paper beats Rock. Computer wins!'";
    let playerImage = document.querySelector(".playerImg");
  playerImage.setAttribute('src','./images/rock.png');
  let computerImage = document.querySelector(".computerImg");
  computerImage.setAttribute('src','./images/paper.png');
  } else if (playerSelection === 'Paper' && computer === 'Rock') {
    announcement.textContent = 'Paper beats Rock. Player wins!';
    let playerImage = document.querySelector(".playerImg");
    playerImage.setAttribute('src','./images/paper.png'); 
    let computerImage = document.querySelector(".computerImg");
    computerImage.setAttribute('src','./images/rock.png');
  } else if (playerSelection === 'Paper' && computer === 'Scissors') {
    announcement.textContent = 'Scissors beats Paper. Computer wins!';
    let playerImage = document.querySelector(".playerImg");
    playerImage.setAttribute('src','./images/paper.png');
    let computerImage = document.querySelector(".computerImg");
    computerImage.setAttribute('src','./images/scissors.png');
  } else if (playerSelection === 'Scissors' && computer === 'Paper') {
    announcement.textContent = 'Paper beats Scissors. Player wins!';
    let playerImage = document.querySelector(".playerImg");
    playerImage.setAttribute('src','./images/scissors.png');
    let computerImage = document.querySelector(".computerImg");
    computerImage.setAttribute('src','./images/paper.png');
  } else if (playerSelection === 'Scissors' && computer === 'Rock') {
    announcement.textContent = 'Rock beats Scissors. Computer wins!';
    let playerImage = document.querySelector(".playerImg");
    playerImage.setAttribute('src','./images/scissors.png');
    let computerImage = document.querySelector(".computerImg");
    computerImage.setAttribute('src','./images/rock.png');
  } else if (playerSelection === 'Rock' && computer === 'Scissors') {
    announcement.textContent = 'Rock beats Scissors. Player wins!';
    let playerImage = document.querySelector(".playerImg");
    playerImage.setAttribute('src','./images/rock.png');
    let computerImage = document.querySelector(".computerImg");
    computerImage.setAttribute('src','./images/scissors.png');
  }
}

function getTie(playerSelection,computerSelection) {
  if(playerSelection === 'Rock' && computerSelection === 'Rock'){
    let playerImage = document.querySelector(".playerImg");
    playerImage.setAttribute('src','./images/rock.png');
    let computerImage = document.querySelector(".computerImg");
    computerImage.setAttribute('src','./images/rock.png');
  }
 else if(playerSelection === 'Paper' && computerSelection === 'Paper'){
  let playerImage = document.querySelector(".playerImg");
  playerImage.setAttribute('src','./images/paper.png');
  let computerImage = document.querySelector(".computerImg");
  computerImage.setAttribute('src','./images/paper.png'); 
  }
 else  if(playerSelection === 'Scissors' && computerSelection === 'Scissors'){
  let playerImage = document.querySelector(".playerImg");
  playerImage.setAttribute('src','./images/scissors.png');
  let computerImage = document.querySelector(".computerImg");
  computerImage.setAttribute('src','./images/scissors.png');
  }
}


