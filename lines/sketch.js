var canvas;
const lines = [];

function setup() {
	canvas = createCanvas(windowWidth,windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
	const linesLength = Math.min(Math.floor(windowWidth / 10), 100);
}

function mousePressed() {
  lines.push(new Line(mouseX, mouseY));
}

function draw() {
	background(25);
	lines.forEach((_line, i) => {
		_line.update();
		_line.checkLines(lines.slice(i));
	});
}

class Line {
	constructor(x,y) {
		this.pos = createVector(x, y);
		this.vel = createVector(random(-1, 1), random(-1, 1));
		this.size = 5;
	}
	update() {
		this.pos.add(this.vel);
		this.edges();
	}
	edges() {
		if(this.pos.x < 0 || this.pos.x > width) {
			this.vel.x *= -1;
		}
		if(this.pos.y < 0 || this.pos.y > height) {
			this.vel.y *= -1;
		}
	}
	checkLines(lines) {
		lines.forEach(_line => {
			const d = dist(this.pos.x, this.pos.y, _line.pos.x, _line.pos.y);
			if(d < 150) {
        stroke(255,255,255,100);
				line(this.pos.x, this.pos.y, _line.pos.x, _line.pos.y)
			}
		});
	}
}
