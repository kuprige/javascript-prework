{
  const playGame = function (playerInput) {
    clearMessages();

    const randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log("Wylosowana liczba to: " + randomNumber);

    const getMoveName = function (randomNumber) {
      if (randomNumber == 1) {
        return "kamień";
      } else if (randomNumber == 2) {
        return "papier";
      } else if (randomNumber == 3) {
        return "nożyce";
      }
      return "Nieznany ruch";
    };
    const playerMove = getMoveName(playerInput);
    printMessage("Twój ruch to: " + playerMove);
    const computerMove = getMoveName(randomNumber);
    printMessage("Mój ruch to: " + computerMove);
    console.log("Gracz wpisał: " + playerInput);

    const displayResult = function (argComputerMove, argPlayerMove) {
      printMessage("Zagrałem " + argComputerMove + ", a Ty " + argPlayerMove);

      if (argComputerMove == "kamień" && argPlayerMove == "papier") {
        printMessage("Ty wygrywasz!");
      } else if (argComputerMove == "kamień" && argPlayerMove == "kamień") {
        printMessage("Remis!");
      } else if (argComputerMove == "papier" && argPlayerMove == "nożyce") {
        printMessage("Ty wygrywasz!");
      } else if (argComputerMove == "papier" && argPlayerMove == "papier") {
        printMessage("Remis!");
      } else if (argComputerMove == "nożyce" && argPlayerMove == "kamień") {
        printMessage("Ty wygrywasz!");
      } else if (argComputerMove == "nożyce" && argPlayerMove == "nożyce") {
        printMessage("Remis!");
      } else {
        printMessage("Tym razem przegrywasz :(");
      }
    };
    displayResult(computerMove, playerMove);
  };
  document.getElementById("play-rock").addEventListener("click", function () {
    playGame(1);
  });
  document.getElementById("play-paper").addEventListener("click", function () {
    playGame(2);
  });
  document
    .getElementById("play-scissors")
    .addEventListener("click", function () {
      playGame(3);
    });
}
