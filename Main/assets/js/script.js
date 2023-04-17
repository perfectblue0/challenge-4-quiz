const questions = [
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

var wordBlank = document.querySelector(".word-blanks");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector("#start-button");

var numBlanks = 0;
var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount;

function gameStart() {
    document.getElementById("start-button").click();
    timerCount = 100;
    startTimer();
}

// To do: add function declaration that decreases time

function loadQuestions() {
    var question = questions[questionIndex];
    $('#quiz-block').children('h1').text(question.question);
    $('#quiz-block').children('.answers').children().eq(0).text(question.answers[0]);
}

// function that hides elements and shows others on startbutton click

startButton.addEventListener("click", function() {
    document.querySelector("#box-1").setAttribute("class", "hide");
    document.querySelector("#initial-page").setAttribute("class", "hide");
    document.querySelector("#quiz-block").setAttribute("class", "");

    loadQuestions();

    // to do: call function to begin decreasing time
});