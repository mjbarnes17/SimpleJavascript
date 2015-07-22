// This is a 2D array that has five [with 2 values within each[] inside]
// Each array holds a question and a answer
var quiz = [
	["What is 2 * 2?", 4],
	["How many state are in the United States?", 50],
	["What is 2 + 6?", 8],
	["How many legs does a spider have?", 8],
	["How many years are in a decade?", 10]
];
// Declared an empty array to hold the correctly anwsered questions
var correctQuestions = [];
// Declared an empty array to hold the questions answered incorrectly
var incorrectQuestions = [];
// Will hold the inner HTML content/string
var listHTML;
// Stores the 2nd item in each [] within the main quiz[]
var answer;
// Stores the 1st item in each [] within the main quiz[]
var question;
// Will hold the user input
var response;
// Sets numberCorrect incrementer to 0
var numberCorrect = 0;
// Sets numberIncorrect incrementer to 0
var numberIncorrect = 0;

// This print() takes in an argument in message parameter changes the content within a specified element in the DOM
function print(message) {
	// The divOutput var holds the div id="quiz-output"
	var divOutput = document.getElementById('quiz-output');
	// Then divOutput var gets access to the div tag and stores the whatever argument is passed to the message parameter
	divOutput.innerHTML = message;
}

// This printQuizResults() will take the correctQuestions[] & then the incorrectQuestions[] as the argument
// It will then display each array in the DOM
function printQuizResults(quizArr) {
	// This listHTML concat and store this string of div that will create the list-group that will hold all thw array values
	listHTML += '<div class="list-group">';
	// This for loop iterates through the array using the .length property
	for (var i = 0; i < quizArr.length; i++) {
		// Each time the for loop goes over each item in the array & stores and concatenates it to the listHTML var
		listHTML += '<a href="#" class="list-group-item">' + quizArr[i] + '</a>';
	}
	// listHTML var stores the closing div tag string
	listHTML += '</div>';
	// Then the print() is called to display the listHTML argument into the specified element in the DOM
	print(listHTML);
}

// This for loop iterates throught the quiz[] by using the .length property
for (var i = 0; i < quiz.length; i++) {
	// This stores the question in the [0] 1st item
	question = quiz[i][0];
	// This stores the answer in the [1] 2nd item
	answer = quiz[i][1];
	// The response var stores the converted integer data type after the user is prompted for the input
	response = parseInt(prompt(question));
	// This checks to see if the response var is equal to the answer var
	if (response === answer){
		// If true then the question var is pushed/added to the correctQuestions[]
		correctQuestions.push(question);
		// The numberCorrect pre incrementer increases by one
		numberCorrect++;
	} else {
		// Else the questions var is pushed/added to the incorrectQuestions[]
		incorrectQuestions.push(question);
		// The numberIncorrect pre incrementer increases by one
		numberIncorrect++;
	}
}

// Everything here will be Displayed in the DOM
listHTML = '<h3 class="list-group-item-heading">Quiz Results!</h3>';
listHTML += '<br>';
listHTML += '<h4 class="list-group-item-heading">Questions you got correct!</h4>';
listHTML += '<p>You got <strong>' + numberCorrect + '</strong> question(s) correct!</p>';
printQuizResults(correctQuestions);
listHTML += '<h4 class="list-group-item-heading">Questions you got incorrect!</h4>';
listHTML += '<p>You got <strong>' + numberIncorrect + '</strong> question(s) incorrect!</p>';
printQuizResults(incorrectQuestions);
