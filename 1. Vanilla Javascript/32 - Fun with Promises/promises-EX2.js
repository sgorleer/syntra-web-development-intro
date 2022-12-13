// recreating the same game with async await

// create a guess number function
async function guessNumber() {
  const userInput = parseInt(prompt("Choose a number between 0-6"));
  const randomNumber = Math.floor(Math.random() * 6 + 1);
}

// create a continue game function
function continueGame() {
  return new Promise((resolve, reject) => {
    const cont = confirm("Do you want to play again?");
    if (cont === true) {
      resolve();
    }
    if (cont !== true) {
      reject();
    }
  });
}
// create a game function

const game = async () => {
  const roundPlayed = await guessNumber();
  continueGame()
    .then(() => game())
    .catch(() => alert("You are done"));
};

game();
