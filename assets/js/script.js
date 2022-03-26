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
    // display text in HTML
    alert(questionText);
    //if time left, continue with questions
    if (/* correct answer is clicked && time > 0*/) {
        currentQuestion++;
    } else if (/*answer is incorrect*/) {
        timerPenalty();
        currentQuestion++;
    } else (/*time is less than 0*/) {
        // if time =<0, run end game function
    }
}

// function to subtract time when answered incorrectly
function timerPenalty() {
    seconds -= 20;
}
// function to end game
// display "game over" page
// initials input

// function to store high score    
