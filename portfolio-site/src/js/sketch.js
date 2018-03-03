var c = {
  w: window.innerWidth,
  h: window.innerHeight
}

var incr = 60;
var steps = 15;
var easing = 0.1;
// var x = 0;

var n = {
  off: [],
  incr: 0.01,
  value: [],
  scl: 100
}

function setup() {
  createCanvas(c.w, c.h);
  background(0);
  noStroke();
  frameRate(20);

  for (let i = 0; i < steps; i++) {
    n.off[i] = random(20000);
  }
}

function draw() {
  background(0);
  let fillC = 0;
  translate(c.w/2, c.h/2);

  noiseOffset();

  let factor = c.w / steps;
  let cStep = 255 / steps;

  let mX = mouseX-c.w/2;

  // easing test
  // let targetX = mX;
  // let dx = targetX - x;
  // x += dx * easing;
  // ellipse(x, 0, 30);

  n.scl = mX * 2;

  for (let i = steps; i > 0; i--) {

    let posX = (mX/steps * i) + (n.value[i] * n.scl);




    fill(fillC);
    if (i == 1) fill(210, 0, 60); // red color
    fillC += cStep;
    if (i % 2 == 0) ellipse(posX,0,i * factor);
    else ellipse(-posX, 0, i* factor);
  }
}

function noiseOffset() {
  for (let i=0; i < steps; i++) {
    n.value[i] = noise(n.off[i]);
    n.off[i] += n.incr;
  }
  // console.log(n.off, n.value);
}
