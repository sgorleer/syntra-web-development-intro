const ANSWER_LENGTH = 5;
const ROUNDS = 6;
const letters = document.querySelectorAll(".scoreboard-letter");
const loadingDiv = document.querySelector(".info-bar");

async function init() {
  console.log("lets get started");
  let matchedLetters;
  let misMatchedLetters;
  let numberOfTries = 0;
  let currentGuess = "";
  let currentGuessArr = [];
  let isLoading = true;
  // the state for the app

  // nab the word of the day
  const wordFetched = await fetch("https://words.dev-apis.com/word-of-the-day");
  const res = await wordFetched.json();
  const word = await res.word;
  const wordArray = word.split("");
  console.log(word);
  console.log(wordArray);
  isLoading = false;
  setLoading(isLoading);

  // user adds a letter to the current guess
  function addLetter(letter) {
    if (currentGuess.length < 5) {
      currentGuess += letter;
      currentGuessArr = currentGuess.split("");
      console.log(currentGuess);
      console.log(currentGuessArr);
      letters[
        numberOfTries * ANSWER_LENGTH + currentGuess.length - 1
      ].innerText = letter;
    } else {
      return;
    }
  }

  // use tries to enter a guess
  async function commit() {
    currentGuessLower = currentGuess.toLowerCase();
    currentGuessArr = currentGuessLower.split("");
    console.log(currentGuessArr);
    if (currentGuessArr.length === 5) {
      numberOfTries += 1;
      currentGuess = "";
    } else {
      alert("First enter 5 letters in your row");
    }
    // const res = await fetch ("https://words.dev-apis.com/validate-word", {
    //   method: "POST",
    //   body: JSON.stringify({word: currentGuess});
    // });
    // const {validWord} = await res.json();
    // setLoading(false);
    // console.log(word, validWord);
    // if (validword === false) {
    //   markInvalidWord()
    //   return;
    // }

    console.log(currentGuessArr);
    console.log(wordArray);
    console.log(numberOfTries);
    const newA = positions(currentGuessArr, wordArray);
    console.log(newA);
    drawColors(newA, numberOfTries);
    // for (let i = 0; i < currentGuessArr.length; i++) {
    //   for (let j = 0; j < wordArray.length; j++) {
    //     let currentLetter = currentGuessArr[i];
    //     let wordLetter = wordArray[j];
    //     let currentLetterIndex = currentGuessArr.indexOf(currentLetter);
    //     let wordLetterIndex = wordArray.indexOf(wordLetter);
    //     console.log(currentLetter);
    //     console.log(`=> ${wordLetter}`);
    //     if (
    //       currentLetter.toLowerCase() === wordLetter &&
    //       currentLetterIndex === wordLetterIndex
    //     ) {
    //       console.log("EXACT");
    //       letters[numberOfTries * ANSWER_LENGTH + i - 1].classList.add(
    //         "correct"
    //       );
    //     }
    //   }
    //   console.log(`Number of loop ${i}`);
    // }
  }

  // user hits backspace, if the the length of the string is 0 then do
  // nothing
  function backspace() {
    currentGuess = currentGuess.slice(0, -1);
    letters[numberOfTries * ANSWER_LENGTH + currentGuess.length].innerText = "";
  }

  // let the user know that their guess wasn't a real word
  // skip this if you're not doing guess validation
  // function markInvalidWord() {}

  // listening for event keys and routing to the right function
  // we listen on keydown so we can catch Enter and Backspace
  document.addEventListener("keydown", function handleKeyPress(event) {
    const keyPressed = event.key;
    const validation = /^[A-Za-z]+$/;
    if (keyPressed === "Backspace") {
      backspace();
    } else if (
      keyPressed.split("").length === 1 &&
      keyPressed.match(validation)
    ) {
      addLetter(keyPressed);
    } else if (keyPressed === "Enter") {
      commit();
    }
  });
}

// a little function to check to see if a character is alphabet letter
// this uses regex (the /[a-zA-Z]/ part) but don't worry about it
// you can learn that later and don't need it too frequently
function isLetter(letter) {}

// show the loading spinner when needed
function setLoading(isLoading) {
  loadingDiv.classList.toggle("hidden", !isLoading);
}

// takes an array of letters (like ['E', 'L', 'I', 'T', 'E']) and creates
// an object out of it (like {E: 2, L: 1, T: 1}) so we can use that to
// make sure we get the correct amount of letters marked close instead
// of just wrong or correct
function makeMap(array) {
  return (
    array.reduce((acc, cv) => {
      if (acc[cv]) {
        acc[cv] = 0;
      } else {
        acc[cv]++;
      }
      return acc;
    }),
    {}
  );
}

init();

function positions(currentGuessArr, wordArray) {
  let newArray = currentGuessArr.map((letter, i) => {
    const index = wordArray.findIndex((item) => item === letter);
    if (index === -1) return "miss";
    if (index === i) return "exact";
    if (index > -1) return "near";
  });
  return newArray;
}

function drawColors(arr, numberOfTries) {
  arr.forEach((element, index) => {
    console.log(numberOfTries);
    if (element === "exact") {
      letters[(numberOfTries - 1) * ANSWER_LENGTH + index].classList.add(
        "correct"
      );
    } else if (element === "near") {
      letters[(numberOfTries - 1) * ANSWER_LENGTH + index].classList.add(
        "close"
      );
    } else {
      letters[(numberOfTries - 1) * ANSWER_LENGTH + index].classList.add(
        "wrong"
      );
    }
  });
  // for (let i = 0; i < scoreArray.length; i++) {
  //   console.log(scoreArray[i]);
  //   if (scoreArray[i] === "exact") {
  //     letters[numberOfTries * ANSWER_LENGTH + i - 1].classList.add("correct");
  //   }
  //   if (scoreArray[i] === "near") {
  //     letters[numberOfTries * ANSWER_LENGTH + i - 1].classList.add("close");
  //   }
  //   if (scoreArray[i] === "miss") {
  //     letters[numberOfTries * ANSWER_LENGTH + i - 1].classList.add("wrong");
  //   }
  // }
}

function markInvalidWord() {
  for (let i = 0; i < ANSWER_LENGTH; i++) {
    letters[numberOfTries * ANSWER_LENGTH + i].classList.remove("invalid");

    // long enough for the browser to repaint without the "invalid class" so we can then add it again
    setTimeout(
      () => letters[numberOfTries * ANSWER_LENGTH + i].classList.add("invalid"),
      10
    );
  }
}
