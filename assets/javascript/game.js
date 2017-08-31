//prompt("Guess what letter I'm thinking of?")
$(document).ready(function(){

var wins = 0;
var losses = 0;
var guessCounter = 5;
var guessList = [];
var guessList2 = [0];
var computerGuess = [];
var letterChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];




function resetGame() {
guessList2 = [];
guessCounter = 5;
console.log("GAME RESET ::: Current computer guess " + computerGuess);

};


	document.querySelector(".winsText").innerHTML = "WINS: " + wins;
	document.querySelector(".lossesText").innerHTML = "LOSSES: " + losses;
	document.querySelector(".guessCount").innerHTML = "GUESSES REMAINING: " + guessCounter;
	


	document.querySelector(".guesses").innerHTML = guessList2.join(" ");

	console.log(guessList2);


var computerGuess = letterChoices[Math.floor(Math.random() * letterChoices.length)];

console.log("GAME RESET ::: Current computer guess " + computerGuess);


					document.onkeyup = function(event) {		
						var userGuess = event.key; 
						

						if (userGuess === computerGuess) {
							wins = wins + 1;
							document.querySelector(".winsText").innerHTML = "WINS: " + wins;

							console.log('you win-----');
						}
							else if (guessCounter > 0){
								guessCounter = guessCounter - 1;
								console.log("GUESS COUNTER " + guessCounter);
								document.querySelector(".guessCount").innerHTML = "GUESSES REMAINING: " + guessCounter;
								
						} else if (guessCounter === 0) {
							losses = losses + 1;
							document.querySelector(".lossesText").innerHTML = "LOSSES: " + losses;
							console.log("reset game");
							resetGame();

						}

					

						
					}


  // LOSSES TEXT WORKING 
 



// if (guessList2.indexOf(userGuess) > -1) {

// 				alert('already selected');


// 			} else if (letterChoices.indexOf(userGuess) > -1) {

// 							guessList2.push(userGuess);
		
// 				if (userGuess === computerGuess) {
// 									winner();
									 
// 						} else if (guessList2.length === 9) {
// 							guessList2 = [];
// 							guessCounter = 9;
// 							losses++;
							
// 						} else {

// 					guessCounter = guessCounter -1;

// 					}
// 					}

// pushes pressed key to GUESS LIST
 
// sets up computer logic to 
//var computerGuess = letterChoices[Math.floor(Math.random() * letterChoices.length)];


});





