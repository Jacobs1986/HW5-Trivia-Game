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
let buttonCount = 1

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
    } else
        console.log("The answer is wrong.")
}


// Click events
$("#start").on("click", function(event) {
    event.preventDefault();
    $("#start").remove();
    loadQuestion();
})

$(document).on("click", "#done", function() {
    checkAnswer();
})

$(document).on("click", "#next", function() {
    checkAnswer();
    questionCount++
    buttonCount++;
    $(card).html("");
    loadQuestion();
})