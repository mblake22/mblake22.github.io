var q1 = document.getElementById("q1")
var q1result = document.getElementById("q1result")
var s1 = document.getElementById("s1")

function checkq1() {
	if (q1.value == "Bethesda") {
		q1result.innerHTML = "Correct";
		q1result.style.color= "green";
	}
	
	else{
		q1result.innerHTML = "Incorrect";
		q1result.style.color= "red";
	}
}

s1.addEventListener("click", checkq1)