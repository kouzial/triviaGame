// One timer
// Button to start the game
// Data structure holding question and answers
// Show and hide the question
// Reset the game

    //Set a variable equal to the time remaining for a question.
    //set the div with ID "Timer"
function timeOut () {
    $('#timer').text(timerNumber);
    function countDown(){
        if(timerNumber > 0){
        timerNumber--;
        $('#timer').text(timerNumber);
        } else{
        $('#game').text("Time is up!");
        }
    };
    timer = setInterval(countDown, 1000);
}

$("#startButton").on("click",function() { 
	$("#start").remove();
	generate();


})


// Global game variables


var question = 0;
var correct = 0;
var wrong =0;
var timer;
var timerNumber = 5;


// Creating aray that holds data that will be used.
var questions = [

["To which Greek god is the Suez canal linked?","Poseidon", "Athena", "Zeus", "Zeus"],
["What is the deepest trench found in the ocean?", "Victoria Trench", "Wallace Trench", "Mariana Trench", "Mariana Trench"],
["What is the capital of Canada?", "Ottawa", "Toronto", "Vancouver", "Ottawa"]

];

// Function to generate question

function generate () {

$("#game").empty();

timeOut();

$("#game").append($("<h2>").text(questions[question][0]));

for (var i =1; i<4; i++) {

	var button =$("<button>").text(questions[question][i]);
	button.addClass("choices");
	$("#game").append(button);


	}

}

// Function that moves you to the next question

function nextQuestion () {
	clearInterval(timer);
	question++;
	timerNumber = 5;
	if (question>=questions.length) {
		setTimeout(function () {$("#game").html("Game Over!")}, 3000);
	}
	else
	{
		setTimeout(generate, 3000);
	}
}

// Onclick function for the choices.

function choiceClick () {
	$("#timer").empty();
	if	($(this).text() === questions[question][4]) {

		correct++;
		$("#game").html("Correct Answer!");

	}
	else {
		wrong++;
		$("#game").html("Incorrect Answer!");
	}
	nextQuestion();



}

// Generating HTML on the click of any choice button.

$(document).on("click", ".choices",  choiceClick);
















// }