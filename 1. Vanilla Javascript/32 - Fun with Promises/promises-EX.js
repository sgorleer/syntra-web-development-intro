let userScore = 0;

function enterNumber() {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 6 + 1);
    const userInput = parseInt(prompt("Enter a number between 0 and 6"));
    console.log(randomNumber);
    console.log(userInput);
    if (userInput === randomNumber) {
      userScore = userScore + 1;
    }
    if (userInput !== randomNumber) {
      userScore = userScore + 0;
    }
    resolve();
  });
}

function continueGame() {
  return new Promise((resolve, reject) => {
    const cont = confirm(
      `Your score is ${userScore}. Do you want to play again?`
    );
    if (cont) {
      resolve();
    } else {
      reject();
    }
  });
}

function game() {
  enterNumber()
    .then(() => continueGame())
    .then(() => game())
    .catch(() => alert("You are done"));
}

game();
