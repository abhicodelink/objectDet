status = "";
objects = [];


function preload(){
    img = loadImage("tv.jpg");
}

function setup(){
    canvas = createCanvas(600,400);
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Detecting Objects";
}

function draw(){
    image(img,0,0,640,400);
    if (status != ""){
        for (i = 0; i < objects.length; i++){
            confidence = Math.floor(objects[i].confidence) + "%";
            label = objects[i].label;
            x = objects[i].x;
            y = objects[i].y;
            width = objects[i].width;
            height = objects[i].height;
            r = Math.floor(Math.random() * 255) +1;
            g = Math.floor(Math.random() * 255) +1;
            b = Math.floor(Math.random() * 255) +1;

            fill(r,g,b);
            text(label,x + 20,y -20);
            noFill();
            stroke(r,g,b);
            rect(x,y,width,height);
        }
    }
}

function modelLoaded(){
    status = true;
    objectDetector.detect(img,gotResults);
}

function gotResults(error,results){

    if (error){
        console.log("Error: " + error);
    }
    else {
        console.log(results);
        objects = results;
    }

}