var puzzle [
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
	["Thing", "Privacy Policy"]
	["Thing", "Gust of Air"]
	["Thing", "A Package In Your Mail Box"]
]

var rand = function getRandomIntInclusive(0, 21) {
  min = Math.ceil(0);
  max = Math.floor(1);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var padA = gameTotal.length/4
var gameA //#of words in the first line
var padB = gameTotal.length/2 + gameTotal%2
var gameB = gameWords.length - gameA //#of words in second line
var padC = padA
var gameTotal = game.split("")
var gameWords = game.split(" ")
var game = puzzle[rand][1]
var type = puzzle[rand][0]
var line1 //words of first line
var line2 //word of second line

gameA = function(gameWords) {
	var a = 0
	var gA = 0
	function gameAlength(gameWords) {
		if (gA < 14) {
			gA += gameWords[a].length + 1
			a += 1
			gameAlength(gameWords)
		} else {
			return a
		}
	}
	return a
}

line1 = function(gameA, gameWords) {
	arry = []
	for (var i = 0; i < gameA-1; i++) {
		arry += gameWords[i]
	}
	return arry
}

line2 = function(gameA, gameB, gameWords) {
	arry = []
	for (var i = gameA - 1; i < gameB.length; i++) {
		arry += gameWords[i]
	}
	return arry
}

console.log("Game type: ", type, "Puzzle words:", game, "padA: ", padA, "padB: ", padB, "padC: ", padC, "First Line: ", line1, "Second Line: ", line2)

