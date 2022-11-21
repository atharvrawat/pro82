canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
var mouseEvent="empty";
var lastpositionofx,lastpositionofy;
var color= "black";
var widthofline=2;
var radius= 30;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
mouseEvent="mouseDown";    
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
mouseEvent="mouseUP";    
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
mouseEvent="mouseleave";    
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
currentpositionofmousex=e.clientX-canvas.offsetLeft;
currentpositionofmousey=e.clientY-canvas. offsetTop;
if(mouseEvent=="mouseDown"){
 ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=widthofline;
ctx.arc(currentpositionofmousex,currentpositionofmousey,radius,0,2*Math.PI);
ctx.stroke();    
}  
lastpositionofx=currentpositionofmousex;
lastpositionofy=currentpositionofmousey;
}
