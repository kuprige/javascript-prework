function playGame() {
  clearMessages ();
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

 
document.getElementById('play-rock').addEventListener('click', function(){
  playGame (1);
});
document.getElementById('play-paper').addEventListener('click', function(){
  playGame (2);
});
document.getElementById('play-scissors').addEventListener('click', function(){
  playGame (3);
});