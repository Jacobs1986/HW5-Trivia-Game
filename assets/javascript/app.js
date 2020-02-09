console.log("linked")
let card = $("#quiz-area")

// Questions for the game
let questions = [
    {
        question: "What is the answer to question 1?",
        answers: ["a", "b", "c", "d"],
        correct: "c"
    },
    {
        question: "What is the answer to question 2?",
        answers: ["A", "B", "C", "D"],
        correct: "A"
    }
];
let questionCount = 0;
let buttonCount = 1;
let timeLimit = 10;
let timer = null;

let correctCount = 0;
let missedCount = 0;

loadQuestion = () => {
    console.log("Question will be loaded")
    let questionText = questions[questionCount].question;
    card.append(`<h2>${questionText}</h2>`);
    // load the answers
    let answers = questions[questionCount].answers;
    answers.forEach(element => {
        card.append(`<input type='radio' name='question-${questionText}' value='${element}'>${element}<br>`);
    })
    // questionCount++
    if (buttonCount < 2) {
        card.append("<br><button id='next'>Next</button>");
    } else
        card.append("<br><button id='done'>Done</button>")
}

checkAnswer = () => {
    let inputs = card.children("input:checked")
    console.log(inputs.val());
    let correctAnswer = questions[questionCount].correct
    if (inputs.val() === correctAnswer) {
        console.log("You got the correct answer")
        correctCount++
    } else {
        console.log("The answer is wrong.")
        missedCount++
    }
}

 countDown = () => {
    timeLimit--;
    $("#timer").html(timeLimit);
    if (timeLimit === 0) {
        console.log("TIMES UP!")
        done();
    }
}

done = () => {
    clearTimeout(timer);
    $("#quiz-area").empty();
    $("#timer").empty();
    console.log(`You got this many right: ${correctCount}`)
    console.log(`You got this many wrong: ${missedCount}`)
}


// Click events
$("#start").on("click", function(event) {
    event.preventDefault();
    $("#start").remove();
    timer = setInterval(countDown, 1000);
    loadQuestion();
})

$(document).on("click", "#done", function() {
    checkAnswer();
    done();
})

$(document).on("click", "#next", function() {
    checkAnswer();
    questionCount++
    buttonCount++;
    $(card).html("");
    loadQuestion();
})