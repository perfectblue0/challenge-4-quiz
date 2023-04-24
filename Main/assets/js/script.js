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
var quest = document.querySelector(".question");
var options = document.querySelector(".options");
var radioButton = document.querySelectorAll("input[name='option']");
var scoreBtn = document.querySelector("#highScore");
var playAgain = document.querySelector("#again");
var timeDisplay = document.querySelector("#time");

var finalScore = document.createElement('p');
var formScore = document.createElement('form');
var subForm = document.querySelector('.submitForm');
var results = document.querySelector('.results');

scoreBtn = 0;
var count = 0;
var time = 50;
var finalScoreArr = [];

// todo: timer that counts down and clears when game ends

function setTime() {
    var strTime = setInterval(function() {
        time--;
        document.querySelector("#time").innerHTML = time;
        if(time === 0 || count == questions.length) {
            document.querySelector("#time").innerHTML = "00";
            clearInterval(strTime);
            // change to end screen with function
        }
    }, 1000);
}

// function to show questions/options 

function show() {
    quest.innerHTML = questions[count].question;
    for(var i = 0; i < questions[count].answers.length; i++) {
        options.innerHTML += "<input type='radio' name='answer' value=' " + i + "'>" + questions[count].answers[i] + "<br>";
    }
}




// functions to hide elements

function hide() {
    options.innerHTML = "";
    quest.innerHTML = "";
    timeDisplay.innerHTML = "";
}

// will be used to hide initial elements and show selected element

function changeHidden(newPage) {
    
    quiz.style.display = "none";
    begin.style.display = "none";
    newPage.style.display = "block";
}





// function that checks answers

function inspect() {
    var optionBtn = document.querySelectorAll("input[name='answer']");
    for(optionBtn of optionBtn) {
        
        if(optionBtn.checked) {
            if(optionBtn.value == questions[count].correctAnswer) {
                scoreBtn++;
            } else {
                time -= 10;
            } count++;
            console.log(scoreBtn);
        }
            
    }
    
}

// function that shows final score

function final() {
    time = 0;
    finalScore.innerText = "Final Score is: " + scoreBtn;
    
}



// event listener for starting...timer works, question is shown!!!

beginBtn.addEventListener("click", function () {
    setTime();
    show();
    changeHidden(quiz);
    

});

// event listener that checks answers... need to do this over

options.addEventListener("click", function() {
    inspect();
    hide();


    if (count == questions.length) {
        var user = prompt("To save your score write your name");
        localStorage.setItem(user, scoreBtn);
        var userScore = document.createElement("li");
        userScore.innerHTML = (user + " Final Score " + scoreBtn);
        scoreBtn.children[0].appendChild(userScore);
        changeHidden(scoreBtn);
        changeHidden(playAgain);
    } else {
        show();
    }
});

//changeHidden(begin);

