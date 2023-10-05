// Different variables

var timerEl = document.getElementById("timer");
var beginQuiz = document.getElementById("otherbutton");
var questionAsked = document.getElementById("questions");
var choiceA = document.getElementById("choiceA");
var choiceB = document.getElementById("choiceB");
var choiceC = document.getElementById("choiceC");
var theAnswer = document.getElementById("answers");

// Questions, Choices, and Answers Array

var questions = [
    {
        question: "True or False: Boolean value is a value in JavaScript that can be either true or false.",
        choices: ["True", "False", "I don't know"],
        answer: "b"
    },
    {
        question: "Which defintion most describes an array in JavaScript?",
        choices: ["An object that can store multiple values at once in square brackets", "Mathematical operation", "None of the above"],
        answer: "a"
    },
    {
        question: 'What type of primitive data type is "Hello World!" in JavaScript?',
        choices: ["Boolean", "Number", "String"],
        answer: "c"
    },
    {
        question: "What do you use to store multiple data in one variable in JavaScript?",
        choices: ["Number", "String", "Arrays"],
        answer: "c"
    },
    {
        question: "What is a function in JavaScript?",
        choices: ["A set of code which performs a specific task", "A graph in math", "None of the above"],
        answer: "a"
    },
];

// Functionality added to begin quiz button to start the timer and begin the quiz with the first question on screen

var timeLeft = 300;
var timerInterval;
var currentQuestion = 0;
var userScore = 0;

// Function to automatically load the next question after previous question is answered

function loadQuestion() {
    var theQuestion = questions[currentQuestion];
    questionAsked.textContent = theQuestion.question;
    choiceA.textContent = theQuestion.options[0];
    choiceB.textContent = theQuestion.options[1];
    choiceC.textContent = theQuestion.options[2];
    theAnswer.textContent = "";
}

// Event listener added to click the Begin Quiz button

beginQuiz.addEventListener('click', function() {
    beginQuiz.style.display = "none";
    setTimer();
    loadQuestion();
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
                timerEl.textContent = timeLeft + "seconds until quiz time runs out";
        }
    }, 1000);
}

function submitQuiz() {
    alert("Quiz is submitted! Your score is " + userScore);
   
}
   

// Function to load the next question automatically


function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    
    } else {
    clearInterval(timerInterval);
    alert("Quiz is over!");
    submitQuiz();
    }
}


// Function to calculate user's score

function calculateScore() {
    userScore = 0
    for (var i = 0; i < questions.length; i++) {
        if (
            (questions[i].answer === "a" && document.getElementById("choiceA").checked) ||
            (questions[i].answer === "b" && document.getElementById("choiceB").checked) ||
            (questions[i].answer === "c" && document.getElementbyId("choiceC").checked) 
        ) {
            userScore++;
        }
    }
    return userScore;
}

document.querySelector('input[name="theanswer"]').addEventListener("click", function() {
    var userAnswer = document.querySelector('input[name="theanswer"]:checked');
    if (!userAnswer) {
        return;
    }

    if (userAnswer.value === questions[currentQuestion].answer) {
        theAnswer.textContent = "Correct!";
    } else {
        theAnswer.textContent = "Wrong!";
    }

    setTimeout(function() {
        nextQuestion();
        theAnswer.textContent = "";
    }, 1000);
});
