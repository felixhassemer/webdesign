var p5 = require("p5");

var myp5 = new p5(function(sk) {
  var c = {
    w: window.innerWidth,
    h: window.innerHeight/2
  }

  var steps = 15;

  var n = {
    off: [steps],
    incr: 0.001,
    value: [],
    scl: 100
  }

  sk.setup = function() {
    sk.createCanvas(c.w, c.h);
    sk.background(0);
    sk.noStroke();
    sk.frameRate(60);

    for (let i=0; i < steps; i++) {
      n.off[i] = sk.random(20000);
    }
  }

  sk.draw = function() {
    sk.background(0);
    sk.translate(c.w/2, c.h/2);

    let fillC = 0;

    sk.noiseOffset();

    let factor = c.w / steps;
    let cStep = 255/steps;

    let mX = sk.mouseX - c.w/2;

    n.scl = mX;

    for (let i=steps; i > 0; i--) {
      let posX = (mX/steps * i) + (n.value[i] * n.scl);
      // console.log(posX);

      sk.fill(fillC);
      if (i == 1) sk.fill(210, 0, 60); // red color
      fillC += cStep;
      if (i % 2 == 0) sk.ellipse(posX, 0, i*factor);
      else sk.ellipse(-posX, 0, i*factor);
    }

  }

  sk.noiseOffset = function() {
    for (let i=0; i < steps; i++) {
      n.value[i] = sk.noise(n.off[i]);
      n.off[i] += n.incr;
    }
  }

  // funktioniert noch nicht
  // sk.windowResized = function() {
  //   sk.setup();
  // }

}, 'canvContainer');
