noseX=0;
noseY=0;
righteyeX=0;
lefteyeX=0;
righteyeY=0;
lefteyeY=0;
function preload(){
mustache=loadImage('https://i.postimg.cc/K8n6KhSy/mustache-student-math-favorite-for-friday-the-the-1.png');
}

function setup(){
    canvas=createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('posenet is initialized');
}

function draw(){
image(video, 0, 0, 300, 300);
fill(255, 0, 0);
stroke(255, 0, 0);
image(mustache, noseX, noseY, 50, 30);
}

function take_snapshot(){
    save('myFilterImage.png');
}

function gotPoses(results){
    if(results.length>0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x-20;
        noseY=results[0].pose.nose.y+5;
        righteyeX=results[0].pose.rightEye.x;
        righteyeY=results[0].pose.rightEye.y;
        lefteyeX=results[0].pose.leftEye.x;
        lefteyeY=results[0].pose.leftEye.y;
    }
}