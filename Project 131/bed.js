function preload(){
    img = loadImage('bed.jpg')
 }
 function setup(){
     canvas = createCanvas(640,420);
     canvas.center();
 }
 function draw(){
     image(img,0,0,640,420)
     fill("#FF0000");
     noFill();
 }
 