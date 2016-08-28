
			/************************/
			/****** Javascript ******/
			/************************/

		var correctAnswer = false;
		var randomNumber = Math.floor((Math.random() * 100) + 1);
		var numberTries = 0;
		
		// Actual 'engine' of the game: THIS FUNCTION.

		function guessGame() {

		// Gina is a genious. This variable should be nested inside the function contrary to the other ones.
		var guess = (document.getElementById("guess").value);
		// First, we will check that the number is between 1 and 100. Then we'll proceed to guess the selected number.

			if ( guess < 1 || guess > 100) {
				alert("Your number must be between 1 and 100");
			}	else {

				if (guess == randomNumber) {
					alert("Congratz, you have guessed the number. It was " + guess + ". And you guessed in " + numberTries + " attempts.");
					correctAnswer = true;

				} else if ( guess > randomNumber ) {
					alert("Your number is too high.");
				
				} else if ( guess < randomNumber ) {
					alert("Your number is too low.");
				
				} else { 
					alert("That's not a number");
				}	
			}
		}

		function tries() {
			numberTries += 1;
			document.getElementById("numTries").innerHTML = numberTries;
		}
