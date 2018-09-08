/*
* UI Logic (Controller)
*/

$(document).ready(function() {

$('#game-area span').on('click', function () {
    changePresentPlayer(presentPlayer);
    console.log('Present Player: ', presentPlayer);
    let clickedSpanLocation = $(this).attr("id");
    main(clickedSpanLocation);

});

});