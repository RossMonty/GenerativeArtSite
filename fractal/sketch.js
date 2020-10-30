xCol = 0.0;
yCol = 0.0;
zCol = 0.0;
colInc = 10;
alph = 0.2;
hueLev = 100;
satLev = 200;
brightLev = 150;

function setup() {
	canvas = createCanvas(windowWidth,windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  background(0);
	colorMode(HSB);
  blendMode(DIFFERENCE);
	noLoop();
	angleMode(DEGREES);
}

function draw() {
	translate(width/2, height/2);
	rotate(90/2);
	branchComponent(100, 20, 10);
  branchComponent(85, 15, 10);
  branchComponent(60, 15, 10);
  branchComponent(45, 15, 10);
  branchComponent(30, 15, 10);
}

function branchComponent(len, amount, angle) {
	var increment = 360/amount;
	var rotAmount;
	for (var i = 0; i < amount; i++) {
		push();
		rotAmount = -180 + increment * i
		rotate(random(rotAmount - 60, rotAmount));
		newColour();
		branch(len, angle, 1);
		pop();
	}
}

function branch(len, angle, gen) {

	line(0, 0, 0, -len);
	translate(0, -len);
	len *= 0.7;
	angle = random(angle-30, angle+20);
	if (len > 0.5) {
		push();
		rotate(angle);
		branch(len, angle, gen);
		pop();
		push();
		rotate(-angle);
		branch(len, angle, gen);
		pop();
	}
}

function newColour() {
  xCol = xCol + colInc;
  yCol = yCol + colInc;
  zCol = zCol + colInc;
  h = noise(xCol)*hueLev;
  s = noise(xCol,yCol,zCol)*satLev;
	b = noise(xCol,yCol)*brightLev;
  stroke(h,s,b,alph);
}
