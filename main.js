video1 = '';
status1 = '';


function preload(){
    video1 = createVideo('video.mp4');
}

function setup(){
    canvas = createCanvas(380,380);
    canvas.center();
    video1.hide();
    
}

function draw(){
    image(video1,0,0,380,380);
}

function start(){
    object_detector = ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("stat").innerHTML = "Status : Objects are being detected";
}

function modelloaded(){
    console.log("MODEL HAS SUCCESFULLY LOADED !!");
    status1 = true;
    video1.loop();
    video1.speed(1);
    video1.volume(0);
    }