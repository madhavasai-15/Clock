var hr, mn, sc;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);  
  angleMode(DEGREES);
  noStroke();

  hr = hour();
  mn = minute();
  sc = second();

  hrangle = map(hr, 0 , 60, 0, 360);
  mnangle = map(mn, 0, 60, 0, 360);
  scangle = map(sc, 0, 60, 0, 360);

  fill(245);
  ellipse(width/2, height/2, width/14, width/14);

  
  push();
  noFill();
  stroke(245);
  strokeWeight(7);
  ellipse(width/2, height/2, width/3, width/3);
  ellipse(width/2, height/2, width/4, width/4);
  pop();

  

  fill(0);
  textSize(width/40);
  var time = hr + ' : ' + mn + ' : ' + sc;
  var time_ = textWidth(time);
  text(time, 0+time_/2, height/2);
  

  hand();
};

function hand(){
  push();
  translate(width/2, height/2);
  rotate(scangle);
  stroke(255, 0, 0);
  strokeWeight(7);
  line(0, 0, width/8, 0);
  pop();

  push();
  translate(width/2, height/2);
  rotate(mnangle);
  stroke(0, 255, 0);
  strokeWeight(7);
  line(0, 0, width/10, 0);
  pop();

  push();
  translate(width/2, height/2);
  rotate(hrangle);
  stroke(0, 0, 255);
  strokeWeight(7);
  line(0, 0, width/16, 0);
  pop();
};