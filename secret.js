
function secret() {
	

if (document.getElementById("password").value == "12345") {
	document.getElementById("pass").innerHTML = "Access Granted";
	document.getElementById("pass").style.color= "green";
	window.location = "index.html";
	}
	

else{
	document.getElementById("pass").innerHTML = "Access Denied";
	document.getElementById("pass").style.color= "red";
	}
}


document.getElementById("press").addEventListener("click", secret)