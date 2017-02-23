function GameBoardBuilder(wheelRound){
	var counter = 1
	one()	
	two()
	three()
	four()
	five()

	function one(){
		for (var i = wheelRound.padA; i > 0; i--) {
		let padAdiv = document.createElement("div")
		padAdiv.setAttribute("class", "padA")
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
				letter.innerHTML = word[y].toUpperCase()
				document.getElementById("gameBoard").appendChild(letter)
				counter += 1
				console.log(counter)
			}
		let betweenDiv = document.createElement("div")
		betweenDiv.setAttribute("class", "blankBox")
		betweenDiv.setAttribute("flex", (word.length + 2))
		document.getElementById("gameBoard").appendChild(betweenDiv)
		counter += 1
		console.log(counter)
		}
	}

	function three(){
		for (var i = wheelRound.padB; i > 0; i--) {
		counter += 1
		let padAdiv = document.createElement("div")
		padAdiv.setAttribute("class", "padB")
		padAdiv.setAttribute("flex", counter)
		document.getElementById("gameBoard").appendChild(padAdiv)
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
				letter.innerHTML = word[y].toUpperCase()
				document.getElementById("gameBoard").appendChild(letter)
				counter += 1
				console.log(counter)
			}
			if (wheelRound.line2.length-i!=1) {
				let betweenDiv = document.createElement("div")
				betweenDiv.setAttribute("class", "padC")
				betweenDiv.setAttribute("flex", (word.length + 2))
				document.getElementById("gameBoard").appendChild(betweenDiv)
				counter += 1
				console.log(counter)
			}
		}
	}

	function five(){
		for (var i = wheelRound.padC; i > 0; i--) {
			let padAdiv = document.createElement("div")
			padAdiv.setAttribute("class", "padC")
			document.getElementById("gameBoard").appendChild(padAdiv)
			console.log(counter)
		}
	}

}