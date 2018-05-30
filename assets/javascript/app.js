var timeRemaining = 120;
var answersRight;
var answersWrong;

function pageLoad() {
    $("#full_game").hide();
    $("#start_button").on("click", gameStart);
    $("#time_remaining").html("Time Remaining: "+ timeRemaining);
}

function gameStart(){
    $("#full_game").show();
    $("#start_button").hide();
}




Document.onload = pageLoad();
