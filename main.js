function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
   background("#969A97");
}

function modelLoaded(error) {
    if (modelLoaded == error) {
        console.error(error);
    } else {
        console.log('PoseNet Is Initialised');
    }
}

function gotPoses(results) {
    if (results.length > 0){
        console.log(results);
    }
}