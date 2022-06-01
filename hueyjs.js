var q1 = document.getElementById("q1")
var q2 = document.getElementById("q2")
var q3 = document.getElementById("q3")
var q4 = document.getElementById("q4")
var q5 = document.getElementById("q5")
var q6 = document.getElementById("q6")
var q7 = document.getElementById("q7")
var q8 = document.getElementById("q8")
var q9 = document.getElementById("q9")
var q10 = document.getElementById("q10")
var submit = document.getElementById("s1")
var score = document.getElementById("score")
var result = 0;

function calculate() {
	
	result = 0;
	
	if (q1.value == "US"){
		result = result + 1;
	}
	if (q2.value == "False"){
		result = result + 1;
	}
	if (q3.value == "Bell"){
		result = result + 1;
	}
	if (q4.value == "Army"){
		result = result + 1;
	}
	if (q5.value == "XH-40"){
		result = result + 1;
	}
	if (q6.value == "True"){
		result = result + 1;
	}
	if (q7.value == "False"){
		result = result + 1;
	}
	if (q8.value == "Korean War"){
		result = result + 1;
	}
	if (q9.value == "UH-1"){
		result = result + 1;
	}
	if (q10.value == "True"){
		result = result + 1;
	}
	
	if (result >= 6){
		score.style.color = "blue";
	}
	
	if (result < 6){
		score.style.color = "red";
	}
	
	score.innerHTML = result;
}

submit.addEventListener("click", calculate)