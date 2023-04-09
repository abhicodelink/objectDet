status = "";


function preload(){
    img = loadImage("basket.png");
}

function setup(){
    canvas = createCanvas(600,400);
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Detecting Objects";
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
    }

}