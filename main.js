function changeRed() {
	document.getElementById("hello").style.backgroundColor = "Red";
	document.getElementById("hello").innerHTML = "RED";
}

function changeBlue() {
	document.getElementById("hello").style.backgroundColor = "Blue";
	document.getElementById("hello").innerHTML = "BLUE";
}

function changeYellow() {
	document.getElementById("hello").style.backgroundColor = "Yellow";
	document.getElementById("hello").innerHTML = "YELLOW";
}

function changeGreen() {
	document.getElementById("hello").style.backgroundColor = "Green";
	document.getElementById("hello").innerHTML = "GREEN";
}

function changeOrange() {
	document.getElementById("hello").style.backgroundColor = "Orange";
	document.getElementById("hello").innerHTML = "ORANGE";
}

function changePurple() {
	document.getElementById("hello").style.backgroundColor = "Purple";
	document.getElementById("hello").innerHTML = "PURPLE";
}

function changeWhite() {
	document.getElementById("hello").style.backgroundColor = "White";
	document.getElementById("hello").innerHTML = "WHITE";
}

function changeBrown() {
	document.getElementById("hello").style.backgroundColor = "#654321";
	document.getElementById("hello").innerHTML = "BROWN";
}

function changeGrey() {
	document.getElementById("hello").style.backgroundColor = "Grey";
	document.getElementById("hello").innerHTML = "GREY";
}

function changePink() {
	document.getElementById("hello").style.backgroundColor = "Pink";
	document.getElementById("hello").innerHTML = "PINK";
}




document.getElementById("button1").addEventListener("click", changeBlue );
document.getElementById("button2").addEventListener("click", changeBrown );
document.getElementById("button3").addEventListener("click", changeGreen );
document.getElementById("button4").addEventListener("click", changeGrey );
document.getElementById("button5").addEventListener("click", changePink );
document.getElementById("button6").addEventListener("click", changePurple );
document.getElementById("button7").addEventListener("click", changeRed );
document.getElementById("button8").addEventListener("click", changeWhite );
document.getElementById("button9").addEventListener("click", changeYellow );
document.getElementById("button10").addEventListener("click", changeOrange);

