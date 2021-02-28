var bg;
var a,b,c,d;
var square, edges;
function setup(){
bg = createCanvas(800,600);
a = createSprite(0,580,360,30);
a.shapeColor = "turquoise";
b = createSprite(295,580,200,30);
b.shapeColor = "purple";
c = createSprite(515,580,200,30);
c.shapeColor = "aqua";
d = createSprite(740,580,220,30);
d.shapeColor = "pink";
square = createSprite(random(20,750),100,40,40);
square.shapeColor = "white";
square.velocityX = 5;
square.velocityY = 10;
}
function draw() {
background(rgb(170,170,170));
edges = createEdgeSprites();
square.bounceOff(edges);
if(a.isTouching(square) && square.bounceOff(a)){
square.shapeColor = "turquoise";
}
if(b.isTouching(square)){
square.shapeColor = "purple";
square.velocityX = 0;
square.velocityY = 0;
}
if(c.isTouching(square) && square.bounceOff(c)){
square.shapeColor = "aqua";
}
if(d.isTouching(square) && square.bounceOff(d)){
square.shapeColor = "pink";
}
drawSprites();
}