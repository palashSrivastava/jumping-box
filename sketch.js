var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    box1=createSprite(0,580,360,30)
    box1.shapeColor="blue";
    box2=createSprite(295,580,200,30);
    box2.shapeColor="green";
    box3=createSprite(515,580,200,30);
    box3.shapeColor="red";
    box4=createSprite(740,580,220,30);
    box4.shapeColor="yellow";
    ball=createSprite(random(20,750),100,40,40);
    ball.shapeColor="cyan";
    ball.velocityX=4;
    ball.velocityY=9;






    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges=createEdgeSprites();
ball.bounceOff(edges);

if(box1.isTouching(ball) && ball.bounceOff(box1)) {
    ball.shapeColor="blue";
    music.play();
}
if(box2.isTouching(ball) ) {
    ball.shapeColor="green";
    ball.velocityX=0;
    ball.velocityY=0;
    music.stop();
}
if(box3.isTouching(ball) && ball.bounceOff(box3)) {
    ball.shapeColor="red";
    music.play();
}
if(box4.isTouching(ball) && ball.bounceOff(box4)) {
    ball.shapeColor="yellow";
    music.play();
}

drawSprites();


    //add condition to check if box touching surface and make it box
}
