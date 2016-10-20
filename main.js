// require prompt to use to make the game 
var prompt = require('prompt');

//require the objects/exports you will use
var game = require('./game.js');
var word = require('./word.js');

prompt.start();

var hangManGame = {
	wordBank : game // create or import a list of words
	wordsWon : 0 // count of words Found
	guessesRemaining : 10, //per word
	currentWrd : null //the word object

	startGame : function (wrd){
		//make sure the user has 10 guesses
		resetGuessesRemaining();
		//get a random word from the array
		var currentWrd = this.wordBank[Math.floor(Math.random() * this.wordBank.length)];
		//populate currentWrd (made from Word constructor function) object with letters
		this.currentWrd.getLets();
		console.log(this.currentWrd.wordRender());
		this.keepPromptingUser();
	},

	resetGuessesRemaining : function(){
    // reset guess count for new game	
    	this.guessesRemaining = 10;
	},

	keepPromptingUser : function(){
		var self = this;

		prompt.get(['guessLetter'], function(err, result) {
		    // result is an object like this: { guessLetter: 'f' }
		    // console.log(result);
		    console.log(result);
		    
			// console log the letter you chose
			console.log("Chosen Letter: " + result.guessLetter);

		    // this checks if the letter was found and if it is then it sets that specific letter in the word to be found
		    var letterCheck = self.currentWrd.checkIfLetterFound(result.guessLetter);

		    // if the user guessed incorrectly minus the number of guesses they have left
			// and console.log if they were incorrect or correct
		    if (letterCheck == 0) {
		    	self.guessesRemaining--;
		    	console.log("Incorrect letter");
		    }
		   	else {
 				console.log("Correct");
 					if(self.currentWrd.didWeFindTheWord()) {
 						console.log("The word is : " + self.currentWrd.wordRender());
 						wordsWon++
 						return;
 					}
 			}
 			console.log("Word: "+ self.currentWrd.wordRender());
 			
 			console.log("Guesses remaining: " + self.guessesRemaining);
 			if((self.guessesRemaining > 0) && (self.currentWrd.found == false)){
 				self.keepPromptingUser();
 			}
 			else if(self.guessesRemaining == 0){
 				console.log("[Game over] Correct Word : ", self.currentWrd.wrd);
 			} else {
 				console.log(self.currentWrd.wordRender());
 			}		
		    
		});
	}


};

hangManGame.startGame();
