
var b1 = document.getElementById("West Virginia");
var b2 = document.getElementById("South Dakota");
var b3 = document.getElementById("Utah");
var image=document.getElementById("image");

function changeSD(){
	image.src = "Images/A1985BC4-C8B7-4E41-888B-D37BFDF5066E.jpeg";
}

function changeWV(){
	image.src = "Images/WV 1.JPG";
}

function changeUT(){
	image.src = "Images/IMG_3631.JPG";
}

b1.addEventListener("click", changeWV);
b2.addEventListener("click", changeSD);
b3.addEventListener("click", changeUT);