var secondsRemaining= 60;
var answersRight = 0;
var answersWrong = 0;
var unanswered = 0;
var intervalId;
function pageLoad() {
    $("#full_game").hide();
    $(".total_score").hide();
    $("#start_button").on("click", gameStart);  
}
function gameStart(){
    $("#full_game").show();
    $("#start_button").hide();
    $("#time_remaining").html("Time Remaining: "+ secondsRemaining + " seconds");   
    run();
}
function run(){
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}
function decrement() {
    secondsRemaining--;
    $("#time_remaining").html("Time Remaining: "+ secondsRemaining + " seconds");   
    
    if (secondsRemaining === 0) {
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
    var Q1 = $('input:radio[name="q1"]:checked').val();
		var Q2 = $('input:radio[name="q2"]:checked').val();
		var Q3 = $('input:radio[name="q3"]:checked').val();
		var Q4 = $('input:radio[name="q4"]:checked').val();
		var Q5 = $('input:radio[name="q5"]:checked').val();
    var Q6 = $('input:radio[name="q6"]:checked').val();
    var Q7 = $('input:radio[name="q7"]:checked').val();

    function checkAnswers(questionName, answer){
      if(questionName === undefined){
        unanswered++;
      }
      else if(questionName ===
         answer){
        answersRight++;
      }
      else{
        answersWrong++;
      }
    }
    checkAnswers(Q1, "1930");
    checkAnswers(Q2, "Gary Lineker");
    checkAnswers(Q3, "Germany");
    checkAnswers(Q4, "Andres Escobar");
    checkAnswers(Q5, "False");
    checkAnswers(Q6, "6");
    checkAnswers(Q7, "Brazil");    
    $("#guessedRight").html("Right Guesses: " + answersRight);
    $("#guessedWrong").html("Wrong Guesses: " + answersWrong);
    $("#unanswered").html("Unanswered: " + unanswered);
    $(".total_score").show();   
  }
Document.onload = pageLoad();

