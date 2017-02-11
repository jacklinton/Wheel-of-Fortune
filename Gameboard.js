var puzzle = [
	["Thing", "Profitability"],
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
	["What Are You Doing", "Joining A Book Club"],
	["Things", "Basic Qualifications"],
	["Phrase","Pop Open The Hood"],
	["Phrase","On My Way Home"],
	["Phrase","Hot And Juicy"],
	["Thing", "Witty Joke"],
	["Thing", "Privacy Policy"],
	["Thing", "Gust of Air"],
	["Thing", "A Package In Your Mail Box"]
]

var rand = getRandomIntInclusive(0,20)

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



var game = puzzle[rand][1]
var type = puzzle[rand][0]
var gameTotal = game.split("")
var gameWords = game.split(" ")
var padA = Math.floor(((28 - gameTotal.length)/2)/2)
var padB = Math.floor((28 - gameTotal.length)/2) + (28 - gameTotal.length)%2
var gameA = firstLineLength(gameTotal, gameWords, padA)//#of words in the first line
var gameB = gameWords.length - gameA //#of words in second line
var line1 = firstLine(gameA, gameWords)//words of first line
var line2 = secondLine(gameA, gameB, gameWords)//word of second line

var padC = oddOrEven(padA, gameTotal.length)

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


console.log("Game type: ", type, ", Puzzle Words:", game, ", padA: ", padA, ", padB: ", padB, ", padC: ", padC, ", First Line: ", line1, ", Second Line: ", line2)

