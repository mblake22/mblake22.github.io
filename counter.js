var count = 0;

function minus() {
	count = count - 1;
	document.getElementById("total").innerHTML = count;
	
}

function plus() {
	count = count + 1;
	document.getElementById("total").innerHTML = count;
	
	if (count == 69){
		document.getElementById("total").innerHTML = "NICE" 
	}
}

function divide() {
	count = count / 2;
	document.getElementById("total").innerHTML = count;
}

function minus3() {
	count = count - 3;
	document.getElementById("total").innerHTML = count;
}

function plus100() {
	count = count + 100;
	document.getElementById("total").innerHTML = count;
}

function times10() {
	count = count * 10;
	document.getElementById("total").innerHTML = count;
}

document.getElementById("minus").addEventListener("click",minus);
document.getElementById("plus").addEventListener("click",plus);
document.getElementById("divide").addEventListener("click",divide);
document.getElementById("minus3").addEventListener("click",minus3);
document.getElementById("plus100").addEventListener("click",plus100);
document.getElementById("x10").addEventListener("click",times10);
