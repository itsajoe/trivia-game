// array of questions
var questions = ["What animal is sometimes refered to as a ship of the desert?", 
"What is a Dromophobiac afraid of?", 
"The modern day sandwich was created during which century?", 
"Which movie was Pixar's first feature film?", 
"What type of stuffed animal does an Arctophile collect?",
"What is Europe's longest river?"];
// array of possible answers for each questions
var possiblesQuestionOne = ["A Camel", "An Addax", "A tortoise", "An Ant"];
var possiblesQuestionTwo = ["Deficating in public restrooms", "Eating irregular foods", "Crossing the street", "The ocean"];
var possiblesQuestionThree = ["17th", "18th", "19th", "16th"];
var possiblesQuestionFour = ["Toy Story", "Monsters, Inc.", "Cars", "A bug's life"];
var possiblesQuestionFive = ["Cats", "Giraffes", "Dogs", "Teddy Bears"];
var possiblesQuestionSix = ["Don", "Ural", "Volga", "Kama"];

var timeLeft = 30;
var intervalId;
var index = 0;
var numCorrect = 0;
var incorrect = 0;





function timing () {
	
	// console.log(timeLeft);
	timeLeft --;
	$("#timeLeft").text(timeLeft);
	if (timeLeft === 0) {
		toSlow();
		stop();
		setTimeout (begin, 5000);
	}
};
function toSlow () {
	
		$("#question").text("Too Slow");
		$("#answerOne").hide();
		$("#answerTwo").hide();
		$("#answerThree").hide();
		$("#answerFour").hide();
		
		// clearInterval(intervalId);

	
};
function transition () {
	$("#question").show();
	$("#answerOne").show();
		$("#answerTwo").show();
		$("#answerThree").show();
		$("#answerFour").show();
};
function stop () {
	clearInterval(intervalId);
};
$(".answer").on("click", function correct (e) {
	// console.log($(e.target).text());
	if ($(e.target).text() == "A Camel" || $(e.target).text() == "Crossing the street" || $(e.target).text() == "18th" 
	  || $(e.target).text() == "Toy Story" || $(e.target).text() == "Teddy Bears" || $(e.target).text() == "Volga") {
		numCorrect++;
		$("#question").text("Correct");
		$("#answerOne").html("<iframe src=https://giphy.com/embed/iwVHUKnyvZKEg width='480' height='421' frameBorder='0' ></iframe>");
		$("#answerTwo").hide();
		$("#answerThree").hide();
		$("#answerFour").hide();
		stop();
		setTimeout (begin, 3000);
		
	} else {
		incorrect++;
		$("#question").text("Incorrect");
		$("#answerOne").html("<iframe src='https://giphy.com/embed/l0O9zBvk5nZ71Molq' width='480' height='360' frameBorder='0'></iframe>" );
		$("#answerTwo").hide();
		$("#answerThree").hide();
		$("#answerFour").hide();
		stop();
		setTimeout (begin, 3000);
		
	}
});


function begin () {
	intervalId = setInterval(timing, 1000);
	timeLeft = 30;
	$("#timeLeft").text(timeLeft);
	$("#question").text(questions[index]);
	
	if (index == 0) {
		$("#answerOne").text(possiblesQuestionOne[0]);
		$("#answerTwo").text(possiblesQuestionOne[1]);
		$("#answerThree").text(possiblesQuestionOne[2]);
		$("#answerFour").text(possiblesQuestionOne[3]);
	} else if (index == 1) {
		transition ()
		$("#answerOne").text(possiblesQuestionTwo[0]);
		$("#answerTwo").text(possiblesQuestionTwo[1]);
		$("#answerThree").text(possiblesQuestionTwo[2]);
		$("#answerFour").text(possiblesQuestionTwo[3]);
	} else if (index == 2) {
		transition ()
		$("#answerOne").text(possiblesQuestionThree[0]);
		$("#answerTwo").text(possiblesQuestionThree[1]);
		$("#answerThree").text(possiblesQuestionThree[2]);
		$("#answerFour").text(possiblesQuestionThree[3]);
	} else if (index == 3) {
		transition ()
		$("#answerOne").text(possiblesQuestionFour[0]);
		$("#answerTwo").text(possiblesQuestionFour[1]);
		$("#answerThree").text(possiblesQuestionFour[2]);
		$("#answerFour").text(possiblesQuestionFour[3]);
	} else if (index == 4) {
		transition ()
		$("#answerOne").text(possiblesQuestionFive[0]);
		$("#answerTwo").text(possiblesQuestionFive[1]);
		$("#answerThree").text(possiblesQuestionFive[2]);
		$("#answerFour").text(possiblesQuestionFive[3]);
	} else if (index == 5) {
		transition ()
		$("#answerOne").text(possiblesQuestionSix[0]);
		$("#answerTwo").text(possiblesQuestionSix[1]);
		$("#answerThree").text(possiblesQuestionSix[2]);
		$("#answerFour").text(possiblesQuestionSix[3]);
	};
	
	console.log(index);
	
	if (index  > 5) {
		stop();
		transition();
		$("#question").text("Game Over");
		var newDiv = $("<div>").text("You got " + numCorrect + " correct!");
		var newerDiv = $("<div>").text("You got " + incorrect + " incorrect.");
		$("#question").append(newDiv);
		$("#question").append(newerDiv);
		$("#answerOne").hide();
		$("#answerTwo").hide();

		$("#answerThree").hide();
		$("#answerFour").hide();

	};
	index ++;
	


};
		$("#question").hide();
		$("#answerOne").hide();
		$("#answerTwo").hide();
		$("#answerThree").hide();
		$("#answerFour").hide();
$("#begin").on("click", function startTheWholeThing () {
	$("#begin").hide();
	transition();
	begin();
});









