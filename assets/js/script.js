document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("start-button").addEventListener('click', startGame);
})

// add questions here
const questions = [
    {questionText: "Question 1", options: ["Option 1","Option 2"], answer: 1}, 
    {questionText: "Question 2", options: ["Option 1","Option 2"], answer: 0}
];

var seconds = 120;
var currentQuestion = 0;

function startGame() {
    // Hide Starting Page/Text
    document.getElementById("start-quiz").style.display = "none";
    // Start Timer
    setInterval(() => { timer(); }, 1000);
    // Display Timer
    // Start Showing Questions 
    showQuestions();
}

function timer() {
    seconds--; 
    isGameOver();
    updateUI();
}

function updateUI() {
    document.getElementById("timer").innerHTML = seconds;
}

function isGameOver() {
    if (seconds <= 0) {
        alert("game over");
        // display game end function
    }
}

// add if/else function to cycle through questions
function showQuestions() {
    var questionText = questions[currentQuestion].questionText; 
    alert(questionText);
    //if time left, continue with questions
    // if time =<0, end game
}

// function to subtract time when answered incorrectly

// function to end game
// display "game over" page
// initials input

// function to store high score    