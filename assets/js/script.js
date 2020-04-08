var pageContentE1 = document.querySelector("#page-content");
var docIntro = document.getElementById("intro");
var docQuestions = document.getElementById("questions");
var docFinishQuiz = document.getElementById("finish-quiz");
var docHighScores = document.getElementById("high-scores");



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
   }
}

pageContentE1.addEventListener("click", btnStartHandler);