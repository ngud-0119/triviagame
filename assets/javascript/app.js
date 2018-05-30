var timeRemaining = 120;
var answersRight;
var answersWrong;
var intervalId;

function pageLoad() {
    $("#full_game").hide();
    $(".total_score").hide();
    $("#start_button").on("click", gameStart);
    $("#time_remaining").html("Time Remaining: "+ timeRemaining + " seconds");
}

function gameStart(){
    $("#full_game").show();
    $("#start_button").hide();
    run();
}

function run(){
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    timeRemaining--;
    $("#time_remaining").html("Time Remaining: "+ timeRemaining + " seconds");
    if (timeRemaining === 0) {
      stop();
      $("#full_game").hide();
      $(".total_score").show();  
    }
  }

  function stop() {
    clearInterval(intervalId);
  }




Document.onload = pageLoad();
