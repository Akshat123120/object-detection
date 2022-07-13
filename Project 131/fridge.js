status = "";
function preload(){
   img = loadImage('download (1).jpg')
}
function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "status:Detecting Objects"
}
function draw(){
    image(img,0,0,640,420)
    fill("#FF0000");
    noFill();
}
function back(){
    window.location = "index.html";
}
function modelLoaded(){
    status = true;
    objectDetector.detect(img,gotResults);
}
function gotResults(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
    }
}