//prompt("Guess what letter I'm thinking of?")

var letterChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var wins = 0;
var losses = 0;
var guessCounter = 4;
var guessList = [];
var guessList2 = [];

function loadText () {
	var html = "<h1>The Psychic Game</h1><p><br>Guess what letter I am thinking of?" + "<br>WINS: " + wins + "<br>LOSSES: " + losses + "<br>Guesses Left: " + guessCounter + "<br>Your guesses so far:" + "<br>" + "</p>";
	document.querySelector(".textBody").innerHTML = html;
	document.querySelector(".guesses").innerHTML = guessList2;

	}


loadText();

function winner() {
	wins++;
	console.log("wins " + wins);
	loadText();

}

function loser () {
	losses++;
	console.log("losses " + losses)
	loadText();
}

	
// LOOP for guess counter
for (var i = 4; i > 0; --i) {
	
document.onkeyup = function(event) {
 // Determines which key was pressed. 
  var userGuess = event.key;

  if (guessList2.indexOf(userGuess) > -1) {
	alert('already selected');

} else if (letterChoices.indexOf(userGuess) === -1){
   alert("not a letter");

} else if (letterChoices.indexOf(userGuess) > -1) {
    guessList2.push(userGuess);
    guessCounter = i;

}

// pushes pressed key to GUESS LIST
 
  //guessCounter = i;
 
// sets up computer logic to 
 //var computerGuess = letterChoices[Math.floor(Math.random() * letterChoices.length)];

var computerGuess = "b";

if (userGuess === computerGuess) {

	winner();
	
} else  {
	loser();


	
}

loadText();
}




}