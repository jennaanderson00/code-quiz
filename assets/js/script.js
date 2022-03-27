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
        {questionText: "What does HTML stand for?", options: ["HyperTree Markup Language", "HyperText Markup Language", "HyperTrue Markup List" , "HyperTest Markup List"], answer: 1}, 
        {questionText: "To horizontally center content in a flexbox, which of the following is used in CSS?", options: ["justify-content:center;", "justify-content:flex-start;", "align-items:center;", "align-items:flex-end;"], answer: 0},
        {questionText: "If two different colors are applied to the same background in CSS, which will be used?", options: ["The rule written first", "The darkest color", "The lightest color", "The rule written last"], answer: 3},
        {questionText: "What is contained within a README?", options: ["Information about the application/site", "Information about functionality", "Anything the developer wants Users to know", "All of the above"], answer: 3},
        {questionText: "Within the context of coding, what is a string?", options: ["A group of text", "A piece of yarn", "Text and numbers contained within quotes", "A wire on an instrument that makes noise"], answer: 2},
        {questionText: "What does CSS stand for?", options: ["Cascading Style Sheets", "Cascading Style Scroll", "Cascading Style Script", "Cascading Style Storage"], answer: 0}, 
        {questionText: "Where is CSS usually linked within the HTML?", options: ["The body tag", "The head tag", "The footer element within the body tag", "A div element within the body tag"], answer: 1},
        {questionText: "How are comments made in HTML?", options: ["Between <!-- and --!>", "Between /*-- and --*/", "In the README file", "Between /! and !/"], answer: 0},
        {questionText: "What does API stand for?", options: ["Associate Programming Interface", "Analog Programming Interface", "Additional Programming Interface", "Application Programming Interface"], answer: 3},
        {questionText: "Which of the following can use global scope, but not block scope?", options: ["const", "function", "var", "document"], answer: 2}
    ];

    var seconds = 120;
    var currentQuestion = 0;
    var score = ((questions[i]) * 10);

    function startGame() {
        // Hide Starting Page/Text
        document.getElementById("start-quiz").style.display = "none";
        // Start Timer
        setInterval(() => { timer(); }, 1000);
        // Start Showing Questions 
        showQuestions();
    }

    function timer() {
        seconds--; 
        isGameOver();
        updateUI();
    }

    function endTimer() {
        if (seconds <= 0) {
            document.getElementById("timer").style.display = "none";
        }
    }

    function updateUI() {
        document.getElementById("timer").innerHTML = seconds;
    }

    // Add if/else function to cycle through questions
    function showQuestions() {
        var questionText = questions[currentQuestion].questionText; 
        // Display text in HTML
        document.getElementById("question-title").innerHTML = questions[0];
        if (document.getElementById("question-title").innerHTML = questions[0] /* and option is correct*/) {

        }
        // If time left, continue with questions
        if (/*Correct answer is clicked*/ && seconds < 0) {
            currentQuestion++;
        } else if (/*Answer is incorrect*/) {
            timerPenalty();
            currentQuestion++;
        } else if (seconds <= 0) {
            endGame();
        }
    }

    // Function to subtract time when answered incorrectly
    function timerPenalty() {
        seconds -= 20;
    }

    // Function to end game
    function endGame() {
        // Display "game over" page
        endTimer();
        document.getElementById("question").style.display = "none";
        document.getElementById("game-over").style.display = "block"; 
        document.getElementById("submit-initials").addEventListener("click", hiScorePage);
    }

    // Function to create score and high score
    function createHiScore() {
        if (score > hiScore) {
            hiScore = (score += document.getElementById("initials"));
            localStorage.setItem(hiScore);
        } else {
            score += document.getElementById("initials");
            localStorage.setItem(score);
        }
    }

    // Function to show high score page
    function hiScorePage() {
        document.getElementById("game-over").style.display = "none";
        document.getElementById("hi-score").style.display = "block";
        document.getElementById("current-hi-score").innerHTML = localStorage.getItem(hiScore);
        document.getElementById("player-score").innerHTML = (score);
    }   
})


