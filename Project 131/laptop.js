status = "";
objects = [];
function preload(){
   img = loadImage('61s7sJEpsVL._SX425_.jpg')
}
function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "status:Detecting Objects"
}
function draw(){
    image(img,0,0,640,420);
    if(status!=""){
        for(i=0;i<objects.length;i++){
            document.getElementById("status").innerHTML = "status:Object Detected";
            fill("red");
            percent = floor(objects[i].confidence*100);
            text(objects[i].label+" "+percent+" %",objects[i].x+15,objects[i].y+15);
            noFill();
            stroke("red");
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }
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
        objects = results
    }
}