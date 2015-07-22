// <ul class="list-group">
// 	<h3 class="list-group-item-heading">Quiz</h3>
// 	<b class="list-group-item-text">You got ...</b>
// 	<li class="list-group-item list-group-item-danger">Vestibulum at eros</li>
// 	<li class="list-group-item list-group-item-danger">Vestibulum at eros</li>
// 	<li class="list-group-item list-group-item-danger">Vestibulum at eros</li>
// <br>
// 	<b class="list-group-item-text">You got ...</b>
// 	<li class="list-group-item list-group-item-success">Dapibus ac facilisis in</li>
// 	<li class="list-group-item list-group-item-success">Dapibus ac facilisis in</li>
// 	<li class="list-group-item list-group-item-success">Dapibus ac facilisis in</li>
// </ul>
var quiz = [
	["What is 2 * 2?", 4],
	["How many state are in the United States?", 50],
	["What is 2 + 2?", 4],
	["How many legs does a spider have?", 8],
	["How many years are in a decade?", 10]
];
var listHTML;
var answer;
var question;
var response;
var numberCorrect = 0;
var numberIncorrect = 0;

function print(message) {
	var divOutput = document.getElementById('quiz-output');
	divOutput.innerHTML = message;
}

for (var i = 0; i < quiz.length; i++) {
	question = quiz[i][0];
	answer = quiz[i][1];
	response = parseInt(prompt(question));
	if (response === answer){
		numberCorrect++;
	} else {
		numberIncorrect++;
	}
}

listHTML = '<p>You got <strong>' + numberCorrect + '</strong> question(s) correct!</p>';
listHTML += '<p>You got <strong>' + numberIncorrect + '</strong> question(s) incorrect!</p>';
print(listHTML);
