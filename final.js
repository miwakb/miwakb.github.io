var teacup;

function preload(){
    teacup=loadModel("teacup2.obj", true);
}
function setup(){
    createCanvas(500,500,WEBGL);
    perspective (PI/ 3.0, width / height, 0.1,500);
}
function draw(){
    background(0);
    orbitControl();
    keyPressed();
    rotateX(85);
    scale (1);
    normalMaterial();
    model(teacup, 0, 0, 500, 500);
}
function keyPressed(){
    if (keyCode === RIGHT_ARROW){
        rotateY(frameCount * 0.01);
    }
    else if (keyCode === LEFT_ARROW){
        rotateY(frameCount * -0.01);
    }
    else if (keyCode === UP_ARROW){
        rotateX(frameCount * 0.01);
    }
    else if (keyCode === DOWN_ARROW){
        rotateX(frameCount * -0.01);
    }
}