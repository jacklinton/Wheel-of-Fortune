
var counter = 1
var player1final = 0
var player2final = 0
var x

function gamePlay(wheelRound) {
		var roundcount = 1
		var player1total = 0
		
		var player2total = 0
		var spinValue = 0

		
		document.getElementById("player1totalc").classList.remove("turn")
		document.getElementById("player2totalc").classList.remove("turn")

		nextRound(wheelRound)
		abet(wheelRound)

		function nextRound(wheelRound){
			GameBoardBuilder(wheelRound)
			player()
		}

		
			function player1turn(){
				player1 = true
				document.getElementById("player2totalc").classList.remove("turn")
				document.getElementById("player1totalc").classList.add("turn")
				document.getElementById("player1total").innerHTML = "<h1>$" + player1total + "</h1>"

			}

			function player2turn(){
				player1=false
				document.getElementById("player1totalc").classList.remove("turn")
				document.getElementById("player2totalc").classList.add("turn")
				document.getElementById("player2total").innerHTML = "<h1>$" + player2total + "</h1>"
			}
			function solvePuzzle() {
				attempt = document.getElementById("solve").value
				if (attempt === wheelRound.win) {
					if (player1) {
						player2total = 0
						player1final += player1total
						roundcount += 1
						if (roundcount<=3){
						document.getElementById("player1final").innerHTML = "<p>$" + player1final + "</p>"
						document.getElementById("player2final").innerHTML = "<p>$" + player2final + "</p>"
						nextRound(("wheelRound"+roundcount))
						}
					} else {
						player1total = 0
						player2final += player2total
						roundcount += 1
						if (roundcount<=3){
						nextRound(("wheelRound"+roundcount))
						}
					}
				} else {
					counter += 1
					player()
				}

			}
			function afterSpin(){
				if (player1) {
					if (isNaN(spinValue)){
						if (spinValue == "Bankrupt!") {
							player1total = 0
							counter += 1
							player2turn()
						} else {
							counter += 1
							player2turn()
						}
					} else {
						player1total += spinValue * x
						counter += 1
						player1turn()
						player2turn()
					}
				} else {
					if (isNaN(spinValue)){
						if (spinValue == "Bankrupt!") {
							player2total = 0
							counter += 1
							player1turn()
						} else {
							counter += 1
							player1turn()
						}
					} else {
						player2total += spinValue * x
						counter += 1
						player2turn()
						player1turn()
					}
				}
			}

		
		function player(){
					if (counter%2 === 0) {
						player2turn()
					} else {
						player1turn()
					}
		}	
		wheelContainer.addEventListener("transitionend", function(){
			window.setTimeout(function(){
			theValue()}, 500)
			function theValue(){
				var segValues = [800,700,550,750,600,"Bankrupt!",900,"Loseturn",800,"Bankrupt!",600,950,"Bankrupt!",300,2500,350,"Loseturn",900,600,900,650,800,700,650]
				spinValue = segValues[segValue-1]
				document.getElementById("wheelvalue").innerHTML = "<h1>" + spinValue + "</h1>"
				if (spinValue == "Bankrupt!" || spinValue== "Loseturn") {
					afterSpin()
				} else {
				player()
				}
			}
		})
		function abet(wheelRound) {	
	
			
			letterBtns(wheelRound)
			function letterBtns(wheelRound){

				buttons = document.getElementsByClassName("btn")

				for(i=0; i<buttons.length; i++) {
					buttons = document.getElementsByClassName("btn")

					buttons[i].addEventListener("click", function() {
						x = 0
						this.style.display = "none"
						val = this.innerText
						gameLetters(wheelRound, val)
						afterSpin()
					})
				}
			}

			function gameLetters(wheelRound, val){
				chars = document.getElementsByClassName("letter")
				for (var i = 0; i < chars.length; i++) {
					if (val === chars[i].innerText) {
						let abba = chars[i]
						x += 1
						abba.classList.toggle("hide")
					}
				}
			}
		}
		
}