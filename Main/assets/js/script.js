// array of questions, answers, and correnct answer index

var questions = [
    {
        question: "What is the capital of Aguascalientes, Mexico?",
        answers: [
            "Saltillo",
            "Tijuana",
            "Guanajuato",
            "Aguascalientes",
        ],
        correctAnswer: 3
    },
    {
        question: "What is the capital of Durango?",
        answers: [
            "Colima",
            "Victoria de Durango",
            "Guadalajara",
            "Morelia",
        ],
        correctAnswer: 1
    },
    {
        question: "What is the capital of Nayarit?",
        answers: [
            "Pachuca de Soto",
            "Mexico City",
            "Cuernavaca",
            "Tepic",
        ],
        correctAnswer: 3
    },
    {
        question: "What is the capital of Tabasco",
        answers: [
            "Ciudad Juarez",
            "Hermosillo",
            "Monterrey",
            "Oaxaca de Juárez",
        ],
        correctAnswer: 1
    },
    {
        question: "What is the capital of Zacatecas",
        answers: [
            "Zacatecas",
            "La Paz",
            "Manzanillo",
            "Tijuana",
        ],
        correctAnswer: 0
    },

];

// selectors!

var scoresNTime = document.querySelector(".scoresNTime");
var contentBox = document.querySelector(".contentBox");
var beginQ = document.querySelector(".startBtn");

var secondsLeft = document.querySelector(".seconds");
var textBox = document.querySelector(".text-box");
var choicesBox = document.querySelector(".choices");

var formSub = document.querySelector(".form-submit");
var outPutSelection = document.querySelector(".outputSelection");

var scoreResult = document.createElement("p");
var nameForm = document.createElement("form");
var scoreLi = document.createElement("ol");
var buttonSubmit = document.createElement("button");
var inputForm = document.createElement("input");

// default logic variables

var indexQuestion;
var remainTime = 100;
var points = 0;
var arrayScore = [];

// function to start timer (works)
function startSeconds() {
    var secondsInterval = setInterval(function() {
        remainTime--;
        if (remainTime < 0) {
            remainTime = 0;
        }
       secondsLeft.textContent = `Seconds Left ${remainTime}`;
       if (remainTime <= 0) {
        clearInterval(secondsInterval);
       // return final result score function 
       }
    }, 1000)
}

// todo: function to start quiz
function startTQuiz() {
    startSeconds();
    indexQuestion = 0;
    beginQ.style.display = 'none';
}

beginQ.addEventListener("click", startTQuiz);
// todo: function to show next question

// todo: function to evaluate if answer right

// todo: function to show final result score

// todo: function to store result

// todo: functin to clear history of scores

// todo: function to hide elements

// todo: event listeners



