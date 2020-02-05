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

let game = {
    start: function() {
        console.log("clicked");
        for (let i = 0; i < questions.length; i++) {
            card.append(`<h2>${questions[i].question}</h2>`);
            for (j = 0; j < questions[i].answers.length; j++) {
                card.append(`<input type='radio' name='question-${i}' value='${questions[i].answers[j]}'>${questions[i].answers[j]}`);
            }
        }
        $("#start").remove()
        card.append("<br><br><button id='done'>Done</button>")
    },
    done: function() {
        let input = card.children("input:checked");
        for (let i = 0; i < input.length; i++) {
            console.log(input);
            if ($(input[i]).val() === questions[i].correct) {
                console.log("You guessed right");
            } else {
                console.log("You guessed wrong.")
            }
        }

        
    }
}

$("#start").on("click", function(event) {
    event.preventDefault();
    game.start();
})

$(document).on("click", "#done", function() {
    game.done();
})