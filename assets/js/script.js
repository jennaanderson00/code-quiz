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
    var score = (seconds * 10);

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
        // Display text in HTML
        document.getElementById("question-title").innerHTML = questions[0].questionText;
        document.getElementById("answer-1").innerHTML = questions[0].options[0];
        document.getElementById("answer-2").innerHTML = questions[0].options[1];
        document.getElementById("answer-3").innerHTML = questions[0].options[2];
        document.getElementById("answer-4").innerHTML = questions[0].options[3];
        
        function answers() {
            if (document.getElementById("answer-2").clicked == true) {
                 showQuestions2();
            } else if (document.getElementById("answer-2").clicked == false) {
                 timerPenalty();
            } else if (seconds <= 0) {
                endGame();
            }
        }

       document.getElementById("answers").addEventListener("click", answers());
    }

    function showQuestions2() {
        // Display text in HTML
        document.getElementById("question-title").innerHTML = questions[1].questionText;
        document.getElementById("answer-1").innerHTML = questions[1].options[0];
        document.getElementById("answer-2").innerHTML = questions[1].options[1];
        document.getElementById("answer-3").innerHTML = questions[1].options[2];
        document.getElementById("answer-4").innerHTML = questions[1].options[3];
       
        function answers2() {
            if (document.getElementById("answer-1").clicked == true) {
                 showQuestions3();
            } else if (document.getElementById("answer-1").clicked == false) {
                 timerPenalty();
            } else if (seconds <= 0) {
                endGame();
            }
        }

       document.getElementById("answers").addEventListener("click", answers2());
    }

    function showQuestions3() {
        // Display text in HTML
        document.getElementById("question-title").innerHTML = questions[2].questionText;
        document.getElementById("answer-1").innerHTML = questions[2].options[0];
        document.getElementById("answer-2").innerHTML = questions[2].options[1];
        document.getElementById("answer-3").innerHTML = questions[2].options[2];
        document.getElementById("answer-4").innerHTML = questions[2].options[3];
       
        function answers3() {
            if (document.getElementById("answer-4").clicked == true) {
                 showQuestions4();
            } else if (document.getElementById("answer-4").clicked == false) {
                 timerPenalty();
            } else if (seconds <= 0) {
                endGame();
            }
        }

       document.getElementById("answers").addEventListener("click", answers3());
    }

    function showQuestions4() {
        // Display text in HTML
        document.getElementById("question-title").innerHTML = questions[3].questionText;
        document.getElementById("answer-1").innerHTML = questions[3].options[0];
        document.getElementById("answer-2").innerHTML = questions[3].options[1];
        document.getElementById("answer-3").innerHTML = questions[3].options[2];
        document.getElementById("answer-4").innerHTML = questions[3].options[3];
       
        function answers4() {
            if (document.getElementById("answer-4").clicked == true) {
                 showQuestions5();
            } else if (document.getElementById("answer-4").clicked == false) {
                 timerPenalty();
            } else if (seconds <= 0) {
                endGame();
            }
        }

       document.getElementById("answers").addEventListener("click", answers4());
    }

    function showQuestions5() {
        // Display text in HTML
        document.getElementById("question-title").innerHTML = questions[4].questionText;
        document.getElementById("answer-1").innerHTML = questions[4].options[0];
        document.getElementById("answer-2").innerHTML = questions[4].options[1];
        document.getElementById("answer-3").innerHTML = questions[4].options[2];
        document.getElementById("answer-4").innerHTML = questions[4].options[3];
       
        function answers5() {
            if (document.getElementById("answer-3").clicked == true) {
                 showQuestions6();
            } else if (document.getElementById("answer-3").clicked == false) {
                 timerPenalty();
            } else if (seconds <= 0) {
                endGame();
            }
        }

       document.getElementById("answers").addEventListener("click", answers5());
    }

    function showQuestions6() {
        // Display text in HTML
        document.getElementById("question-title").innerHTML = questions[5].questionText;
        document.getElementById("answer-1").innerHTML = questions[5].options[0];
        document.getElementById("answer-2").innerHTML = questions[5].options[1];
        document.getElementById("answer-3").innerHTML = questions[5].options[2];
        document.getElementById("answer-4").innerHTML = questions[5].options[3];
       
        function answers6() {
            if (document.getElementById("answer-1").clicked == true) {
                 showQuestions7();
            } else if (document.getElementById("answer-1").clicked == false) {
                 timerPenalty();
            } else if (seconds <= 0) {
                endGame();
            }
        }

       document.getElementById("answers").addEventListener("click", answers6());
    }

    function showQuestions7() {
        // Display text in HTML
        document.getElementById("question-title").innerHTML = questions[6].questionText;
        document.getElementById("answer-1").innerHTML = questions[6].options[0];
        document.getElementById("answer-2").innerHTML = questions[6].options[1];
        document.getElementById("answer-3").innerHTML = questions[6].options[2];
        document.getElementById("answer-4").innerHTML = questions[6].options[3];
       
        function answers7() {
            if (document.getElementById("answer-2").clicked == true) {
                 showQuestions8();
            } else if (document.getElementById("answer-2").clicked == false) {
                 timerPenalty();
            } else if (seconds <= 0) {
                endGame();
            }
        }

       document.getElementById("answers").addEventListener("click", answers7());
    }

    function showQuestions8() {
        // Display text in HTML
        document.getElementById("question-title").innerHTML = questions[7].questionText;
        document.getElementById("answer-1").innerHTML = questions[7].options[0];
        document.getElementById("answer-2").innerHTML = questions[7].options[1];
        document.getElementById("answer-3").innerHTML = questions[7].options[2];
        document.getElementById("answer-4").innerHTML = questions[7].options[3];
       
        function answers8() {
            if (document.getElementById("answer-1").clicked == true) {
                 showQuestions9();
            } else if (document.getElementById("answer-1").clicked == false) {
                 timerPenalty();
            } else if (seconds <= 0) {
                endGame();
            }
        }

       document.getElementById("answers").addEventListener("click", answers8());
    }

    function showQuestions9() {
        // Display text in HTML
        document.getElementById("question-title").innerHTML = questions[8].questionText;
        document.getElementById("answer-1").innerHTML = questions[8].options[0];
        document.getElementById("answer-2").innerHTML = questions[8].options[1];
        document.getElementById("answer-3").innerHTML = questions[8].options[2];
        document.getElementById("answer-4").innerHTML = questions[8].options[3];
       
        function answers9() {
            if (document.getElementById("answer-4").clicked == true) {
                 showQuestions10();
            } else if (document.getElementById("answer-4").clicked == false) {
                 timerPenalty();
            } else if (seconds <= 0) {
                endGame();
            }
        }

       document.getElementById("answers").addEventListener("click", answers9());
    }

    function showQuestions10() {
        // Display text in HTML
        document.getElementById("question-title").innerHTML = questions[9].questionText;
        document.getElementById("answer-1").innerHTML = questions[9].options[0];
        document.getElementById("answer-2").innerHTML = questions[9].options[1];
        document.getElementById("answer-3").innerHTML = questions[9].options[2];
        document.getElementById("answer-4").innerHTML = questions[9].options[3];
       
        function answers10() {
            if (document.getElementById("answer-3").clicked == true || seconds <=0) {
                 endGame();
            } else if (document.getElementById("answer-3").clicked == false) {
                 timerPenalty();
            } 
        }

       document.getElementById("answers").addEventListener("click", answers10());
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
        var hiScore = 0;
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
        createHiScore();
        document.getElementById("game-over").style.display = "none";
        document.getElementById("hi-score").style.display = "block";
        document.getElementById("current-hi-score").innerHTML = localStorage.getItem(hiScore);
        document.getElementById("player-score").innerHTML = (score);
    }   
})


