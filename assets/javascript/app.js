var timeRemaining = 120;
var answersRight = 0;
var answersWrong = 0;
var intervalId;

function pageLoad() {
    $("#full_game").hide();
    $("#start_button").on("click", gameStart);
    $("#time_remaining").html("Time Remaining: "+ timeRemaining + " seconds");
    
}

function gameStart(){
    $("#full_game").show();
    $("#start_button").hide();
    run();
    checkAnswers();
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
      endGame();
    }
  }

  function stop() {
    clearInterval(intervalId);
  }

  function endGame(){
    $("#full_game").hide();
    $(".total_score").show(); 
  }

  function checkAnswers(){

    $('.rightAns').click(function() {
        answersRight++;
        $("#guessedRight").html("Correct answers: " + answersRight);
     });

    $('.wrongAns').click(function() {
    answersWrong++;
    $("#guessedWrong").html("Incorrect answers: " + answersWrong);
    });
  }

Document.onload = pageLoad();

