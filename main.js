// Create a reference for the canvas
canvas = document.getElementById('myCanvas');
img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

//Write a code to grab t(he key-pressed event
window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		{//write a code to check the type of key pressedotherkey();
	       alphabetkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
		  console.log("alphbet Key")
}
	else if(keyPressed >=48 && keyPressed<57)
	 {
		numberkey();
		document.getElementById("d1").innerHTML="You pressed alphabet Key";
		coksole.log("alphabet Key");
	}
	else if(keyPressed >=48 && keyPressed<=57)
	{
	 Numberkey();
	 document.getElementById("d1").innerHTML="You pressed Number key";
	 console.log("Number Key");
	}
	else if(keyPressed >=37 && keyPressed<=40)
	{
	 arrowkey();
	 document.getElementById("d1").innerHTML="You pressed Arrow key";
	 console.log("Arrow Key");
	}
	else if ((keyPressed)||(keyPressed ==18|| KeyPressed==27))
    {
		specialkey();
		document.getElementById("d1").innerHTML="You pressed ctrl/esc/alt";
		console.log("special Key");
	}
		}
function alphabetkey()
{
   img_image="alpkey.png";
   add();
}
function numberkey()
{
	
}
function arrowkey()
{
}
function specialkey()
{
	
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
	
