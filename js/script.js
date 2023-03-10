function playGame() {
  var playerMove = getMoveName(playerInput);
    testButton.addEventListener('click', buttonClicked);
    
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log("Wylosowana liczba to: " + randomNumber);
  
  function getMoveName(randomNumber) {
    if (randomNumber == 1) {
      return "kamień";
    } else if (randomNumber == 2) {
      return "papier";
    } else if (randomNumber == 3) {
      return "nożyce";
    }
    return "Nieznany ruch";
  }
  const computerMove = getMoveName(randomNumber);
  
  printMessage("Mój ruch to: " + computerMove);
  console.log("Gracz wpisał: " + playerInput);
  
  const playerMove = getMoveName(playerInput);
  printMessage("Twój ruch to: " + playerMove);
  
  function displayResult(argComputerMove, argPlayerMove) {
    printMessage("Zagrałem " + argComputerMove + ", a Ty " + argPlayerMove);
  
    if (argComputerMove == "kamień" && argPlayerMove == "papier") {
      printMessage("Ty wygrywasz!");
    } 
    else if (argComputerMove == "kamień" && argPlayerMove == "kamień") {
      printMessage("Remis!");
    }
    else if (argComputerMove == "papier" && argPlayerMove == "nożyce") {
      printMessage("Ty wygrywasz!");
    }
    else if (argComputerMove == "papier" && argPlayerMove == "papier") {
      printMessage("Remis!");
    }
    else if (argComputerMove == "nożyce" && argPlayerMove == "kamień") {
      printMessage("Ty wygrywasz!");
    } 
    else if (argComputerMove == "nożyce" && argPlayerMove == "nożyce") {
      printMessage("Remis!");
    }
    else {
      printMessage("Tym razem przegrywasz :(");
    }
  }
}

  playGame(3);
  displayResult(computerMove,playerMove);
  

 const pickRock = document.getElementById(ROCK);
 const pickPaper = document.getElementById(PAPER);
 const pickScissors = document.getElementById(SCISSORS);
  
 pickRock.addEventListener("click", function playGame () {
  playerMove(ROCK);
});

pickPaper.addEventListener("click", function playGame () {
  playerMove(PAPER);
});

pickScissors.addEventListener("click", function playGame () {
  playerMove(SCISSORS);
});
