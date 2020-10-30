
x = 0;
y = 0;
spacing = 0;
circlesMult = 20;

xCol = 0.0;
yCol = 0.0;
zCol = 0.0;
colInc = 0.1;

function setup() {
  canvas = createCanvas(windowWidth,windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  background(0);
  spacing = width/circlesMult;
}

function draw() {
  circleSize = random(10,75);
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
