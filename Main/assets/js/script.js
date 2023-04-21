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

var begin = document.querySelector("#begin");
var beginBtn = document.querySelector("#begin-btn");
var quiz = document.querySelector("#box-1");
var score = document.querySelector("#highScore");
var question = document.querySelector(".question");
var options = document.querySelector(".options");
//todo: result?
var radioButton = document.querySelectorAll("input[name='option']");
//todo: how to submit answer?
var scoreBtn = document.querySelector("#highScore");
var playAgain = document.querySelector("#again");



