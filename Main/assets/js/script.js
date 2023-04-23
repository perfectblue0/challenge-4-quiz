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

// function to show questions/options 

function show() {
    quest.innerHTML = questions[count].question;
    for(var i = 0; i < questions[count].answers.length; i++) {
        options.innerHTML += "<input type='radio' name='answer' value=' " + i + "'>" + questions[count].answers[i] + "<br>";
    }
}




// functions to hide (maybe move this over to changeHidden)

function hide() {
    options.innerHTML = "";
}

// will be used to hide all elements and show scores once called

function changeHidden(newPage) {
    
    quiz.style.display = "none";
    begin.style.display = "none";
    newPage.style.display = "block";
}





// todo: function that checks answers

function inspect() {
    var optionBtn = document.querySelectorAll("input[name='answer']");
    for(optionBtn of optionBtn) {
        if(optionBtn.checked) {
            if(optionBtn.value == questions[count].correctAnswer) {
                scoreBtn += 10;
            } else {
                time -= 10;
            } count++;
        }
            
    }
    
}

// event listener for starting...timer works, question is shown!!!

beginBtn.addEventListener("click", function () {
    setTime();
    show();
    changeHidden(quiz);
});

// event listener that checks answers...

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
    } else {
        show();
    }
});

//changeHidden(begin);

