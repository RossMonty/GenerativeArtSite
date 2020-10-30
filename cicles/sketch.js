var x = 0;
var y = 0;
var spacing = 0;
var circlesMult = 20;
var widthAdj;

xCol = 0.0;
yCol = 0.0;
zCol = 0.0;
colInc = 0.1;

function setup() {
  canvas = createCanvas(windowWidth,windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  background(0);
  spacing = windowWidth/circlesMult;
  widthAdj = 1;
}

function draw() {
  if (windowWidth >= 1920){
    widthAdj = 1.5;
  }
  else {
    widthAdj = 0.5;
  }
  if (windowWidth <= 854){
    widthAdj = 0.25;
  }
  circleSize = random(5,70)*widthAdj;

  xCol = xCol + colInc;
  yCol = yCol + colInc;
  zCol = zCol + colInc;
  r = noise(xCol)*255;
  g = noise(xCol,yCol)*255;
  b = noise(xCol,yCol,zCol)*255;

  ellipse(x,y,circleSize,circleSize);
  noStroke();
  fill(r,g,b);
  if (random(1)<0.5) {
    smallCircleSize = random(2,circleSize-5);
    ellipse(x,y,smallCircleSize,smallCircleSize);
      fill(r+100,g+100,b+100);

  }
  x = x + spacing;
  if (x>width) {
    x = 0;
    y = y + spacing;
  }
}
