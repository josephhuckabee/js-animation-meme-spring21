imgSwap = [];
let press = 0;

function preload(){
  imgSwap[0] = loadImage("matrix.png");
  imgSwap[1] = loadImage("pepe.png");
  
}

function setup() {
  createCanvas(500, 350);
   background(219,225,119);

}

function draw() {

  image(imgSwap[press], 0,0, 500, 400);
  
  //bullets
  noStroke();
  fill(225);
  ellipse(random(500), random(100,300), 12, 12);
  fill(255);
   ellipse(random(500), random(100,300), 12, 12);
  fill(0);
     ellipse(random(500), random(100,300), 12, 12);
       ellipse(random(500), random(100,300), 12, 12);
  }
function mousePressed(){
  press++;
  if (press>1){
    press=0;
  }
}