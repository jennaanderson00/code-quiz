document.addEventListener('DOMContentLoaded', (event) => {
    // Hide everything except start page
    document.getElementById("game-over").style.display = "none";
    document.getElementById("question").style.display = "none";
    document.getElementById("game-over").style.display = "none";
    document.getElementById("hi-score").style.display = "none";

    // Start game
    document.getElementById("start-button").addEventListener('click', startGame);

    // Add questions here
    const questions = [
        {questionText: "What does HTML stand for?", options: ["HyperTree Markup Language", "HyperText Markup Language", "HyperTrue Markup List" , "HyperTest Markup List"], answer: "1"}, 
        {questionText: "To horizontally center content in a flexbox, which of the following is used in CSS?", options: ["justify-content:center;", "justify-content:flex-start;", "align-items:center;", "align-items:flex-end;"], answer: "0"},
        {questionText: "If two different colors are applied to the same background in CSS, which will be used?", options: ["The rule written first", "The darkest color", "The lightest color", "The rule written last"], answer: "3"},
        {questionText: "What is contained within a README?", options: ["Information about the application/site", "Information about functionality", "Anything the developer wants Users to know", "All of the above"], answer: "3"},
        {questionText: "Within the context of coding, what is a string?", options: ["A group of text", "A piece of yarn", "Text and numbers contained within quotes", "A wire on an instrument that makes noise"], answer: "2"},
        {questionText: "What does CSS stand for?", options: ["Cascading Style Sheets", "Cascading Style Scroll", "Cascading Style Script", "Cascading Style Storage"], answer: "0"}, 
        {questionText: "Where is CSS usually linked within the HTML?", options: ["The body tag", "The head tag", "The footer element within the body tag", "A div element within the body tag"], answer: "1"},
        {questionText: "Which of the following stores information in the localStorage API?", options: ["set", "get", "fetch", "store"], answer: "0"},
        {questionText: "What does API stand for?", options: ["Associate Programming Interface", "Analog Programming Interface", "Additional Programming Interface", "Application Programming Interface"], answer: "3"},
        {questionText: "Which of the following can use global scope, but not block scope?", options: ["const", "function", "var", "document"], answer: "2"}
    ];

    var seconds = 120;
    var score = (seconds * 10);
    var currentQuestion = 0;

    function checkTime() {
        if (seconds < 0) {
            endGame();
        }
    }

    function startGame() {
        // Hide Starting Page/Text
        document.getElementById("start-quiz").style.display = "none";
        // Start Timer
        setInterval(() => { timer(); }, 1000);
        // Start Showing Questions 
        document.getElementById("question").style.display = "block";
        showQuestions();
    }

    // Timer
    function timer() {
        seconds--; 
        if(isTimerUp()){
            endGame();
        } else {
            updateUI();
        }
    }
    function isTimerUp() {
        if (seconds <= 0) {
            return true;
        } else {
            return false;
        }
    }
    function endTimer() {
        const timerDisplay = document.getElementById("timer");
        timerDisplay.remove();
    }
    function updateUI() {
        document.getElementById("timer").innerHTML = seconds;
    }

    // Display initial question
    function addListeners() {
        document.getElementById("answer-1").addEventListener("click", checkAnswer);
        document.getElementById("answer-2").addEventListener("click", checkAnswer);
        document.getElementById("answer-3").addEventListener("click", checkAnswer);
        document.getElementById("answer-4").addEventListener("click", checkAnswer);
    } 
    function showQuestions() {
        // Display text in HTML
        document.getElementById("question-title").innerHTML = questions[currentQuestion].questionText;
        document.getElementById("answer-1").innerHTML = questions[currentQuestion].options[0];
        document.getElementById("answer-2").innerHTML = questions[currentQuestion].options[1];
        document.getElementById("answer-3").innerHTML = questions[currentQuestion].options[2];
        document.getElementById("answer-4").innerHTML = questions[currentQuestion].options[3];

        addListeners();
    }

    // Switch questions 
    function nextQuestion() {
        currentQuestion++;
        updateQuestionText();
    }
    function updateQuestionText() {
        document.getElementById("question-title").innerHTML = questions[currentQuestion].questionText;
        document.getElementById("answer-1").innerHTML = questions[currentQuestion].options[0];
        document.getElementById("answer-2").innerHTML = questions[currentQuestion].options[1];
        document.getElementById("answer-3").innerHTML = questions[currentQuestion].options[2];
        document.getElementById("answer-4").innerHTML = questions[currentQuestion].options[3];
    }

    // Give timer penalty if wrong answer is selected
    function isAnswerWrong(choice) {
        const correctAnswer = questions[currentQuestion].answer; 
        if(choice != correctAnswer) {
            return true;
        } else if (currentQuestion == 9 && choice == correctAnswer) {
            endGame();
        } else {
            return false;
        }
    }
    function checkAnswer(e){
        const choice = e.target.getAttribute('data-choice'); 
        if (isAnswerWrong(choice)) {
            console.log("you picked the wrong answer");
            timerPenalty();
        } 
        nextQuestion();
    }

    // Subtract time when answered incorrectly
    function timerPenalty() {
        seconds -= 20;
    }

    // End the game
    function endGame() {
        // Display "game over" page
        endTimer();
        document.getElementById("question").style.display = "none";
        document.getElementById("game-over").style.display = "block"; 
        document.getElementById("submit-initials").addEventListener("submit", hiScorePage);
    }

    // Create score and high score
    function createHiScore() {
        var hiScore = 0;
        if (score > hiScore) {
            score += document.getElementById("initials");
            localStorage.setItem(hiScore, score);
        } else {
            score += document.getElementById("initials");
        }
    }

    // Show high score page
    function hiScorePage() {
        createHiScore();
        document.getElementById("game-over").style.display = "none";
        document.getElementById("hi-score").style.display = "block";
        document.getElementById("current-hi-score").innerHTML = localStorage.getItem(hiScore);
        document.getElementById("player-score").innerHTML = (score);
        document.getElementById("play-again-btn").addEventListener("click", startGame);
    }
})