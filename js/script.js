console.log("Wylosowana liczba to: " + randomNumber);

function getMoveName(randomNumber) {
  if (randomNumber == 1) {
    return "kamień";
  } else if (randomNumber == 2) {
    return "papier";
  } else randomNumber == 3;
  {
    return "nożyce";
  }
}

let computerMove = getMoveName(randomNumber);

/*if (randomNumber == 1) {
  computerMove = "kamień";
} else if (randomNumber == 2) {
  computerMove = "pamier";
} else (randomNumber == 3) {
  computerMove = "nożyce";
}*/
printMessage("Mój ruch to: " + computerMove);

let playerInput = prompt("Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.");

console.log("Gracz wpisał: " + playerInput);

let playerMove = getMoveName(randomNumber);

/*if (playerInput == "1") {
  playerMove = "kamień";
} else if (playerInput == "2") {
  playerMove = "papier";
} else (playerInput == "3") {
  playerMove = "nożyce";
}*/

printMessage("Twój ruch to: " + playerMove);
console.log("moves:", argComputerMove, argPlayerMove);

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
