// 1 = Rock 2 = Paper 3 = Scissors

function getComputerChoice() {
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
let playerScore = 0;
let computerScore = 0;
let bottomContainer = document.querySelector("body > div.bottomContainer");
let playerScoreText = document.querySelector("body > div.bottomContainer > div.playerScoreText");
let computerScoreText = document.querySelector("body > div.bottomContainer > div.computerScoreText");
function playRound(playerSelection) {
  // This function does two things: 1. The logic 2. Display winner/loser/tie through console.log
  let computer = getComputerChoice();
  let announcement = document.querySelector('.title');
  if (playerSelection === computer) {
    announcement.textContent = 'No one wins';
    getTie(playerSelection, computer);
  } else if (playerSelection === 'Rock' && computer === 'Paper') {
    announcement.textContent = "'Paper beats Rock. Computer wins!'"
    let playerImage = document.querySelector('.playerImg');
    playerImage.setAttribute('src', './images/rock.png');
    let computerImage = document.querySelector('.computerImg');
    computerImage.setAttribute('src', './images/paper.png');
    computerScore += 1;
    computerScoreText.innerText = `Score: ${computerScore}`;
  } else if (playerSelection === 'Paper' && computer === 'Rock') {
    announcement.textContent = 'Paper beats Rock. Player wins!'
    let playerImage = document.querySelector('.playerImg');
    playerImage.setAttribute('src', './images/paper.png');
    playerScore += 1;
    playerScoreText.innerText = `Score: ${playerScore}`;
    let computerImage = document.querySelector('.computerImg');
    computerImage.setAttribute('src', './images/rock.png');
  } else if (playerSelection === 'Paper' && computer === 'Scissors') {
    announcement.textContent = 'Scissors beats Paper. Computer wins!'
    let playerImage = document.querySelector('.playerImg');
    playerImage.setAttribute('src', './images/paper.png');
    let computerImage = document.querySelector('.computerImg');
    computerImage.setAttribute('src', './images/scissors.png');
    computerScore += 1;
    computerScoreText.innerText = `Score: ${computerScore}`;
  } else if (playerSelection === 'Scissors' && computer === 'Paper') {
    announcement.textContent = 'Paper beats Scissors. Player wins!'
    let playerImage = document.querySelector('.playerImg');
    playerImage.setAttribute('src', './images/scissors.png');
    playerScore += 1;
    playerScoreText.innerText = `Score: ${playerScore}`;
    let computerImage = document.querySelector('.computerImg');
    computerImage.setAttribute('src', './images/paper.png');
  } else if (playerSelection === 'Scissors' && computer === 'Rock') {
    announcement.textContent = 'Rock beats Scissors. Computer wins!'
    let playerImage = document.querySelector('.playerImg');
    playerImage.setAttribute('src', './images/scissors.png');
    let computerImage = document.querySelector('.computerImg');
    computerImage.setAttribute('src', './images/rock.png');
    computerScore += 1;
    computerScoreText.innerText = `Score: ${computerScore}`;
  } else if (playerSelection === 'Rock' && computer === 'Scissors') {
    announcement.textContent = 'Rock beats Scissors. Player wins!'
    let playerImage = document.querySelector('.playerImg');
    playerImage.setAttribute('src', './images/rock.png');
    let computerImage = document.querySelector('.computerImg');
    computerImage.setAttribute('src', './images/scissors.png');
    playerScore += 1;
    playerScoreText.innerText = `Score: ${playerScore}`;
  }
  callWinner();
}

function getTie(playerSelection, computerSelection) {
  if (playerSelection === 'Rock' && computerSelection === 'Rock') {
    let playerImage = document.querySelector('.playerImg');
    playerImage.setAttribute('src', './images/rock.png');
    let computerImage = document.querySelector('.computerImg');
    computerImage.setAttribute('src', './images/rock.png');
  } else if (playerSelection === 'Paper' && computerSelection === 'Paper') {
    let playerImage = document.querySelector('.playerImg');
    playerImage.setAttribute('src', './images/paper.png');
    let computerImage = document.querySelector('.computerImg');
    computerImage.setAttribute('src', './images/paper.png');
  } else if (playerSelection === 'Scissors' && computerSelection === 'Scissors') {
    let playerImage = document.querySelector('.playerImg');
    playerImage.setAttribute('src', './images/scissors.png');
    let computerImage = document.querySelector('.computerImg');
    computerImage.setAttribute('src', './images/scissors.png');
  }
}

function callWinner() {
  if (playerScore === 5) {
    playerScore = 0;
    computerScore = 0;
    playerScoreText.innerText = `Player wins!`;
    computerScoreText.innerText = ``;
 
  }
  else if(computerScore === 5) {
    playerScore = 0;
    computerScore = 0;
    computerScoreText.innerText = `Computer wins!`;
    playerScoreText.innerText = ``;
  }
}


let rockButton = document.querySelector("body > div.bottomContainer > div.buttons > button.rock");
rockButton.setAttribute('onclick', "playRound('Rock')");

let paperButton = document.querySelector("body > div.bottomContainer > div.buttons > button.paper");
paperButton.setAttribute('onclick', "playRound('Paper')");

let scissorsButton = document.querySelector("body > div.bottomContainer > div.buttons > button.scissors");
scissorsButton.setAttribute('onclick', "playRound('Scissors')");