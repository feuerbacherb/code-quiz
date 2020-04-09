var pageContentE1 = document.querySelector("#page-content");
var docIntro = document.getElementById("intro");
var docQuestions = document.getElementById("questions");
var docFinishQuiz = document.getElementById("finish-quiz");
var docHighScores = document.getElementById("high-scores");
var arrQuestions = [];
var timer = document.getElementById("timer");
var maxSeconds = 45;
var answerStage = document.getElementById("answer-stage");
var theQuestion = document.getElementById("question");
var btnAnswer0 = document.getElementById("answer0");
var btnAnswer1 = document.getElementById("answer1");
var btnAnswer2 = document.getElementById("answer2");
var btnAnswer3 = document.getElementById("answer3");
var theAnswer = "";
var numRight = 0;
var numWrong = 0;
var finalScore = document.getElementById("final-score");


var setTime = function() {
   var timerInterval = setInterval(function() {
      maxSeconds--;


      if (maxSeconds <= 0) {
         clearInterval(timerInterval);
         alert("You ran out of time!");
         var total = numRight + numWrong;

         timer.textContent = "Timer: 0";
         finalScore.innerHTML = "Your answered " + numRight + " questions correctly<br>out of the " + total + " questions attempted."
         showScore();
      } 
      else {
         timer.textContent = "Timer: " + maxSeconds;
      }
   }, 1000)
}



var btnHandler = function(event) {
   console.log(event.target);
   var targetE1 = event.target;

   // if "Start Quiz" was clicked then display questions, start the clock, and remove the other elements
   if (targetE1.matches(".start-quiz")) {
      arrQuestions = questions;
//    console.log("Start Quiz was pressed and code is functional.");
      if (docIntro.style.display === null || docIntro.style.display === "none") {
         docIntro.style.display = "block";
      } else {
         showQuestions();
         timer.style.display = "";
         setTime();
         getQuestions();
      }
   } 
   else if (targetE1.matches(".answer")) 
   {
      console.log(targetE1.innerHTML);
      if (targetE1.innerHTML === theAnswer) {
         numRight++;
         alert("Correct!");
         getQuestions();
      } else {
         numWrong++;
         maxSeconds-=10;
         if (maxSeconds<=0) {
            timer.innerHTML = "Timer: 0";
         } else {
            alert("Wrong!  10 seconds have been taken off the clock");
            getQuestions();
         }
      }
      
   }
}

var showQuestions = function() {
   docIntro.style.display = "none";
   docQuestions.style.display = "";
   docFinishQuiz.style.display = "none";
   docHighScores.style.display = "none";
}

var showScore = function() {
   docIntro.style.display = "none";
   docQuestions.style.display = "none";
   docFinishQuiz.style.display = "block";
   docHighScores.style.display = "none";
}

// create function that will loop through the questions in a random order, will remove the ones attempted
// and continue to loop until either the time is up or the last question has been answered.
var getQuestions = function() {
// console.log(questions.length);
   btnAnswer1.style.display = "none";
   btnAnswer2.style.display = "none";
   btnAnswer3.style.display = "none";
   btnAnswer0.style.display = "none";

   var objID = 0;
   objID = Math.floor(Math.random() * arrQuestions.length);
   console.log(objID);

   var objQuestion = arrQuestions[objID];

   theQuestion.innerHTML = objQuestion.title;
   theAnswer = objQuestion.answer;
   for (var i = 0; i < objQuestion.answers.length; i++) {
      var btn = document.getElementById("answer" + i);
//    console.log(btn);
      btn.textContent = objQuestion.answers[i];
      btn.style.display = "block";
      btn.style.margin = "5px";
   }

   console.log(arrQuestions.length);
   arrQuestions.splice(objID,1);
   console.log(arrQuestions.length);
   arrQuestions.length;
}

pageContentE1.addEventListener("click", btnHandler);