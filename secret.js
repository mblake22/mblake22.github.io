
function secret() {
	

if (document.getElementById("password").value == "12345") {
	document.getElementById("pass").innerHTML = "Access Granted"
	}
	

if (document.getElementById("password").value != "12345") {
	document.getElementById("pass").innerHTML = "Access Denied"
	}
}


document.getElementById("press").addEventListener("click", secret)