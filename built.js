
//Declare variables
var correctAnswer = false;
var randomNumber = chooseRandom();
var numberTries = 0;

var input = document.getElementById("guess");
var checkBtn = document.getElementById("check");
var resetBtn = document.getElementById("reset");
var statusText = document.getElementById("status");

function chooseRandom(){
	return Math.floor((Math.random() * 100) + 1);
}

function guessGame(guess) {
	// Cache users input
	guess = input.value;
	console.log("Guess: " + guess);
	console.log("RandomNumber: " + randomNumber);
	// First, we will check that the number is between 1 and 100. Then we'll proceed to check the selected number with the one randomly selected.
	if ( guess < 1 || guess > 100 || isNaN(guess)) {
		statusText.innerHTML(guess + " is an invalid input. It must be a number between the range of 1 and 100.");
	} else {
		// Add the number of attemps.
		tries();
		if (guess == randomNumber) {
			statusText.innerHTML = "Congratz, you have guessed the number. It was " + guess + ". And you guessed in " + numberTries + " attempts.";
			correctAnswer = true;
		} else if ( guess > randomNumber ) {
			statusText.innerHTML = "Your number is too high.";
		} else if ( guess < randomNumber ) {
			statusText.innerHTML = "Your number is too low.";
		}
	}
}

function tries() {
	numberTries += 1;
	document.getElementById("numTries").innerHTML = numberTries;
}


//Function calls
chooseRandom();

checkBtn.addEventListener("click", function() {
	guessGame(guess);
});

input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        checkBtn.click();
    }
});


resetBtn.addEventListener("click", function() {
	randomNumber = chooseRandom();
	numberTries = 0;
	document.getElementById("numTries").innerHTML = 0;
});

