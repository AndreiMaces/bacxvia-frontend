var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

function RESIZE(){
	
WIDTH = window.innerWidth;
HEIGHT = window.innerHeight;
	

unghi = $('.unghi').val();
var unghi1 = unghi;

var canvas = document.getElementsByClassName('cercTrigonometric')[0];

canvas.setAttribute("width" , WIDTH * 1 + "px");
canvas.setAttribute("height" , HEIGHT * 1 + "px");

var cursor = canvas.getContext("2d");



cursor.beginPath();


cursor.strokeStyle = '#000000';
cursor.lineWidth = 3;

cursor.arc(WIDTH/2 , HEIGHT/2.5 ,  WIDTH * 0.15 , 0 , 2 * Math.PI);
///////////
cursor.moveTo(WIDTH/2 , HEIGHT/2.5);
cursor.font = "30px Times New Roman";
cursor.fillText("π/2" , WIDTH/2 - 20 , HEIGHT/2.5 - WIDTH * 0.15 - 15);

cursor.lineTo(WIDTH/2, HEIGHT/2.5 - WIDTH * 0.15);
////////////
cursor.moveTo(WIDTH/2 , HEIGHT/2.5);

cursor.fillText("π" , WIDTH/2 - WIDTH * 0.15 - 25 , HEIGHT/2.5 + 10);

cursor.lineTo(WIDTH/2 - WIDTH * 0.15, HEIGHT/2.5);
/////////////
cursor.moveTo(WIDTH/2 , HEIGHT/2.5);

cursor.fillText("0" , WIDTH/2 + WIDTH * 0.15 + 10 , HEIGHT/2.5  - 10);
cursor.fillText("2π" , WIDTH/2 + WIDTH * 0.15 + 10 , HEIGHT/2.5  + 30);

cursor.lineTo(WIDTH/2 + WIDTH * 0.15, HEIGHT/2.5);
//////////
cursor.moveTo(WIDTH/2 , HEIGHT/2.5);

cursor.fillText("3π/2" , WIDTH/2 - 30 , HEIGHT/2.5 + WIDTH * 0.15 + 30);

cursor.lineTo(WIDTH/2, HEIGHT/2.5 + WIDTH * 0.15);


//////////
cursor.stroke();

	unghi = $('.unghi').val();
	unghi1 = unghi;
	cursor.beginPath();
	cursor.lineWidth = 3;
	unghi = unghi/57.2958;
	cursor.moveTo(WIDTH/2 , HEIGHT/2.5);
	cursor.strokeStyle = '#ff0000';
	
	var x = WIDTH/2 + WIDTH * 0.15 * Math.cos(unghi);
	var y = HEIGHT/2.5 + -WIDTH * 0.15 * Math.sin(unghi);
	
	cursor.lineTo(x, y);
	
	cursor.stroke();
	cursor.beginPath();
	cursor.strokeStyle = '#0000FF';
	
	cursor.moveTo(WIDTH/2 + WIDTH * 0.15 * Math.cos(unghi), HEIGHT/2.5 + -WIDTH * 0.15 * Math.sin(unghi) + 2);
	cursor.font = "25px Times New Roman";
	
	var lineLen = WIDTH * 0.15 * Math.cos(unghi);
	if(unghi != 0)
	cursor.fillText("sin(" + unghi1 + ")" , WIDTH/2 + WIDTH * 0.15 * Math.cos(unghi) - lineLen, HEIGHT/2.5 + -WIDTH * 0.15 * Math.sin(unghi) - 5);
	cursor.lineTo(WIDTH/2 + WIDTH * 0.15 * Math.cos(unghi) , HEIGHT/2.5);
	
	cursor.moveTo(WIDTH/2 + WIDTH * 0.15 * Math.cos(unghi), HEIGHT/2.5 + -WIDTH * 0.15 * Math.sin(unghi) + 2);
	if(unghi != 0)
	cursor.fillText("cos(" + unghi1 + ")" , WIDTH/2 + WIDTH * 0.15 * Math.cos(unghi) - 40, HEIGHT/2.5 + 22);
	cursor.lineTo(WIDTH/2 ,HEIGHT/2.5 + -WIDTH * 0.15 * Math.sin(unghi) + 2);
	
	cursor.stroke();

$('.unghi').change(function(){
	
	cursor.clearRect(0, 0, canvas.width, canvas.height);

cursor.beginPath();
cursor.strokeStyle = '#000000';
cursor.lineWidth = 3;

cursor.arc(WIDTH/2 , HEIGHT/2.5 ,  WIDTH * 0.15 , 0 , 2 * Math.PI);
///////////
cursor.moveTo(WIDTH/2 , HEIGHT/2.5);
cursor.font = "30px Times New Roman";
cursor.fillText("π/2" , WIDTH/2 - 20 , HEIGHT/2.5 -  WIDTH * 0.15 - 15);

cursor.lineTo(WIDTH/2, HEIGHT/2.5 - WIDTH * 0.15);
////////////
cursor.moveTo(WIDTH/2 , HEIGHT/2.5);

cursor.fillText("π" , WIDTH/2 -  WIDTH * 0.15 - 25 , HEIGHT/2.5 + 10);

cursor.lineTo(WIDTH/2 - WIDTH * 0.15, HEIGHT/2.5);
/////////////
cursor.moveTo(WIDTH/2 , HEIGHT/2.5);

cursor.fillText("0" , WIDTH/2 +  WIDTH * 0.15 + 10 , HEIGHT/2.5  - 10);
cursor.fillText("2π" , WIDTH/2 +  WIDTH * 0.15 + 10 , HEIGHT/2.5  + 30);

cursor.lineTo(WIDTH/2 + WIDTH * 0.15, HEIGHT/2.5);
//////////
cursor.moveTo(WIDTH/2 , HEIGHT/2.5);

cursor.fillText("3π/2" , WIDTH/2 - 30 , HEIGHT/2.5 +  WIDTH * 0.15 + 30);
console.log(unghi);
cursor.lineTo(WIDTH/2, HEIGHT/2.5 + WIDTH * 0.15);


//////////
cursor.stroke();

	
	unghi = $('.unghi').val();	
	unghi1 = unghi;
	cursor.beginPath();
	cursor.lineWidth = 3;
	unghi = unghi/57.2958;

	cursor.moveTo(WIDTH/2 , HEIGHT/2.5);
	cursor.strokeStyle = '#ff0000';
	
	var x = WIDTH/2 + WIDTH * 0.15 * Math.cos(unghi);
	var y = HEIGHT/2.5 + -WIDTH * 0.15 * Math.sin(unghi);
	
	cursor.lineTo(x, y);
	
	cursor.stroke();
	cursor.beginPath();
	cursor.strokeStyle = '#0000FF';
	
	cursor.moveTo(WIDTH/2 + WIDTH * 0.15 * Math.cos(unghi), HEIGHT/2.5 + -WIDTH * 0.15 * Math.sin(unghi) + 2);
	cursor.font = "25px Times New Roman";
	
	var lineLen = WIDTH * 0.15 * Math.cos(unghi);
	if(unghi != 0)
	cursor.fillText("sin(" + unghi1 + ")" , WIDTH/2 + WIDTH * 0.15 * Math.cos(unghi) - lineLen, HEIGHT/2.5 + -WIDTH * 0.15 * Math.sin(unghi) - 5);
	cursor.lineTo(WIDTH/2 + WIDTH * 0.15 * Math.cos(unghi) , HEIGHT/2.5);
	
	cursor.moveTo(WIDTH/2 + WIDTH * 0.15 * Math.cos(unghi), HEIGHT/2.5 + -WIDTH * 0.15 * Math.sin(unghi) + 2);
	if(unghi != 0)
	cursor.fillText("cos(" + unghi1 + ")" , WIDTH/2 + WIDTH * 0.15 * Math.cos(unghi) - 40, HEIGHT/2.5 + 22);
	cursor.lineTo(WIDTH/2 ,HEIGHT/2.5 + -WIDTH * 0.15 * Math.sin(unghi) + 2);
	
	cursor.stroke();
	
	$('.sin').html("sin(" + unghi*57.2958 + ") = " + Math.sin(unghi));
	console.log(unghi);
	$('.cos').html("cos(" + unghi*57.2958 + ") = " + Math.cos(unghi));
	$('.tg').html("tg(" + unghi*57.2958 + ") = " + Math.tan(unghi));
	$('.ctg').html("ctg(" + unghi*57.2958 + ") = " + 1/Math.cos(unghi));




});
	
};

$(function(){

unghi = $('.unghi').val();

console.log(unghi);
var unghi1 = unghi;
var canvas = document.getElementsByClassName('cercTrigonometric')[0];

canvas.setAttribute("width" , WIDTH * 1 + "px");
canvas.setAttribute("height" , HEIGHT * 1 + "px");

var cursor = canvas.getContext("2d");



cursor.beginPath();


cursor.strokeStyle = '#000000';
cursor.lineWidth = 3;

cursor.arc(WIDTH/2 , HEIGHT/2.5 ,  WIDTH * 0.15 , 0 , 2 * Math.PI);
///////////
cursor.moveTo(WIDTH/2 , HEIGHT/2.5);
cursor.font = "30px Times New Roman";
cursor.fillText("π/2" , WIDTH/2 - 20 , HEIGHT/2.5 - WIDTH * 0.15 - 15);

cursor.lineTo(WIDTH/2, HEIGHT/2.5 - WIDTH * 0.15);
////////////
cursor.moveTo(WIDTH/2 , HEIGHT/2.5);

cursor.fillText("π" , WIDTH/2 - WIDTH * 0.15 - 25 , HEIGHT/2.5 + 10);

cursor.lineTo(WIDTH/2 - WIDTH * 0.15, HEIGHT/2.5);
/////////////
cursor.moveTo(WIDTH/2 , HEIGHT/2.5);

cursor.fillText("0" , WIDTH/2 + WIDTH * 0.15 + 10 , HEIGHT/2.5  - 10);
cursor.fillText("2π" , WIDTH/2 + WIDTH * 0.15 + 10 , HEIGHT/2.5  + 30);

cursor.lineTo(WIDTH/2 + WIDTH * 0.15, HEIGHT/2.5);
//////////
cursor.moveTo(WIDTH/2 , HEIGHT/2.5);

cursor.fillText("3π/2" , WIDTH/2 - 30 , HEIGHT/2.5 + WIDTH * 0.15 + 30);
console.log(unghi);
cursor.lineTo(WIDTH/2, HEIGHT/2.5 + WIDTH * 0.15);


//////////
cursor.stroke();

unghi = $('.unghi').val();
	cursor.beginPath();
	cursor.lineWidth = 3;
	var unghi1 = unghi;
	unghi = unghi/57.2958;
	cursor.moveTo(WIDTH/2 , HEIGHT/2.5);
	cursor.strokeStyle = '#ff0000';
	
	var x = WIDTH/2 + WIDTH * 0.15 * Math.cos(unghi);
	var y = HEIGHT/2.5 + -WIDTH * 0.15 * Math.sin(unghi);
	
	cursor.lineTo(x, y);
	
	cursor.stroke();
	cursor.beginPath();
	cursor.strokeStyle = '#0000FF';
	
	cursor.moveTo(WIDTH/2 + WIDTH * 0.15 * Math.cos(unghi), HEIGHT/2.5 + -WIDTH * 0.15 * Math.sin(unghi) + 2);
	cursor.font = "25px Times New Roman";
	
	var lineLen = WIDTH * 0.15 * Math.cos(unghi);
	if(unghi != 0)
	cursor.fillText("sin(" + unghi1 + ")" , WIDTH/2 + WIDTH * 0.15 * Math.cos(unghi) - lineLen, HEIGHT/2.5 + -WIDTH * 0.15 * Math.sin(unghi) - 5);
	cursor.lineTo(WIDTH/2 + WIDTH * 0.15 * Math.cos(unghi) , HEIGHT/2.5);
	
	cursor.moveTo(WIDTH/2 + WIDTH * 0.15 * Math.cos(unghi), HEIGHT/2.5 + -WIDTH * 0.15 * Math.sin(unghi) + 2);
	if(unghi != 0)
	cursor.fillText("cos(" + unghi1 + ")" , WIDTH/2 + WIDTH * 0.15 * Math.cos(unghi) - 40, HEIGHT/2.5 + 22);
	cursor.lineTo(WIDTH/2 ,HEIGHT/2.5 + -WIDTH * 0.15 * Math.sin(unghi) + 2);
	
	cursor.stroke();

$('.unghi').change(function(){
	
	cursor.clearRect(0, 0, canvas.width, canvas.height);

cursor.beginPath();
cursor.strokeStyle = '#000000';
cursor.lineWidth = 3;

cursor.arc(WIDTH/2 , HEIGHT/2.5 ,  WIDTH * 0.15 , 0 , 2 * Math.PI);
///////////
cursor.moveTo(WIDTH/2 , HEIGHT/2.5);
cursor.font = "30px Times New Roman";
cursor.fillText("π/2" , WIDTH/2 - 20 , HEIGHT/2.5 -  WIDTH * 0.15 - 15);

cursor.lineTo(WIDTH/2, HEIGHT/2.5 - WIDTH * 0.15);
////////////
cursor.moveTo(WIDTH/2 , HEIGHT/2.5);

cursor.fillText("π" , WIDTH/2 -  WIDTH * 0.15 - 25 , HEIGHT/2.5 + 10);

cursor.lineTo(WIDTH/2 - WIDTH * 0.15, HEIGHT/2.5);
/////////////
cursor.moveTo(WIDTH/2 , HEIGHT/2.5);

cursor.fillText("0" , WIDTH/2 +  WIDTH * 0.15 + 10 , HEIGHT/2.5  - 10);
cursor.fillText("2π" , WIDTH/2 +  WIDTH * 0.15 + 10 , HEIGHT/2.5  + 30);

cursor.lineTo(WIDTH/2 + WIDTH * 0.15, HEIGHT/2.5);
//////////
cursor.moveTo(WIDTH/2 , HEIGHT/2.5);

cursor.fillText("3π/2" , WIDTH/2 - 30 , HEIGHT/2.5 +  WIDTH * 0.15 + 30);
console.log(unghi);
cursor.lineTo(WIDTH/2, HEIGHT/2.5 + WIDTH * 0.15);


//////////
cursor.stroke();

	
	unghi = $('.unghi').val();
	var unghi1 = unghi;
	cursor.beginPath();
	cursor.lineWidth = 3;
	unghi = unghi/57.2958;
	cursor.moveTo(WIDTH/2 , HEIGHT/2.5);
	cursor.strokeStyle = '#ff0000';
	
	var x = WIDTH/2 + WIDTH * 0.15 * Math.cos(unghi);
	var y = HEIGHT/2.5 + -WIDTH * 0.15 * Math.sin(unghi);
	
	cursor.lineTo(x, y);
	
	cursor.stroke();
	cursor.beginPath();
	cursor.strokeStyle = '#0000FF';
	
	cursor.moveTo(WIDTH/2 + WIDTH * 0.15 * Math.cos(unghi), HEIGHT/2.5 + -WIDTH * 0.15 * Math.sin(unghi) + 2);
	cursor.font = "25px Times New Roman";
	
	var lineLen = WIDTH * 0.15 * Math.cos(unghi);
	if(unghi != 0)
	cursor.fillText("sin(" + unghi1 + ")" , WIDTH/2 + WIDTH * 0.15 * Math.cos(unghi) - lineLen, HEIGHT/2.5 + -WIDTH * 0.15 * Math.sin(unghi) - 5);
	cursor.lineTo(WIDTH/2 + WIDTH * 0.15 * Math.cos(unghi) , HEIGHT/2.5);
	
	cursor.moveTo(WIDTH/2 + WIDTH * 0.15 * Math.cos(unghi), HEIGHT/2.5 + -WIDTH * 0.15 * Math.sin(unghi) + 2);
	if(unghi != 0)
	cursor.fillText("cos(" + unghi1 + ")" , WIDTH/2 + WIDTH * 0.15 * Math.cos(unghi) - 40, HEIGHT/2.5 + 22);
	cursor.lineTo(WIDTH/2 ,HEIGHT/2.5 + -WIDTH * 0.15 * Math.sin(unghi) + 2);
	
	cursor.stroke();
	
	$('.sin').html("sin(" + unghi1 + ") = " + Math.sin(unghi));
	console.log(unghi);
	$('.cos').html("cos(" + unghi1 + ") = " + Math.cos(unghi));
	$('.tg').html("tg(" + unghi1 + ") = " + Math.tan(unghi));
	$('.ctg').html("ctg(" + unghi1 + ") = " + 1/Math.cos(unghi));


});

});
