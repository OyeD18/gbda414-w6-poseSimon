let video;
let bodyPose;

let poses = [];

let poseReady = false;

function preload() {
    bodyPose = ml5.bodyPose();
}

function setup() {
    createCanva(640, 480);
    video = createCapture (VIDEO);
    video.size(width, height);
    video.hide();

bodyPose.detectStart(video, gotPoses);
poseReady = true;

}

function gotPoses(results) {
    poses = results;

}

function drawSkeleton() {

    let pose = poses[0];
    noStroke();
    fill(0, 255, 180)
    for (let keypoint of pose.keypoint) {
        circle(keypoint.position.x, keypoint.position.y, 10, 10);
    }

}

function draw() {
    image(video, 0, 0);
}
