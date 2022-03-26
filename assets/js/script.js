document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("start-button").addEventListener('click', startGame);
})

// add questions here
const questions = [
    {questionText: "Question 1", options: ["Option 1","Option 2"], answer: 1}, 
    {questionText: "Question 2", options: ["Option 1","Option 2"], answer: 0},
    {questionText: "Question 3", options: ["Option 1","Option 2"], answer: 2},
    {questionText: "Question 4", options: ["Option 1","Option 2"], answer: 3},
    {questionText: "Question 5", options: ["Option 1","Option 2"], answer: 4},
    {questionText: "Question 6", options: ["Option 1","Option 2"], answer: 5}, 
    {questionText: "Question 7", options: ["Option 1","Option 2"], answer: 6},
    {questionText: "Question 8", options: ["Option 1","Option 2"], answer: 7},
    {questionText: "Question 9", options: ["Option 1","Option 2"], answer: 8},
    {questionText: "Question 10", options: ["Option 1","Option 2"], answer: 9}
];

var seconds = 120;
var currentQuestion = 0;
var score = ((questions[i]) * 10);
var hiScore = (Math.max(score));

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

// add if/else function to cycle through questions
function showQuestions() {
    var questionText = questions[currentQuestion].questionText; 
    // display text in HTML
    alert(questionText);
    //if time left, continue with questions
    if (/* correct answer is clicked*/ && seconds < 0) {
        currentQuestion++;
    } else if (/*answer is incorrect*/) {
        timerPenalty();
        currentQuestion++;
    } else if (seconds <= 0) {
        endGame();
    }
}

// function to subtract time when answered incorrectly
function timerPenalty() {
    seconds -= 20;
}

// function to end game
function endGame() {
    // display "game over" page
    document.getElementById("question").style.display = "none";
    document.getElementById("game-over").style.display = "block"; 
    document.getElementById("submit-initials").addEventListener("click", hiScorePage);
}

// function to store score 
function createScore() {
    if (score > hiScore) {
        Set(hiScore = (score += document.getElementById("initials")));
    } else {
        Set(score += document.getElementById("initials"));
    }
}

// function to show high score page
function hiScorePage() {
    document.getElementById("game-over").style.display = "none";
    document.getElementById("hi-score").style.display = "block";
    document.getElementById("current-hi-score").innerHTML = fetch(hiScore);
    document.getElementById("player-score").innerHTML = (score);
}   
