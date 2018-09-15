/**
 * UI Logic (Controller)
 */

function putSignToDOM(row, col, requestedsign) {
    $("#" + row + "_" + col).html(requestedsign);
}

/**
 * Function reset game()
 */
function refreshScreen() {
    $('#game-area span').html("");
}

$(document).ready(function () {

    $('#game-area span').on('click', function () {
        let clickedBoxID = this.attr("id"); // "0_1"
        let parts = clickedBoxID.split("_"); // "0_1" --> ["0", "1"]
        main(+parts[0], +parts[1]);
    });
})



/**
 * All algorithm is defined in this function
 */

function main(row, col) {

    if (clickedBoxCanBeUsed(row, col)) {
        putSign(row, col, activeSign);
        putSignToDOM(row, col, activeSign)

        if (checkIfActiveSignWins(activeSign)) {
            alert(activeSign + "wins!")
            resetGame();
            refreshScreen();

        } else if (checkIfDraw()) {
            alert("There is draw!")
            resetGame();
            refreshScreen();
        } else {
            changeSign(activeSign);
        }
    }
}