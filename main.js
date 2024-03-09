function setup(){
    video = createCapture(VIDEO);
    video.size(400,400);
    video.position(10,50);

    canvas = createCanvas(800,400);
    canvas.position(700,200);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);
}
function gotposes(results,error){
    if(error){
        console.error(error);
    }
    if(results.length > 0){
        console.log(results);
    }
}
function modelLoaded(){
    console.log("PoseNet Is Initialized And Loaded");
}
