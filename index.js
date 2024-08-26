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

const userChoiceImg = document.getElementById("user-choice");
const pcChoiceImg = document.getElementById("pc-choice");

const userChoiceButton = document.getElementById("user-choice-button");
const pcChoiceButton = document.getElementById("pc-choice-button");

const stone = "stone";
const paper = "paper";
const scissors = "scissors";

const tie = "tie";
const won = "won";
const lost = "lost";

let computerScore = Number(localStorage.getItem("computerScore"));
let userScore = Number(localStorage.getItem("userScore"));

userScoreValue.innerHTML = userScore;
displayComputerScore.innerHTML = computerScore;

function playGame(userChoice) {
  const computerChoice = randomPCChoice();
  const result = calculateOutcome(userChoice, computerChoice);
  updateScore(result);
  updateUI(userChoice, computerChoice, result);
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

function getBorderColor(choice) {
  if (choice == stone) {
    return "#0074b6";
  } else if (choice == paper) {
    return "#ffa943";
  } else {
    return "#bd00ff";
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
  localStorage.setItem("userScore", userScore);
  localStorage.setItem("computerScore", computerScore);
}

function updateUI(userChoice, computerChoice, result) {
  userChoiceImg.src = userChoice + ".png";
  pcChoiceImg.src = computerChoice + ".png";

  userChoiceButton.style.borderColor = getBorderColor(userChoice);
  pcChoiceButton.style.borderColor = getBorderColor(computerChoice);

  userScoreValue.innerHTML = userScore;
  displayComputerScore.innerHTML = computerScore;

  gameButtons.style.display = "none";
  resultSection.style.display = "flex";

  if (result == won) {
    userCircle.style.display = "flex";
    youWin.style.display = "flex";
    nextButton.style.display = "flex";
  } else if (result == lost) {
    pcCircle.style.display = "flex";
    pcWin.style.display = "flex";
  } else if (result == tie) {
    userPCTie.style.display = "flex";
  }
}

function showRules() {
  rulesbox.style.display = "flex";
}

function closeRules() {
  rulesbox.style.display = "none";
}

function playAgain() {
  gameButtons.style.display = "flex";
  userCircle.style.display = "none";
  youWin.style.display = "none";
  pcCircle.style.display = "none";
  pcWin.style.display = "none";
  userPCTie.style.display = "none";
  resultSection.style.display = "none";
  hurrayPage.style.display = "none";
  gamePage.style.display = "flex";
  nextButton.style.display = "none";
}

function showHurrayPage() {
  hurrayPage.style.display = "flex";
  gamePage.style.display = "none";
  nextButton.style.display = "none";
}
