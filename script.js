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
        correctAnswer: "Aguascalientes"
    },
    {
        question: "What is the capital of Durango?",
        answers: [
            "Colima",
            "Victoria de Durango",
            "Guadalajara",
            "Morelia",
        ],
        correctAnswer: "Victoria de Durango"
    },
    {
        question: "What is the capital of Nayarit?",
        answers: [
            "Pachuca de Soto",
            "Mexico City",
            "Cuernavaca",
            "Tepic",
        ],
        correctAnswer: "Tepic"
    },
    {
        question: "What is the capital of Tabasco",
        answers: [
            "Ciudad Juarez",
            "Hermosillo",
            "Monterrey",
            "Oaxaca de Juárez",
        ],
        correctAnswer: "Hermosillo"
    },
    {
        question: "What is the capital of Zacatecas",
        answers: [
            "Zacatecas",
            "La Paz",
            "Manzanillo",
            "Tijuana",
        ],
        correctAnswer: "Zacatecas"
    },

];

// selectors!
var titleTest = document.querySelector(".title-test");
var scoresNTime = document.querySelector(".scoresNTime");
var contentBox = document.querySelector(".contentBox");
var beginQ = document.querySelector(".startBtn");
var pScores = document.querySelector(".pScores");

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
var point = 0;
var arrayScore = [];

// function to view past points and names
function pastPointsDisplay() {
    var navBack = document.createElement("button");
    var scoreClear = document.createElement("button");

    retrievePoints();
    blankBtns();

    scoresNTime.style.visibility = "hidden";
    textBox.innerText = "Past Names and Scores";
    scoreResult.remove();
    nameForm.remove();

    for (var i = 0; i < arrayScore.length; i++) {
        var userEntry = arrayScore[i];
        var list = document.createElement("li");
        list.textContent = userEntry;
        list.setAttribute('data-index', i);
        scoreLi.appendChild(list);
        choicesBox.appendChild(scoreLi);
    }
    choicesBox.appendChild(scoreLi);
    navBack.textContent = "Return to Main";
    scoreClear.textContent = "Clear All";

    formSub.appendChild(navBack);
    formSub.appendChild(scoreClear);

    navBack.addEventListener("click", pageReload);
    scoreClear.addEventListener("click", clearPointsHistory);
}

// function refresh page
function pageReload() {
    location.reload();
}

// function to clear past score history
function clearPointsHistory() {
    localStorage.clear();
    scoreLi.remove();
}

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
       displayFinalPoints(); 
       }
    }, 1000)
}

// function to start quiz
function startTQuiz() {
    startSeconds();

    indexQuestion = 0;
    beginQ.style.display = "none";
    titleTest.style.display = "none";
    pScores.style.display = "none";

    nextQuest();
}

// event listener for viewing past scores
pScores.addEventListener("click", pastPointsDisplay);

// event listener for Begin button that starts quiz
beginQ.addEventListener("click", startTQuiz);

// function to show question
function displayQuestion(quest) {
    if (indexQuestion >= questions.length) {
        remainTime = 0;
        return;
    }
    textBox.innerText = quest.question;
    quest.answers.forEach(answer => {
        var btn = document.createElement("button");
        btn.innerText = answer;

        choicesBox.appendChild(btn);
    });
};

// function to show next question
function nextQuest() {
    displayQuestion(questions[indexQuestion]);
}

// todo: function to evaluate if answer right
function evalAnswer(picked, right) {
    return picked === right;
}

// event listener that uses evalAnswer on click
choicesBox.addEventListener("click", function(e) {
    var evaluated = (evalAnswer(e.target.textContent, questions[indexQuestion].correctAnswer));

    if (evaluated) {
        point++;
        outPutSelection.textContent = "Bien Hecho";
    } else {
        remainTime-=10;
        outPutSelection.textContent = "Ni modo";
    }

    indexQuestion++;
    blankBtns();
    return nextQuest();
});

// function to show final result score
function displayFinalPoints() {
    blankBtns();

    remainTime = 0;
    textBox.style.display = "none";

    scoreResult.innerText = "You scored: " + point;

    choicesBox.appendChild(scoreResult);

    outPutSelection.textContent = '';

    displayFormNBtn();
}

// function to display form and submit button
function displayFormNBtn() {
    var labelForm = document.createElement("label");

    labelForm.innerText = "Type in Name:";
    buttonSubmit.innerText = "Save";

    buttonSubmit.setAttribute = ("class", "saveBtn");

    nameForm.appendChild(labelForm);
    nameForm.appendChild(inputForm);
    nameForm.appendChild(buttonSubmit);
    formSub.appendChild(nameForm);
}

// function to save result in localStorage
function resultsSave() {
    localStorage.setItem("points", JSON.stringify(arrayScore));
}

// event listener that shows save btn and form to save score
buttonSubmit.addEventListener("click", function(e) {
    e.preventDefault();
    var textPoints = inputForm.value.trim() + ' - ' + point;

    if (textPoints === '') {
        return;
    }
        retrievePoints();

        arrayScore.push(textPoints);

        resultsSave();

        pastPointsDisplay();
});

// function to get scores from localStorage
function retrievePoints() {
    var savedPoints = JSON.parse(localStorage.getItem("points"));

    if (savedPoints !== null) {
        arrayScore = savedPoints;
    }
}

// function to reset question for next action
function blankBtns() {
    var mBtn = document.querySelectorAll("button");
    
    for (button of mBtn) {
        button.remove();
    }
}



