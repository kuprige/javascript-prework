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

const playerInput = prompt("Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.");

console.log("Gracz wpisał: " + playerInput);

const playerMove = getMoveName(randomNumber);
printMessage("Twój ruch to: " + playerMove);

function displayResult(argComputerMove, argPlayerMove) {
  printMessage("Zagrałem " + argComputerMove + ", a Ty " + argPlayerMove);

  if (argComputerMove == "kamień" && argPlayerMove == "papier") {
    printMessage("Ty wygrywasz!");
  } else {
    printMessage("Tym razem przegrywasz :(");
  }
  if (argComputerMove == "kamień" && argPlayerMove == "kamień") {
    printMessage("Remis!");
  }
  if (argComputerMove == "papier" && argPlayerMove == "nożyce") {
    printMessage("Ty wygrywasz!");
  } else {
    printMessage("Tym razem przegrywasz :(");
  }
  if (argComputerMove == "papier" && argPlayerMove == "papier") {
    printMessage("Remis!");
  }
  if (argComputerMove == "nożyce" && argPlayerMove == "kamień") {
    printMessage("Ty wygrywasz!");
  } else {
    printMessage("Tym razem przegrywasz :(");
  }
  if (argComputerMove == "nożyce" && argPlayerMove == "nożyce") {
    printMessage("Remis!");
  }
}

displayResult(computerMove,playerMove);
