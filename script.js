$(document).ready(function() {

var magic8Ball = {};

magic8Ball.randomAnswers = ["Oh no, honey…","Yaaaas!", "No way!", "Duh.", "Of course!"];
	
magic8Ball.response = function(question) {

//Begin process of retrieving a random number from list of responses
var randomNumber = Math.random();

//make a random number between 0 and number of items in array
var randomNumberForListOfAnswers = randomNumber * this.randomAnswers.length;

var randomIndex = Math.floor(randomNumberForListOfAnswers);

//use this number to index a random number from the answers array
var answer = this.randomAnswers[randomIndex];

   $("#8ball").effect("shake");
   $("#answer").text( answer );
   $("#answer").fadeIn(3000);
  
	console.log(question);
	console.log(answer);
    
};
	$("#answer").hide();
	
var onClick = function() {
	$("#answer").hide();
	
	var question = prompt("ASK A YES/NO QUESTION!");
    magic8Ball.response(question);
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
};
 
$("#questionButton").click( onClick );
	
});