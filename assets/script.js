// Array of questions

var firstQuestion = ['True or False: Boolean value is a value in JavaScript that can be true or false.'];
var secondQuestion = ['Which defintion most describes an array in JavaScript?'];
var thirdQuestion = ['What type of primitive data type is "Hello World!" in JavaScript?'];
var fourthQuestion = ['What do you use to store multiple data in one variable in JavaScript?'];
var fifthQuestion = ['What is a function in JavaScript?'];

// Functionality added to begin quiz button to start the timer and begin the quiz with the first question on screen

var secondsLeft = 300;
var timerEl = document.getElementById("#timer");

function setTime() {
        var timerInterval = setInterval(function() {
            secondsLeft--;
            timerEl.textContext = secondsLeft + "seconds until quiz time runs out";

            if(secondsLeft === 0) {
                clearInterval(timerInterval);
                stopQuiz();
            }

        }, 1000)
    };

function startQuiz() {

}



var beginQuiz = beginQuiz.getElementById('#otherbutton')
beginQuiz.addEventListener('click', function() {
    setTime();
    startQuiz();
});