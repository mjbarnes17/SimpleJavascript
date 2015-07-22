// Useful Array methods

/* Array.join()
* var daysInWeek = ['mon', 'tue','wed', 'thur', 'fri', 'sat', 'sun'];
*	var daysString = daysInWeek.join(', ');
* console.log(daysString);
*	--> mon, tue, wed, thur, fri, sat, sun
*
*/

/* Array.concat()
* var daysInWeek1 = ['mon', 'tue','wed'];
* var daysInWeek2 = ['thur', 'fri', 'sat', 'sun'];
* var totalDaysInWeek = daysInWeek1.concat(daysInWeek2);
* console.log(totalDaysInWeek);
* --> ["mon", "tue", "wed", "thur", "fri", "sat", "sun"]
*
*/

/* Array.indexOf()
*	var daysInWeekDays = ['mon', 'tue','wed', 'thur', 'fri'];
*	var position = daysInWeekDays.indexOf('thur');
*	console.log(position);
*	--> 3
*
*	position = daysInWeekDays.indexOf('sat');
*	console.log(position);
*	--> -1
*
*/

/* This is a two dimensional array
*	To make the 2D array easier to read I put each individual array on a new line
*	the songsPlayList var has one [with 21 [each with 2 values]'s inside].
*	The two values within each nested [] has a song name & the artist name.
*
*/
var songsPlayList = [
	["Gumbo", "Jay Rock"],
	["Voodoo Chile", "Jimi Hendrix"],
	["Pantomime", "Incubus"],
	["King Kunta", "Kendrick Lamar"],
	["The Hard", "Freddie Gibs"],
	["After School", "Dom Kennedy"],
	["The Heavy Song", "Wale"],
	["Parking Lot Pimps", "Curren$y"],
	["Picture That", "Ab-Soul"],
	["Escuela De Calor", "Radio Futura"],
	["Caught In A Daze", "David Dallas"],
	["Trash Man", "Jimi Hendrix"],
	["Watermelon Sundae", "Dom Kennedy"],
	["Wynona's Big Brown Beaver", "Primus"],
	["Pretty Flacko", "A$AP Rocky"],
	["Sunrise", "Childish Gambino"],
	["Fire", "Big Sean"],
	["93 'Til Infinity", "Souls Of Mischief"],
	["She Said", "Mac Miller"],
	["Elements Swing", "Wax"],
	["Hit A Lick", "Sir Michael Rocks"]
];

// This print() takes in an argument in message parameter changes the content within a specified element in the DOM
function print(message) {
	// The divOutput var holds the div id="playlist-output"
	var divOutput = document.getElementById('playlist-output');
	// Then divOutput var gets access to the div tag and stores the whatever argument is passed to the message parameter
	divOutput.innerHTML = message;
}

// This printSongs() will take the songsPlayList[] and display them in the DOM
function printSongs(songs) {
	// This listHTML var will store and concat all of the array values and all the HTML elements needed
	var listHTML = '<h3 class="list-group-item-heading">Songs Playlist</h3>';
	listHTML += '<div class="list-group">';
	// This for loop iterates through the array using the .length property
	// In this case the for will go through all 21 arrays in songsPlayList
	for (var i = 0; i < songs.length; i++) {
		// Each time the for loop goes over each array the song and artist value is stored and concatenated to the listHTML var
		listHTML += '<a href="#" class="list-group-item"><strong>' + songs[i][0] + '</strong> by <i>' + songs[i][1] + '</i></a>';
	}
	// At the end of the for loop the closing '</div>' is concatenated to the listHTML var
	listHTML += '</div>';
	// Then the print() is called to display the listHTML argument into the specified element in the DOM
	print(listHTML);
}

// Call the printSongs() and passes the songsPlayList[] as the argument
printSongs(songsPlayList);
