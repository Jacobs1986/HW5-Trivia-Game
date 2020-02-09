console.log("linked")
let card = $("#quiz-area")

// Questions for the game
let questions = [
    // question 1
    {
        question: "Who was the original voice actor for Mickey Mouse?",
        answers: ["Bret Iwan", "Walt Disney", "Clarence Nash", "Les Perkins"],
        correct: "Walt Disney"
    },
    // question 2
    {
        question: "Which film was the first animated film to win the Golden Globe for Best Motion Picture?",
        answers: ["The Little Mermaid", "Aladdin", "The Hunchback of Notre Dame", "Beauty and the Beast"],
        correct: "Beauty and the Beast"
    }, 
    // question 3
    {
        question: "In what year did Disneyland first open it's magical doors?",
        answers: ["1955", "1960", "1945", "1956"],
        correct: "1955"
    },
    // question 4
    {
        question: "Mickey's canine companion Pluto had a different name one time. What was it?",
        answers: ["Chance", "Buddy", "Rover", "Milo"],
        correct: "Rover"
    },
    // question 5
    {
        question: "What was the first show that aired on the Disney Channel in 1983",
        answers: ["Duck Tales", "Still the Beaver", "Welcome to Pooh Corner", "Good Morning, Mickey!"],
        correct: "Good Morning, Mickey!"
    },
    // question 6
    {
        question: "\"What's the big idea!?\" is a famouse phrase from which character?",
        answers: ["Minnie Mouse", "Donald Duck", "Goofy", "Daisy Duck"],
        correct: "Donald Duck"
    },
    // question 7
    {
        question: "What was the last film Walt Disney produced before he passed away in 1966",
        answers: ["The Fox and the Hound", "The Jungle Book", "Robin Hood", "The Rescuers"],
        correct: "The Jungle Book"
    },
    // question 8
    {
        question: "The years between 1989 and 1999 is know as what?",
        answers: ["The Disney Renaissance", "Disney's Golden Years", "The Mickey Decade", "Fantasia"],
        correct: "The Disney Renaissance"
    },
    // question 9
    {
        question: "Disney World is a magical place, but it was also the place where this iconic band broke up. Who was it?",
        answers: ["The Beatles", "The Who", "The Monkees", "Yes"],
        correct: "The Beatles"
    },
    {
        question: "",
        answers: [],
        correct: ""
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