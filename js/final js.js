function goneImage(){
	$(".gone").hide();
}
$("#hide").click( () => {
	goneImage();
	});
/*function seeImage(){
	$(".rollingdice").show();
	}
$(".show").click( () => {
	seeImage();
	});
function reApear() {
	var x = document.getElementByClass("rollingdice");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none"
	}
}*/
	function timedImage() {
	setTimeout(function myFunction() {
	var myimages=new Array()
	//specify random images below. You can have as many as you wish
	myimages[1]="http://www.clker.com/cliparts/m/v/m/J/4/V/dice-1-md.png"
	myimages[2]="http://www.clker.com/cliparts/a/Y/E/o/z/t/dice-2-md.png"
	myimages[3]="http://www.clker.com/cliparts/M/e/P/O/L/b/dice-3-md.png"
	myimages[4]="http://www.clker.com/cliparts/r/z/d/a/L/V/dice-4-md.png"
	myimages[5]="http://www.clker.com/cliparts/e/y/7/h/W/K/dice-5-md.png"
	myimages[6]="http://www.clker.com/cliparts/l/6/4/3/K/H/dice-6-md.png"

	var ry=Math.floor(Math.random()*myimages.length)
	if (ry==0)
	ry=1
	$("#demo").append('<img src="'+myimages[ry]+'" border=0>')
	}, 2500);}

	function resetDice() {
	$("#demo").html("");
	$("#demo2").html("");
	};
	
	function timedImage2() {
	setTimeout(function myFunction() {
	var myimages=new Array()
	//specify random images below. You can have as many as you wish
	myimages[1]="http://www.clker.com/cliparts/m/v/m/J/4/V/dice-1-md.png"
	myimages[2]="http://www.clker.com/cliparts/a/Y/E/o/z/t/dice-2-md.png"
	myimages[3]="http://www.clker.com/cliparts/M/e/P/O/L/b/dice-3-md.png"
	myimages[4]="http://www.clker.com/cliparts/r/z/d/a/L/V/dice-4-md.png"
	myimages[5]="http://www.clker.com/cliparts/e/y/7/h/W/K/dice-5-md.png"
	myimages[6]="http://www.clker.com/cliparts/l/6/4/3/K/H/dice-6-md.png"

	var ry=Math.floor(Math.random()*myimages.length)
	if (ry==0)
	ry=1
	$("#demo2").append('<img src="'+myimages[ry]+'" border=0>')
	}, 2500);}
function doShow(){
		document.getElementById("rollingdice").style.display = "block" ;
}
function doTheHide() {
	$("#rollingdice").delay(2000).fadeOut();
}
/*function timedImage() {
	setTimeout(function myFunction() {
    var x = Math.floor((Math.random() * 6) + 1);
    document.getElementById("demo").innerHTML = x;
}, 2500);}
function timedImage2() {
	setTimeout(function myFunction() {
    var x = Math.floor((Math.random() * 6) + 1);
    document.getElementById("demo2").innerHTML = x;
}, 2500);}*/





