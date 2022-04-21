
var b1 = document.getElementById("West Virginia");
var b2 = document.getElementById("South Dakota");
var b3 = document.getElementById("Utah");
var b4 = document.getElementById("Iowa");
var b5 = document.getElementById("Florida");
var b6 = document.getElementById("Ely");
var b7 = document.getElementById("Target Field");
var b8 = document.getElementById("Minneapolis");
var b9 = document.getElementById("Moon");
var b10 = document.getElementById("Foxes");


var image=document.getElementById("image");

function changeSD(){
	image.src = "Images/A1985BC4-C8B7-4E41-888B-D37BFDF5066E.jpeg";
}

function changeWV(){
	image.src = "Images/WV 1.jpeg";
}

function changeUT(){
	image.src = "Images/IMG_3631.JPG";
}

function changeIW(){
	image.src = "Images/iowa.JPG";
}

function changeFL(){
	image.src = "Images/florida.JPG";
}

function changeEly(){
	image.src = "Images/ely.JPG";
}

function changeTF(){
	image.src = "Images/target field.JPG";
}

function changeMN(){
	image.src = "Images/minneapolis.JPG";
}

function changeMoon(){
	image.src = "Images/moon.JPG";
}

function changeFox(){
	image.src = "Images/foxes.JPG";
}

b1.addEventListener("click", changeWV);
b2.addEventListener("click", changeSD);
b3.addEventListener("click", changeUT);
b4.addEventListener("click", changeIW);
b5.addEventListener("click", changeFL);
b6.addEventListener("click", changeEly);
b7.addEventListener("click", changeTF);
b8.addEventListener("click", changeMN);
b9.addEventListener("click", changeMoon);
b10.addEventListener("click", changeFox);







