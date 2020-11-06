var particles = [];
partIsClicked = false;

function setup() {
  canvas = createCanvas(windowWidth,windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  const particlesLength = Math.min(Math.floor(windowWidth / 100), 100);
  for (let i = 0; i<particlesLength; i++) {
    particles.push(new Particle(width/2,height/2));
  }
}

function mousePressed() {
  for (let i = 0; i<particles.length; i++) {
    particles[i].clicked();
  }
  if (partIsClicked == false) {
    particles.push(new Particle(mouseX,mouseY));
  }
}

function draw() {
  print(partIsClicked);
  background(25);
  for (var i = 0; i < particles.length; i++) {
    particles[i].show();
    particles[i].update();
  }
}

class Particle  {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0,0);
    this.history = [];
    this.r = 20;
    this.pFill = color(255,150);
  }

  update() {
    this.vel.x += random(-0.1,0.1);
    this.vel.y += random(-0.1,0.1);

    this.pos.add(this.vel);

    var v = createVector(this.pos.x, this.pos.y);
    this.history.push(v);
    if (this.history.length > this.r) {
      this.history.splice(0, 1);
    }
    this.edges();
  }

  clicked() {
    let d = dist(mouseX, mouseY, this.pos.x, this.pos.y);
    if (d <= this.r) {
      partIsClicked = true;
      this.pFill = color(random(0,255),random(0,255),random(0,255));
    } else {
      partIsClicked = false;
    }
  }

  edges() {
    if(this.pos.x < 0 || this.pos.x > width) {
      this.vel.x *= -1;
    }
    if(this.pos.y < 0 || this.pos.y > height) {
      this.vel.y *= -1;
    }
  }

  show() {
    noStroke(0);
    beginShape();
    for (var i = 0; i < this.history.length; i++) {
      var pos = this.history[i];
      fill(this.pFill,150);
      ellipse(pos.x, pos.y, i, i);
    }
    endShape();
  }
}
