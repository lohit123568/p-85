canvas = document.getElementById('mycanvas');
ctx = canvas.getContext("2d");
greencar_width = 75;
greencar_height = 100;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";
greencar_x = 5;
greencar_y = 225;
function add() {
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_image;

	greencar_imgTag = new Image();
	greencar_imgTag.onload = uploadgreencar;
	greencar_imgTag.src = greencar_image;
}
function uploadBackground() {
	
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}
function uploadgreencar() {
	
      ctx.drawImage(greencar_imgTag, greencar_x, greencar_y, greencar_width, greencar_height);
	
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
}
	function up(){
		if(greencar_Y >=0){
	
		 greencar_Y = greencar_Y - 5;
		 console.log("When up arrow is pressed,  x = "+ greencar_x + " | y = " +greencar_y);
		 uploadbackground();
		 uploadgreencar();
	
		}
	}	
	function down(){
		if(greencar_Y <=100){
			console.log("When down arrow is pressed,  x = "+ greencar_x + " | y = " +greencar_y);
		 greencar_Y = greencar_Y + 5;
		 uploadbackground();
		 uploadgreencar();
	
		}
	}
	function left(){
		if(greencar_X >=0){
			console.log("When left arrow is pressed,  y = "+ greencar_y + " | x = " +greencar_x);
		 greencar_X = greencar_X - 5;
		 uploadbackground();
		 uploadgreencar();
	
		}
	}
	function right(){
		if(greencar_X <=75){
			console.log("When right arrow is pressed,  y = "+ greencar_y + " | x = " +greencar_x);
		 greencar_X = greencar_X + 5;
		 uploadbackground();
		 uploadgreencar();
	
		}
}