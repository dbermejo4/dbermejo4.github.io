let mic;
function setup() {
  createCanvas(1000, 1000);
  mic=new p5.AudioIn();
  mic.start();
}

function draw() {
  let vol=mic.getLevel();
  background(200);
  let h=map(vol, 0,1,0,300);
  fill(120-h*30,230,140+h*10);
  beginShape();
  vertex(500,0);
  vertex(900,150+h*15);
  vertex(500,250);
  vertex(900,350-h*15);
  vertex(500,500);
  vertex(450,900);
  vertex(200,900);
  vertex(150,500);
  vertex(0,150);
  endShape(CLOSE);
  fill(20);
  ellipse(500,50,50+h*5,50+h*5)
  fill(100-h*30,100+h*40,240-h*60);
ellipse(500,50,20+h*5,20+h*5)
} 
