/*Tic Tac Toe Game

Business Logic Model
2 players play by clicking his/her sign, 3 signs will be together.

Steps: 
1) First player can click any box 
    1.1) First player gets 'X' sign
    1.2) X will be put in clicked square.
2) Clicked box can not be clicked again
3) Check if game is over
3.1) Check all boxes vertical, horizontal and diagonal boxes for last played person. If last sign is found next to each, that player wins the game.
3.2) If all boxes are clicked and 3.1 is not positive, there is draw.  Print there is draw and go to 7.
3.3) If it is over, print the winner to footer. 
3.4) If it is not over. return to 1
4) Second player can click any box 
    4.1) First player gets 'O' sign
    4.2) O will be put in clicked square.
5) Clicked box can not be used again.
6) Check if game is over.
6.1) Check all boxes vertical, horizontal and diagonal boxes for last played person. If last sign is found next to each, that player wins the game.
6.2) If all boxes are clicked and 6.1 is not positive, there is draw.  Print there is draw and go to 7.
6.3) If it is over, print the winner to footer. 
6.4) If it is not over. return to 1
7) Reset the game.

States
1) All boxes empty.
2) First player plays.
3) Second player plays.
4) First player wins.
5) Second player wins.
6) There is draw.
*/

// DO NOT USE JQuery If it is possible

const signX = "X";
const signO = "O";

let presentPlayer = signX;

function changePresentPlayer(presentPlayer) {
    if(presentPlayer == signX) {
        presentPlayer = signO;
    } else {
        presentPlayer = signX;
    }

    
}

function printSign(clickedSign) {

}

function checkClickedBox(clickedBox) {

}

function checkIfPresentPlayerWins(presentPlayer) {

}

function checkIfDraw() {

}

function resetGame() {

}

/*
All algorithm is defined in this function
*/

function main(clickedSpanLocation) {

    if (checkClickedBox(clickedSpanLocation)) {
        printSign(presentPlayer);

        if (checkIfDraw()) {
            // Print result
            resetGame();
        } else if (checkIfPresentPlayerWins()) {
            // Congratulations;
            // Print result
            resetGame();
        } else {
            changeNextPlayer(presentPlayer);
        }
        
    }

}


