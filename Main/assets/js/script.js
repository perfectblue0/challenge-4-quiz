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

var count = 0;
var time = 50;

// todo: timer that counts down and clears when game ends

function setTime() {
    var strTime = setInterval(function() {
        time--;
        document.querySelector("#time").innerHTML = time;
        if(time === 0) {
            document.querySelector("#time").innerHTML = "00";
            clearInterval(strTime);
            // change to end screen with function
        }
    }, 1000);
}

// function to hide and show questions/options 

function show() {
    question.innerHTML = questions[count].question;
    for(let i = 0; i < questions[count].answers.length; i++) {
        answers.innerHTML += "<input type='radio' name='answer' value=' " + i + "'>" + questions[count].answers[i] + "<br>";
    }
}



// functions to hide

function hide() {
    answers.innerHTML = "";
}

// will be used to hide all elements and show scores once called

function changeHidden(newPage) {
    score.style.display = "none";
    quiz.style.display = "none";
    begin.style.display = "none";
    newPage.style.display = "block";
}



// todo: function that checks answers


// event listener for starting...timer works, question is shown!!!

beginBtn.addEventListener("click", function () {
    setTime();
    show();
    changeHidden(quiz);
})

