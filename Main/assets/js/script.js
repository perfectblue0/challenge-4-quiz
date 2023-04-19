// element variables

var startButton = document.querySelector('#start-button');


// global variables for functions

var questionIndex;
var score = 0;
var timeLeft = 100;
var highScores = [];

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



function startGame() {
    //timer function here
    questionIndex = 0;
    loadQuestions();
}

// functions:


// To do: declare function declaration that decreases time


// To do: function to show question

// To do: function that shows next question
function loadQuestions() {
    
}



// event listeners:



// event listener that calls function that hides elements and shows others on startbutton click

startButton.addEventListener("click", function() {
    document.querySelector("#box-1").setAttribute("class", "hide");
    document.querySelector("#initial-page").setAttribute("class", "hide");
    document.querySelector("#quiz-block").setAttribute("class", "");

    questionIndex = 0;
    loadQuestions();


    // to do: call function to begin decreasing time
});