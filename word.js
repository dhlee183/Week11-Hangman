// require your letter objects
var Letter = require('./letter.js');

var Word = function(wrd){
// property to store the string wrd
	this.wrd = wrd;
// a collection of letter objects
	this.letters = [];
// property is the word found?
	this.found = false;

	this.getLets = function() {
// populate the collection above with new Letter objects
		for (var i = 0; this.wrd.length; i++) {
			var newLetter = new Letter(this.wrd[i]);
			this.letters.push(newLetter);
		}
	};
	
	//found the current word
	this.didWeFindTheWord = function() {
		//sets this.found in the word object to true or false if all letter objects have a true value in their appear property
		if(this.letters.every(function(lett) {
			return lett.appear = true;
		}));

		return this.found = true;
	};

	this.checkIfLetterFound = function(guessLetter) {
// iterate through the collection of letter Objects
		var whatToReturn = 0;
		this.letters.forEach(function(lett) {
			if(lett.letter == guessLetter) {
				whatToReturn++;
			}
		})
// if guessLetter matches Letter property, the letter object should be shown
		return whatToReturn;
	};

	this.wordRender = function() {
// render the word based on if letters are found or not found
		var str = "";

		this.letters.forEach(function(lett) {
			str += lett.letterRender();
		})

		return str;
	};
}

// export to use in main.js
module.exports = Word;
