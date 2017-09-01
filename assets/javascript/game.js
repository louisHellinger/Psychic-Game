//prompt("Guess what letter I'm thinking of?")


var wins = 0;
var losses = 0;
var guessCounter = 9;
var guessList = [];
var guessList2 = [];
var computerGuess = [" "," "];
var letterChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

function createComputerGuess(rand) {
	computerGuess = letterChoices[Math.floor(Math.random() * letterChoices.length)];

	var rand = computerGuess;
	//console.log ("this is the Computer Guess:  " + computerGuess);

};

function updateUsedList(){
	document.querySelector(".guesses").innerHTML = guessList2.join("");
}

function resetCounter () {
		guessCounter = 9;
		document.querySelector(".guessCount").innerHTML = "GUESSES REMAINING: " + guessCounter;

}


function resetGame() {
		guessList2 = [""];
		resetCounter();
		updateUsedList();
		createComputerGuess();
		
}



function buildList(theLetter){


			if (guessList2.indexOf(theLetter) === -1) {
				guessList2.push(theLetter);
				updateUsedList();

			//document.querySelector(".guesses").innerHTML = guessList2.join("");

			guessCounter --;

			document.querySelector(".guessCount").innerHTML = "GUESSES REMAINING: " + guessCounter;

			} else if (guessList2.indexOf(theLetter) > -1){
					console.log("you have used this already");
			}

}
	

resetGame(computerGuess);


	document.onkeyup = function(event) {

		var userGuess = event.key;
		
			
			if (letterChoices.indexOf(userGuess)  > -1) {
							if (userGuess === computerGuess) {
								wins++;
								document.querySelector(".winsText").innerHTML = "WINS: " + wins;
								resetGame();
							
								
							} else if (guessCounter === 1) {
								losses ++;
								document.querySelector(".lossesText").innerHTML = "LOSSES: " + losses;
								resetGame();

							}


							else { 

								buildList(userGuess); 

							}
						};

			}


			 