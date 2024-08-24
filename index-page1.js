const gamePage = document.getElementById("game-page");
const hurrayPage = document.getElementById("hurray-page");

const gameButtons = document.getElementById("game-buttons");
const userScoreValue = document.getElementById("user-score");
const displayComputerScore = document.getElementById("computer-score");
const rulesbox = document.getElementById("rules-box");

const youWin = document.getElementById("you-win");
const pcWin = document.getElementById("pc-win");
const resultSection = document.getElementById("result-section");
const pcCircle = document.getElementById("pc-circle");
const userCircle = document.getElementById("user-circle");
const userPCTie = document.getElementById("user-pc-tie");
const nextButton = document.getElementById("next-button");

const stone = "stone";
const paper = "paper";
const scissors = "scissors";

const tie = "tie";
const won = "won";
const lost = "lost";

let computerScore = 0;
let userScore = 0;

function playGame(userChoice) {
  const computerChoice = randomPCChoice();
  console.log(computerChoice);

  const result = calculateOutcome(userChoice, computerChoice);
  console.log(result);
  updateScore(result);
}

function randomPCChoice() {
  var randomNumber = Math.floor(Math.random() * 10);

  if (randomNumber >= 0 && randomNumber <= 3) {
    return stone;
  } else if (randomNumber >= 4 && randomNumber <= 6) {
    return paper;
  } else {
    return scissors;
  }
}

function calculateOutcome(userChoice, computerChoice) {
  if (userChoice == stone) {
    if (computerChoice == stone) {
      return tie;
    } else if (computerChoice == paper) {
      return lost;
    } else {
      return won;
    }
  }

  if (userChoice == paper) {
    if (computerChoice == paper) {
      return tie;
    } else if (computerChoice == stone) {
      return won;
    } else {
      return lost;
    }
  }

  if (userChoice == scissors) {
    if (computerChoice == scissors) {
      return tie;
    } else if (computerChoice == paper) {
      return won;
    } else {
      return lost;
    }
  }
}

function updateScore(result) {
  if (result == won) {
    userScore += 1;
  } else if (result == lost) {
    computerScore += 1;
  }

  userScoreValue.innerHTML = userScore;
  displayComputerScore.innerHTML = computerScore;
  gameButtons.style.display = "none";
  resultSection.style.display = "block";

  if (result == won) {
    userCircle.style.display = "block";
    youWin.style.display = "block";
    nextButton.style.display = "block";
  } else if (result == lost) {
    pcCircle.style.display = "block";
    pcWin.style.display = "block";
  } else if (result == tie) {
    userPCTie.style.display = "block";
  }
}

function showRules() {
  rulesbox.style.display = "block";
}

function closeRules() {
  rulesbox.style.display = "none";
}

function displayGamePage() {}

function playAgain() {
  gameButtons.style.display = "block";
  userCircle.style.display = "none";
  youWin.style.display = "none";
  pcCircle.style.display = "none";
  userPCTie.style.display = "none";
  resultSection.style.display = "none";
  hurrayPage.style.display = "none";
  gamePage.style.display = "block";
  nextButton.style.display = "none";
}

function showHurrayPage() {
  hurrayPage.style.display = "block";
  gamePage.style.display = "none";
  nextButton.style.display = "none";
}
