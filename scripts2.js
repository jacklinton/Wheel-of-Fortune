
var rando = 0
var segValue = 1

wheelContainer.addEventListener("click", function(){
		document.getElementById("s" + segValue).classList.remove("lightUp")
		var rand = parseInt((Math.random() + 1) * 360)
		rando += rand
		wheelContainer.addEventListener("transitionend", function(){getSegValue()})
		wheelContainer.setAttribute("style", "transform: rotate(" + rando + "deg);")
		
	})

function getSegValue(){
	
	segValue = Math.floor(25 - ((rando%(360))/15))

	document.getElementById("s" + segValue).classList.add("lightUp")
}