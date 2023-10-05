// Different variables

var timerEl = document.getElementById("#timer");
var beginQuiz = document.getElementById('#otherbutton');
var theQuestions = document.getElementbyId('#questions');
var theOptions = document.getElementbyId('#options');
var theAnswer = document.getElementbyId('#answers');

// Questions, Choices, and Answers Array

var questions = [
    {
        question: "True or False: Boolean value is a value in JavaScript that can be either true or false.",
        choices: ["True", "False"],
        answer: "False"
    },
    {
        question: "Which defintion most describes an array in JavaScript?",
        choices: ["An object that can store multiple values at once in square brackets", "Mathematical operation", "A value which can either be true or false", "None of the above"],
        answer: "An object that can store multiple values at once in square brackets"
    },
    {
        question: 'What type of primitive data type is "Hello World!" in JavaScript?',
        choices: ["Boolean", "Number", "String"],
        answer: "String"
    },
    {
        question: "What do you use to store multiple data in one variable in JavaScript?",
        choices: ["Number", "String", "Arrays"],
        answer: "Arrays"
    },
    {
        question: "What is a function in JavaScript?",
        choices: ["A set of code which performs a specific task", "A graph in math", "None of the above"],
        answer: "A set of code which performs a specific task"
    },
];

// Functionality added to begin quiz button to start the timer and begin the quiz with the first question on screen

var timeLeft = 300;
var timerInterval;
var theQuestion = 0;


beginQuiz.addEventListener('click', function() {
    beginQuiz.style.display = "none";
    setTimer();
});

function setTimer() {
        timerInterval = setInterval(function() {
            if (timeLeft <=0) {
                clearInterval(timerInterval);
                timerEl.textContent = "You're out of time!";
                alert("Quiz is over");
                submitQuiz();
            } else {
                timeLeft--;
                timerEl.textContext = secondsLeft + "seconds until quiz time runs out";
        }
    }, 1000);

function submitQuiz() {
    alert("Quiz is submitted!");
    return userScore;
}
}   

