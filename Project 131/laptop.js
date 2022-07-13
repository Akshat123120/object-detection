function preload(){
   img = loadImage('61s7sJEpsVL._SX425_.jpg')
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
