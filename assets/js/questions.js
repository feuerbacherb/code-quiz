// questions provided by w3schools.com/quiztest/quiztest.asp?qtest=JavaScript

var questions = [
   {
      title: "Inside which HTML element do we put the JavaScript?",
      answers: ["<scripting>", "<script>", "<javascript>", "<js>"],
      answer: "<script>"
   },
   {
      title: "What is the correct JavaScript syntax to<br>change the content of the following HTML element:<br><br><p id='demo'>This is a demonstration.</p>",
      answers: ["document.getElementByName('p').innerHTML = 'Hello World!';", "document.getElementById('demo').innerHTML = 'Hello World!';", "#demo.innerHTML = 'Hello World!';", "document.getElement('p').innerHTML = 'Hello World!';"],
      answer: "document.getElementById('demo').innerHTML = 'Hello World!';"
   },
   {
      title: "What is the correct syntax for referring to an external script called 'xxx.js'?",
      answers: ["<script src='xxx/js'>", "<script name='xxx.js'>", "<script href='xxx.js'>"],
      answer: "<script src='xxx/js'>"
   },
   {
      title: "Where is the correct place to insert a JavaScript?",
      answers: ["The <body> section", "The <head> section", "Both the <head> section and the <body> section are correct"],
      answer: "Both the <head> section and the <body> section are correct"
   },
   {
      title: "The external JavaScript file must contain the <script> tag.",
      answers: ["False", "True"],
      answer: "False"
   },
   {
      title: "How do your write 'Hello World' in an alert box?",
      answers: ["alert('Hello World');", "msgBox('Hello World');", "msg('Hello World');", "alertBox('Hello World');"],
      answer: "alert('Hello World');"
   },
   {
      title: "How do you create a function in JavaScript?",
      answers: ["function myFunction()", "function:myFunction()", "function = myFunction()"],
      answer: "function myFunction()"
   },
   {
      title: "What is the correct way to write an IF statement in JavaScript?",
      answers: ["if (i === 5)", "if i = 5 then", "if i === 5 then", "if i = 5"],
      answer: "if (i === 5)"
   },
   {
      title: "How do you write an IF statement for executing some code if 'i' is NOT equal to 5?",
      answers: ["if (i != 5)", "if i =! 5 then", "if i <> 5", "if (i <> 5)"],
      answer: "if (i != 5)"
   },
   {
      title: "How does a WHILE loop start?",
      answers: ["while (i <= 10; i++)", "while (i <= 10)", "while i = 1 to 10", "while (var i = 0; i <= 10; i++)"],
      answer: "while (i <= 10)"
   },
   {
      title: "How can you add a comment in JavaScript?",
      answers: ["//This is a comment", "'This is a comment", "<!--This is a comment-->"],
      answer: "//This is a comment"
   },
   {
      title: "What is the correct way to write a JavaScript array?",
      answers: ["var colors = ['red', 'green', 'blue']", "var colors = 'red', 'green', 'blue'", "var colors = (1:'red', 2:'green', 3:'blue')", "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')"],
      answer: "var colors = ['red', 'green', 'blue']"
   },
   {
      title: "How do you round the number 7.25, to the nearest integer?",
      answers: ["Math.round(7.25)", "Math.rnd(7.25)", "round(7.25)", "rnd(7.25)"],
      answer: "Math.round(7.25)"
   },
   {
      title: "How do you find the number with the highest value of x and y?",
      answers: ["ceil(x, y)", "Math.ceil(x, y)", "Math.max(x, y)", "top(x, y)"],
      answer: "Math.max(x, y)"
   },
   {
      title: "JavaScript is the same as Java.",
      answers: ["False", "True"],
      answer: "True"
   },
   {
      title: "How can you detect the client's browser name?",
      answers: ["browser.name", "client.navName", "navigator.appName"],
      answer: "navigator.appName"
   },
   {
      title: "Which event occurs when the user clicks on an HTML element?",
      answers: ["onclick", "onchange", "onmouseclick", "onmouseover"],
      answer: "onclick"
   },
   {
      title: "How do you declare a JavaScript variable?",
      answers: ["var carName", "variable carName", "v carName"],
      answer: "var carName"
   },
   {
      title: "Which operator is used to assign a value to a variable?",
      answers: ["=", "*", "-", "x"],
      answer: "="
   },
   {
      title: "What will the following code return?<br><br>Boolean(10>9)",
      answers: ["true", "NaN", "false"],
      answer: "true"
   },
   {
      title: "Is JavaScript case sensitive?",
      answers: ["Yes", "No"],
      answer: "Yes"
   }
]