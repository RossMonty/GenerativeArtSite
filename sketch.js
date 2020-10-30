var canvas;

let x = 0;
let y = 0;
let spacing = 20;

function setup() {
  canvas = createCanvas(windowWidth,windowHeight);
  canvas.position(0,0);
  background(0);
}

function draw() {
  stroke(255);
  if (random(1)<0.2)  {
    line(x,y,x+spacing,y+spacing);
    line(width-x,y,width-(x+spacing),y+spacing);
  } else {
    line(x,y+spacing,x+spacing,y);
    line(width-x,y+spacing,width-(x+spacing),y);
  }
  x = x + spacing;
  if (x>width/2) {
    x = 0;
    y = y + spacing;
  }
}
