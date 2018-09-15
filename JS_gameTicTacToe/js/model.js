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

// DO NOT USE JQuery in the model If it is possible

const signX = "X";
const signO = "O";

// Two important variables for our model.
let activeSign = signX;
let gameArea = [
    [, , ],
    [, , ],
    [, , ]
];

/*
gameArea[0] [1] = 5;
gameArea[2] [1] = 3;
gameArea[0] [2] = 2;

*/

/* This function is called by controller.
 * It changes active sign in the model.
 */

function changeSign(clickedSign) {
    if (clickedSign == signX) {
        activeSign = signO;
    } else {
        activeSign = signX;
    }
}

function putSign(row, col, requestedSign) {
    gameArea[row][col] = requestedSign;
}

/**
 * This function check all matrix if 3 signs repeats horizontally, diagonally and vertically
 * @param {*} clickedSign
 */
function checkIfActiveSignWins(clickedSign) {
    // Check horizontal line of matrix
    for (let row = 0; row < gameArea.length; row++) {
        if (gameArea[row][0] == clickedSign &&
            gameArea[row][1] == clickedSign &&
            gameArea[row][2] == clickedSign) {
            return true;
        }
    }
    // Check vertical line of matrix
    for (let col = 0; col < gameArea.length; col++) {
        if (gameArea[0][col] == clickedSign &&
            gameArea[1][col] == clickedSign &&
            gameArea[2][col] == clickedSign) {
            return true;
        }
    }
    // Check diagonal line of matrix left to right
    if (gameArea[0][0] == clickedSign && gameArea[1][1] == clickedSign && gameArea[2][2] == clickedSign) {
        return true;
    }
    // Check diagonal line of matrix right to left
    if (gameArea[0][2] == clickedSign && gameArea[1][1] == clickedSign && gameArea[2][0] == clickedSign) {
        return true;
    }
    return false;
}

/**
 * Checks all matrix if there is a unclicked point.
 * If there is a place, returns false, it means 
 * there can't be a draw.
 */

function checkIfDraw() {

    for (row = 0; row < gameArea.length; row++) {
        for (col = 0; col < gameArea.length; col++) {
            if (gameArea[row][col] == undefined) {
                return false;
            }
        }
    }
    return true;
}

function clickedBoxCanBeUsed(row, col) {
    if (gameArea[row][col] == undefined) {
        return true;
    }
    return false;
}

function resetGame() {
    activeSign = signX;
    gameArea = [
        [, , ],
        [, , ],
        [, , ]
    ];

}