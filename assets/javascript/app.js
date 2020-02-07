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

var game = {

    start: function() {
        console.log("clicked");
        
    }
    /*
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
    */
}

// Click events
$("#start").on("click", function(event) {
    event.preventDefault();
    game.start();
})

$(document).on("click", "#done", function() {
    game.done();
})