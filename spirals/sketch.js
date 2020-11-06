var canvas;
var responsiveness = 7;
var spin = 1.05;
var drag = 0.001;
var numlines = 250;
var lines = [];
let setOrigin = false;
var mX= 0.0;
var mY= 0.0;
var multi = 0.3;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  background(25);
  for(let i = 0; i < numlines; i++) {
    lines.push(new Line());
  }
}

function mouseDragged() {
  for(let i = 0; i < lines.length; i++) {
    if (setOrigin == false) {
      lines[i].origin();
    }
    lines[i].update();
  }
  setOrigin = true;
}

function mouseReleased() {
  setOrigin = false;
}

function keyPressed() {
  if (keyCode === ENTER) {
    background(0, 0, 0);
  }
}

function draw() {
  strokeWeight(1);
  stroke(255, 15);
  mX += multi * (mouseX - mX);
  mY += multi * (mouseY - mY);
}

class Line {
  constructor() {
    this.X, this.Y, this.pX, this.pY;
    this.Xv = 0;
    this.Yv = 0;
    this.w = random(1/responsiveness, responsiveness);
  }

  origin() {
    this.X = mX;
    this.Y = mY;
    this.pX = mX;
    this.pY = mY;
  }

  update() {
    this.Xv = this.Xv/spin;
    this.Yv = this.Yv/spin;
    this.Xv += drag*(mX-this.X)*this.w;
    this.Yv += drag*(mY-this.Y)*this.w;
    this.X += this.Xv;
    this.Y += this.Yv;
    line(this.X, this.Y, this.pX, this.pY);
    this.pX = this.X;
    this.pY = this.Y;
  }
}
