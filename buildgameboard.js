function GameBoardBuilder(wheelRound){
	var counter = 1
	base()
	one()	
	two()
	three()
	four()
	five()
	letterBtns()

	document.getElementById("gameType").innerHTML = "<h1>" + "'" + wheelRound.type + "'" + "</h1>"
	
	wheelContainer.addEventListener("transitionend", function(){
		window.setTimeout(function(){
		theValue()}, 500)
		function theValue(){
			var segValues = [800,700,550,750,600,"Bankrupt!",900,"Loseturn",800,"Bankrupt!",600,950,"Bankrupt!",300,2500,350,"Loseturn",900,600,900,650,800,700,650]
			segment = document.getElementsByClassName("lightup").id
			document.getElementById("wheelvalue").innerHTML = "<h1>" + segValues[segValue-1] + "</h1><br><h1>" + segValue + "</h1>"
		}
	})

	function base(){
		for (var i = 0; i < 52; i++) {
			let theDiv = document.createElement("div")
			theDiv.setAttribute("class", "under")
			document.getElementById("underBoxContainer").appendChild(theDiv)
		}
	}
	function one(){
		for (var i = wheelRound.padA; i > 0; i--) {
			let padAdiv = document.createElement("div")
			padAdiv.setAttribute("class", "padA")
			padAdiv.setAttribute("z-index", "2")
			document.getElementById("gameBoard").appendChild(padAdiv)
			console.log(counter)
		}
	}

	function two(){
		for (var i = 0; i < wheelRound.line1.length; i++) {
		let word = wheelRound.line1[i].split("")
			for (var y = 0; y<=(word.length - 1); y++) {
				let letter = document.createElement("div")
				letter.setAttribute("class", "letter")
				letter.setAttribute("flex", (y+2))
				letter.setAttribute("z-index", 2)
				letter.classList.toggle("hide")
				letter.innerHTML = word[y].toUpperCase()
				document.getElementById("gameBoard").appendChild(letter)
				counter += 1
				console.log(counter)
			}
		let betweenDiv = document.createElement("div")
		betweenDiv.setAttribute("class", "blankBox")
		betweenDiv.setAttribute("flex", (word.length + 2))
		betweenDiv.setAttribute("z-index", 2)
		document.getElementById("gameBoard").appendChild(betweenDiv)
		counter += 1
		console.log(counter)
		}
	}

	function three(){
		for (var i = wheelRound.padB; i > 0; i--) {
		counter += 1
		let padBdiv = document.createElement("div")
		padBdiv.setAttribute("class", "padB")
		padBdiv.setAttribute("flex", counter)
		padBdiv.setAttribute("z-index", 2)
		document.getElementById("gameBoard").appendChild(padBdiv)
		console.log(counter)
		}
	}

	function four(){
		for (var i = 0; i < wheelRound.line2.length; i++) {
		counter += 1
		let word = wheelRound.line2[i].split("")
			for (var y = 0; y<=(word.length - 1); y++) {
				let letter = document.createElement("div")
				letter.setAttribute("class", "letter")
				letter.setAttribute("flex", counter)
				letter.setAttribute("z-index", 2)
				letter.classList.toggle("hide")
				letter.innerHTML = word[y].toUpperCase()
				document.getElementById("gameBoard").appendChild(letter)
				counter += 1
				console.log(counter)
			}
			if (wheelRound.line2.length-i!=1) {
				let betweenDiv = document.createElement("div")
				betweenDiv.setAttribute("class", "padC")
				betweenDiv.setAttribute("flex", (word.length + 2))
				betweenDiv.setAttribute("z-index", 2)
				document.getElementById("gameBoard").appendChild(betweenDiv)
				counter += 1
				console.log(counter)
			}
		}
	}

	function five(){
		for (var i = wheelRound.padC; i > 0; i--) {
			let padCdiv = document.createElement("div")
			padCdiv.setAttribute("class", "padC")
			padCdiv.setAttribute("z-index", 2)
			document.getElementById("gameBoard").appendChild(padCdiv)
			console.log(counter)
		}
	}

	var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

	function letterBtns(){

		buttons = document.getElementsByClassName("btn")

		for(i=0; i<buttons.length; i++) {
			buttons = document.getElementsByClassName("btn")

			buttons[i].addEventListener("click", function() {
				this.style.display = "none"
				val = this.innerText
				gameLetters(wheelRound, val)
			})
		}
	}

	function gameLetters(wheelRound, val){
		chars = document.getElementsByClassName("letter")
		for (var i = 0; i < chars.length; i++) {
			if (val === chars[i].innerText) {
				console.log(val, chars[i].innerText)
				let abba = chars[i]
				abba.classList.toggle("hide")
			}
		}
	}
}

