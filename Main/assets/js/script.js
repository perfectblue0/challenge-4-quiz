const questions = [
    {
        question: "What is the capital of Aguascalientes, Mexico?",
        answers: {
            1: "Saltillo",
            2: "Tijuana",
            3: "Guanajuato",
            4: "Aguascalientes",
        },
        correctAnswer: "4"
    },
    {
        question: "What is the capital of Durango?",
        answers: {
            1: "Colima",
            2: "Victoria de Durango",
            3: "Guadalajara",
            4: "Morelia",
        },
        correctAnswer: "2"
    },
    {
        question: "What is the capital of Nayarit?",
        answers: {
            1: "Pachuca de Soto",
            2: "Mexico City",
            3: "Cuernavaca",
            4: "Tepic",
        },
        correctAnswer: "4"
    },
    {
        question: "What is the capital of Tabasco",
        answers: {
            1: "Ciudad Juarez",
            2: "Hermosillo",
            3: "Monterrey",
            4: "Oaxaca de Juárez",
        },
        correctAnswer: "2"
    },
    {
        question: "What is the capital of Zacatecas",
        answers: {
            1: "Zacatecas",
            2: "La Paz",
            3: "Manzanillo",
            4: "Tijuana",
        },
        correctAnswer: "1"
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

startButton.addEventListener("click", function() {
    document.querySelector("#box-1").setAttribute("class", "hide");
    document.querySelector("#initial-page").setAttribute("class", "hide");
    document.querySelector("#quiz-block").setAttribute("class", "");
    document.querySelector("#time-box").setAttribute("class", "");

    // to do: call function to begin decreasing time
});