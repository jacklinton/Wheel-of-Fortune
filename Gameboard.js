var puzzle = [
	
	["What Are You Doing?", "Waiting Anxiously"],
	["Food & Drink", "Flavorful Appetizer"],
	["Thing", "Vocal Harmony"],
	["Thing", "Puffy Jacket"],
	["Phrase", "Busy With Housework"],
	["Phrase", "Ahead Of The Pack"],
	["Phase", "What A Crazy Day"],
	["Thing", "Fancy Handbag"],
	["Thing", "Utility Vehicle"],
	["Phrase", "Downright Histerical"],
	["Thing", "Popular Opinion"],
	["Phrase","Pop Open The Hood"],
	["Phrase","On My Way Home"],
	["Phrase","Hot And Juicy"],
	["Thing", "Privacy Policy"],
	["Thing", "Gust of Air"],
]
var games = puzzle



var Play = function() {
		this.rand = getRandomIntInclusive(0,(games.length-1))
	    var game = games[this.rand][1]
	    this.win = game.toUpperCase()
		this.type = games[this.rand][0]
		var gameTotal = game.split("")
		var gameWords = game.split(" ")
		this.padA = Math.floor(((28 - gameTotal.length)/2)/2)
		this.padB = Math.floor((28 - gameTotal.length)/2) + (28 - gameTotal.length)%2
		var gameA = firstLineLength(gameTotal, gameWords, this.padA)//#of words in the first line
		var gameB = gameWords.length - gameA //#of words in second line
		this.line1 = firstLine(gameA, gameWords)//words of first line
		this.line2 = secondLine(gameA, gameB, gameWords)//word of second line
		this.padC = this.padA

		games.splice(this.rand, 1)

		function getRandomIntInclusive(min, max) {
		  min = Math.ceil(min);
		  max = Math.floor(max);
		  return Math.floor(Math.random() * (max - min + 1)) + min;
		}


		function oddOrEven(padA, length) {
			if (length%2 == 1) {
				padC = padA + 1
			} else {
				padC = padA
			}
			return padC
		}


		function firstLineLength(gameTotal, gameWords, padA) {
			
			var a = 0
			var gA = padA
			if (gameTotal.length + gA > (14)) {
				while(gA <= 14) {
					a += 1
					gA += (gameWords[a-1]).length + 1
					console.log(gA, a)
				}
				return a-1
			}
			else {
				return gameWords.length
			}
			
		}

		function firstLine(gameA, gameWords) {
			var arry = []
			for (var i = 0; i < gameA; i++) {
				arry.push(gameWords[i])
			}
			return arry
		}

		function secondLine(gameA, gameB, gameWords) {
			var arry = []
			for (var i = gameA; i <= gameWords.length - 1; i++) {
				arry.push(gameWords[i])
			}
			return arry
		}
		
		this.letters = function(gameWords){
			let chars = ""
			for (var i = 0; i < gameWords.length; i++) {
				chars += "," + gameWords[i].split("")
			}
			chars = chars.split(",")
			chars.splice(0,1)
			return chars
		}
		this.letters = this.letters(gameWords)

}

var wheelRound1 = new Play
var wheelRound2 = new Play
var wheelRound3 = new Play


