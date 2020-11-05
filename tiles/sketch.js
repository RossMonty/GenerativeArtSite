var canvas;

let x = 0;
let y = 0;

let numAcross;
let squareWidth;

let alph;

var colours = ["#14485d",
               "#065a69",
               "#a03626",
               "#7f3d3b",
               "#63413e"];

function setup() {
  canvas = createCanvas(windowWidth,windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');

  if (windowWidth<=450) {
   numAcross = 10;
  } else
  numAcross = 15;
  if (windowWidth>=1920) {
    numAcross = 20;
  }
  background(255);
  stroke(255);
  smooth();
  squareWidth = width/numAcross;

}

function draw() {
  alph = int(random(100,255));
  hexAlph = alph.toString(16);
  fillColour = colours[Math.floor(Math.random() * colours.length)];
  tile();

  x = x + squareWidth;
  if (x>width) {
    x = 0;
    y = y + squareWidth;
  }
  if ((x==width) && (y==height)) {
    noLoop();
  }
}

function tile() {
  push();
  noStroke();
  fill(fillColour + hexAlph);
  rect(x,y,squareWidth,squareWidth);
  pop();
  push();
  noStroke();
  fill(fillColour + hexAlph);
  quad(x+random(0,squareWidth),y+random(0,squareWidth),x+random(0,squareWidth),y+random(0,squareWidth),x+random(0,squareWidth),y+random(0,squareWidth),x+random(0,squareWidth),y+random(0,squareWidth));
  //arc(x,y,random(0,squareWidth),random(0,squareWidth),0,PI);
  //line(random(x,x+squareWidth),y+squareWidth,x+squareWidth,y+random(0,squareWidth))
  //triangle(random(x,x+squareWidth),y,x,y+squareWidth,x+squareWidth,y+random(0,squareWidth));
  pop();
}
