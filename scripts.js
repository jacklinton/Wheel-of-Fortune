$(document).ready( function(){
	var wheelContainer = document.getElementById("wheelContainer")
	var styleTag = document.getElementById("kfr")
	var keyFrames = '\
	@keyframes rotation {\
	    0% {\
	        transform: rotate(DYNAMIC_VALUE_3);\
	    }\
	    15% {\
	    	transform: rotate(DYNAMIC_VALUE_2);\
	    }\
	    100% {\
	    	transform: rotate(DYNAMIC_VALUE);\
	    }\
	}';
	
	var rando = 0
	var itter2 = "-50deg"
	var itter3 = "0deg"

	wheelContainer.addEventListener("click", function(){
		setTheKeyValues()
	})
})

function setTheKeyValues(){
	rando = parseInt((Math.random() + 1) * 360)
	var stringy = rando + "deg"
	keyFrames = keyFrames.replace(/DYNAMIC_VALUE_3/g, itter3)
	keyFrames = keyFrames.replace(/DYNAMIC_VALUE_2/g, itter2)	
	keyFrames = keyFrames.replace(/DYNAMIC_VALUE/g, stringy)
	styleTag.innerHTML = keyFrames
	wheelContainer.classList.add("wheelRotate")
	itter3 = rando + "deg"
	itter2 = (rando - 50) + "deg"
	wheelContainer.removeEventListener("click")

}
