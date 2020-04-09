var pageContentE1 = document.querySelector("#page-content");
var docIntro = document.getElementById("intro");
var docQuestions = document.getElementById("questions");
var docFinishQuiz = document.getElementById("finish-quiz");
var docHighScores = document.getElementById("high-scores");
var timer = document.getElementById("timer");
var maxSeconds = 45;


var setTime = function() {
   var timerInterval = setInterval(function() {
      maxSeconds--;
      timer.textContent = "Timer: " + maxSeconds;

      if (maxSeconds === 0) {
         clearInterval(timerInterval);
         alert("You ran out of time!");

      } 
   }, 1000)
}



var btnStartHandler = function(event) {
   console.log(event.target);
   var targetE1 = event.target;

   // if "Start Quiz" was clicked then display questions, start the clock, and remove the other elements
   if (targetE1.matches(".start-quiz")) {
      console.log("Start Quiz was pressed and code is functional.");
      if (docIntro.style.display === null || docIntro.style.display === "none") {
         docIntro.style.display = "block";
      } else {
         docIntro.style.display = "none";
         docQuestions.style.display = "";
         docFinishQuiz.style.display = "none";
         docHighScores.style.display = "none";
      }
      setTime();
   }
}

pageContentE1.addEventListener("click", btnStartHandler);