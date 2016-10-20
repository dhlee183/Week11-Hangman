var Letter = function(letter) {
	
// property to store the actual letter
	this.letter = letter;	

// property/boolean if the letter can be shown
	this.appear = false; 

	this.letterRender = function() {
		//if appear is false then show the _
		if (this.appear = false) {
			return "_";
		} else {
			return this.letter;
		}
		//else appear is true then show character
	};
};

// export to use in word.js
module.exports = Letter;