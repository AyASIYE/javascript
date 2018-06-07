// Guess number 
function guessNumber() {
  let randomNumber = Math.floor((Math.random() * 10)+1);
  let playerGuess = Number(document.getElementById("number").value);
  let total = 0;

  for (; total < 4; total++) {
    if (playerGuess > randomNumber) {
      document.getElementById("result").innerHTML = "Too big, try again!";
    } else if (playerGuess < randomNumber) {
      document.getElementById("result").innerHTML = "Too small, try again!";

    } else {
      document.getElementById("result").innerHTML = "You won!";
      break;
    }
    if (total >= 4) {
      document.getElementById("result").innerHTML = "Game over!";
    }
  }
}