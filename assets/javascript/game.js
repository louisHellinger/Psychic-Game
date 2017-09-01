//prompt("Guess what letter I'm thinking of?")


var wins = 0;
var losses = 0;
var guessCounter = 4;
var guessList = [];
var guessList2 = [];
var computerGuess = [];
var letterChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];




function resetGame() {
guessList2 = [];
guessCounter = 4;
console.log("GAME RESET ::: Current computer guess " + computerGuess);

};

function buildList(theLetter){
			if (guessList2.indexOf(theLetter) === -1) {
				guessList2.push(theLetter);
			document.querySelector(".guesses").innerHTML = guessList2.join("");
			} else if (guessList2.indexOf(theLetter) > -1){
					console.log("you have used this already");
			}

};

	// document.querySelector(".winsText").innerHTML = "WINS: " + wins;
	// document.querySelector(".lossesText").innerHTML = "LOSSES: " + losses;
	// document.querySelector(".guessCount").innerHTML = "GUESSES REMAINING: " + guessCounter;


	



var computerGuess = letterChoices[Math.floor(Math.random() * letterChoices.length)];
console.log ("this is the Computer Guess:  " + computerGuess);

			document.onkeyup = function(event) {
				var userGuess = event.key;

						 buildList(userGuess);
						
						if (userGuess === computerGuess) {
							wins = wins + 1;
							document.querySelector(".winsText").innerHTML = "WINS: " + wins;
						
							
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



 


////document.querySelector(".guesses").innerHTML = guessList2.push(userGuess);
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








