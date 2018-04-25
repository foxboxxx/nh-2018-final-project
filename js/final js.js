var randomNumberBetween1and6 = Math.floor(Math.random() * 20);
function randomWholeNum() {
	
	return Math.random()
}
function goneImage(){
	$(".gone").hide();
}
$("#hide").click( () => {
	goneImage();
	});
function seeImage(){
	$("#rollingdice").show();
	}
	$("#show").click( () => {
	seeImage();
	});
function reApear() {
	var x = document.getElementById("hidden");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none"
	}
}
