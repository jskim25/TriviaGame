// Trivia Game - Week 5 Homework

$(document).ready(function() {
  // create object holding all of the questions, choices, and answers
  var questions = [{
    question: "Every one of Eminem's albums went platinum with the exception of one. Which album was it?",
    choices: ["Recovery", "Revival", "Eminem Show", "Encore"],
    answer: "Revival",
  },
  {
    question: "Which of these songs was the most-listened-to of 2017?",
    choices: ["Shape of You by Ed Sheeran", "Despacito by Luis Fonsi", "Unforgettable by French Montana", "I'm the One by DJ Khaled"],
    answer: "Shape of You by Ed Sheeran",
  },
  {
    question: "Which of these artists is not from Chicago?",
    choices: ["Common", "Kanye West", "Nelly", "Chance the Rapper"],
    answer: "Nelly",
  },
  {
    question: "What is the most viewed song on YouTube?",
    choices: ["Gangnam Style by Psy", "Sorry by Justin Bieber", "Uptown Funk by Mark Ronson", "See You Again by Wiz Khalifa"],
    answer: "See You Again by Wiz Khalifa",
  },
  {
    question: "What is the most downloaded iTunes song of all time?",
    choices: ["Poker Face by Lady Gaga", "I'm Yours by Jason Mraz", "I Gotta Feeling by Black Eyed Peas", "Viva La Vida by Coldplay"],
    answer: "I Gotta Feeling by Black Eyed Peas",
  },
  {
    question: "Jazz emerged in what is considered America's most musical city. Which city is it?",
    choices: ["New Orleans", "Memphis", "Chicago", "Atlanta"],
    answer: "New Orleans",
  }];

  // create other game variables
  var correctAnswers = 0;
  var incorrectAnswers = 0;
  var unanswered = 0;
  var countdown = 120;
  var timer;

  // once player clicks 'start', start the game.
  $(document).on("click", "#start", function() {
    startGame();
  });

  function startGame() {
    // make the start game button disappear
    $("#start").remove();
    // set interval of timer to 1000 milliseconds
    timer = setInterval(decrement, 1000);
    // show the timer on the page
    $("#show-counter").html("<h2> Time Remaining: " + countdown + " Seconds</h2>");
    // append the questions and choices to the page
    showQuestions();
  };

  function showQuestions() {
    // loop through the array
    for (var i = 0; i < questions.length; i++) {
      // append questions to the page
      $("#contents").append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].choices.length; j++) {
      // append answers to the page corresponding to question
      $("#contents").append("<input type='radio' name='question-" + i + "' value='" + questions[i].choices[j] + "''>" + questions[i].choices[j]);
      }
    }
    // also add a submit button if player finishes before timer is up
    $("#contents").append("<br><button id='submit'>Submit</button>");
  };

    // analyze the results if player submits his/her answers before timer hits zero
    $(document).on("click", "#submit", function() {
      analyzeResults();
    });
  
  function decrement() {
    // show the timer counting down every second
    countdown--;
    $("#show-counter").html("<h2> Time Remaining: " + countdown + " Seconds</h2>");
    // when the counter reaches zero, analyze the results
    if (countdown === 0) {
      // console.log("time's up");
      analyzeResults();
    }
  };

  function analyzeResults() {
    // store value of player's answers
    var Q1 = $('input:radio[name="question-0"]:checked').val();
    var Q2 = $('input:radio[name="question-1"]:checked').val();
    var Q3 = $('input:radio[name="question-2"]:checked').val();
    var Q4 = $('input:radio[name="question-3"]:checked').val();
    var Q5 = $('input:radio[name="question-4"]:checked').val();
    var Q6 = $('input:radio[name="question-5"]:checked').val();

    // HOW TO MAKE THIS MORE DRY??
    //console.log(Q1, Q2, Q3, Q4, Q5, Q6);

    // compare that with the actual answer
    // if not answered, unanswered count +1
    if (Q1 === undefined) {
      unanswered++;
    }
    // if string in radio value selected is the same as the answer, correct answer count +1
    else if (Q1 === questions[0].answer) {
      correctAnswers++;
    }
    // otherwise, incorrect answer count +1
    else {
      incorrectAnswers++;
    }

    if (Q2 === undefined) {
      unanswered++;
    }
    else if (Q2 === questions[1].answer) {
      correctAnswers++;
    }
    else {
      incorrectAnswers++;
    }

    if (Q3 === undefined) {
      unanswered++;
    }
    else if (Q3 === questions[2].answer) {
      correctAnswers++;
    }
    else {
      incorrectAnswers++;
    }

    if (Q4 === undefined) {
      unanswered++;
    }
    else if (Q4 === questions[3].answer) {
      correctAnswers++;
    }
    else {
      incorrectAnswers++;
    }

    if (Q5 === undefined) {
      unanswered++;
    }
    else if (Q5 === questions[4].answer) {
      correctAnswers++;
    }
    else {
      incorrectAnswers++;
    }

    if (Q6 === undefined) {
      unanswered++;
    }
    else if (Q6 === questions[5].answer) {
      correctAnswers++;
    }
    else {
      incorrectAnswers++;
    }
    // once the results have been analyzed, show the results onto the page
    showResults();
  };

  function showResults() {
    // clear the timer
    clearInterval(timer);
    // remove it from the page
    $("#show-counter").remove();
    // also hide the questions/choices
    $("#contents").remove();
    // show the player his/her results
    $("#results").append("<h3>Correct Answers: " + correctAnswers + "</h3>");
    $("#results").append("<h3>Incorrect Answers: " + incorrectAnswers + "</h3>");
    $("#results").append("<h3>Unanswered: " + unanswered + "</h3>");
  };
  
});