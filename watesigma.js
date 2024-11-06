// JavaScript Document

var clicked = false;

function evil () {

	if (clicked == true ){
			clicked = false;
			document.getElementById("text").textContent= "TOP 3 MENSEN";
		document.getElementById("miniferre1").src="mini_ferre_1.jpg";
		document.getElementById("louis").src="louis.jpeg";
		document.getElementById("johan").src="johan.jpg";
	} else {
		clicked = true;
		document.getElementById("text").textContent= "TOP 3 EVIL MENSEN";
		document.getElementById("miniferre1").src="evil_mini_ferre_1.jpg";
		document.getElementById("louis").src="evil_louis.jpg";
		document.getElementById("johan").src="evil_johan.jpg";
	}
	

	
}

//	for (var i=0; i<5; i++){
//		window.alert ("Maurice Donck wilt je locatie")
//	}