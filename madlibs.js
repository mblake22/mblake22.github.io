
var q1 = document.getElementById("1");
var q2 = document.getElementById("2");
var q3 = document.getElementById("3");
var q4 = document.getElementById("4");
var q5 = document.getElementById("5");
var q6 = document.getElementById("6");
var q7 = document.getElementById("7");
var q8 = document.getElementById("8");
var q9 = document.getElementById("9");
var q10 = document.getElementById("10");
var q11 = document.getElementById("11");
var button = document.getElementById("button");
var done = document.getElementById("mad");

function madlib() {
	done.innerHTML = "Today I went to my favorite Taco Stand called the"+" "+ q1.value +" "+ q2.value +" " + ". Unlike most food stands, they cook and prepare the food in" + " " + q3.value +" "+ q4.value + " " + "while you" +" "+ q5.value + " " + ". The best thing on the menu is the" + q6.value +" "+ q7.value + ". Instead of ground beef they fill the taco with " + q8.value + ", cheese, and top it off with a salsa made from "+ q9.value +". If that doesn't make your mouth water nothing will, then it's just like "+ q10.value +" always says: " +q11.value +"!";
	done.style.color = "burlywood";
}

button.addEventListener("click", madlib);