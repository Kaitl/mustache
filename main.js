var noseX=0
var noseY=0

function preload() {
    mutschach = loadImage('https://i.postimg.cc/GtZmnq75/fancy-moustache-noirty-designs-removebg-preview.png'
    )
}

function setup(){
    canvas = createCanvas(300,300)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(300,300)
    video.hide()

    poseNet=ml5.poseNet(video, modelLoaded )
    poseNet.on('pose', gotPoses)
}

function gotPoses(results){
    if(results.length>0){
        console.log(results)
        noseX=results[0].pose.nose.x
        noseY=results[0].pose.nose.y
        console.log("nose x = "+noseX)
        console.log("nose y = "+noseY)
    }
}

function modelLoaded(){
    console.log('PoseNet')
}

function draw() {
    image(video, 0, 0, 300, 300)
    image(mutschach, noseX-150, noseY-120,300,300)
}

function RAH(){
    save('myFilterImage.png')
}

