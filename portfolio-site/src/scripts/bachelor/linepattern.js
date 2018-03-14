var p5 = require("p5");

var sketch1 = function( p ) {

  // SETUP
  p.setup = function() {
    // get parent width and height (set in CSS)
    var cnvParent = document.getElementById('sketch1');
    var w = cnvParent.offsetWidth;
    var h = cnvParent.offsetHeight;
    p.createCanvas(w,h);

    p.frameRate(10);
    p.background(p.col.bgnd);

    p.initPatterns();

    // initialize Variables
    p.str.off = p.str.weight/2;
    p.str.cap = p.ROUND;
    p.str.join = p.ROUND;

    p.u.w = p.int(p.random(p.u.wMin, p.u.wMax));
    p.u.h = p.int(p.random(p.u.hMin, p.u.hMax));
  };

  // ----------------------------------------------------------
  // DRAW
  p.draw = function() {
    // Assign noise to Array values
    p.setPatternNoise();

    // sort patterns by value
    p.patterns.sort(function(a, b){
      return a.value-b.value;
    });

    // map noise to choose function
    p.choose.main = p.map(p.noise(p.n.x.off), 0, 1, 0, 100);

    // set Unit Width to random or until margin
    p.setWidth();

    // selects pattern with next highest value
    p.chooseFunction();

    // set Unit Height to random  or move X
    p.setHeight();

    // NOISE increment
    p.n.x.off += p.n.x.incr;
    p.n.y.off += p.n.y.incr;

    p.scrollScreen();
  };

  // ----------------------------------------------------------
  // CORE FUNCTIONS

  p.initPatterns = function() {
    for (let i=0; i < p.fnArray.length; i++) {
      p.patterns[i] = {
        fn: p.fnArray[i],
        value: 0,
        start: p.random(100000)
      }
    }
  };

  p.setPatternNoise = function() {
    for (let i=0; i < p.patterns.length; i++) {
      p.patterns[i].value = p.map(p.noise(p.n.y.off + p.patterns[i].start), 0, 1, 0, 100);
    }
  };

  p.setWidth = function() {
    if (p.dist(p.pos.x, p.pos.y, p.width, p.pos.y) > p.u.wMax) {
      p.u.w = p.round(p.random(p.u.wMin, p.u.wMax));
    } else {
      p.u.w = p.round(p.dist(p.pos.x, p.pos.y, p.width, p.pos.y));
    }
  };

  p.setHeight = function() {
    if (p.pos.x + p.u.w > p.width-1) {
      // random Unit Height
      p.pos.x = 0;
      p.pos.y += p.u.h;
      p.u.h = p.round(p.random(p.u.hMin, p.u.hMax));
    } else {
      p.pos.x += p.u.w;
    }
  };

  p.chooseFunction = function() {
    // variable for maximum value in array
    p.choose.max = p.patterns[p.patterns.length-1].value;

    for (let i=0; i < p.patterns.length; i++) {
      if (p.choose.main < p.patterns[i].value) {
        p.patterns[i].fn();
        break;
      } else if (p.choose.main > p.choose.max) {  // use function with lowest value if choose.main exceeds all other values
        p.patterns[0].fn();
        break;
      }
    }
  };

  p.scrollScreen = function() {
    if (p.pos.y + p.u.h >= p.height) {
      p.copy(0, 0, p.width, p.pos.y,
            0, -p.u.h, p.width, p.pos.y);
      p.fill(p.col.bgnd);
      p.noStroke();
      p.rect(0, p.pos.y - p.u.h, p.width, p.u.hMax);
      p.pos.y = p.pos.y - p.int(p.u.h);
    }
  }

  // ----------------------------------------------------------
  // PATTERN FUNCTIONS

  p.diagLine = function() {
    // STYLING
    p.stroke(p.col.s);
    p.strokeWeight(p.str.weight);
    p.strokeCap(p.str.cap);
    p.strokeJoin(p.str.join);
    p.noFill();

    // PATTERN
    p.choose.local = p.round(p.random(1));
    if (p.choose.local == 0) {
      p.line(p.pos.x + p.str.off, p.pos.y + p.str.off,
            p.pos.x + p.u.w - p.str.off, p.pos.y + p.u.h - p.str.off);
    } else {
      p.line(p.pos.x + p.str.off, p.pos.y + p.u.h - p.str.off,
            p.pos.x + p.u.w - p.str.off, p.pos.y + p.str.off);
    }
  };

  p.triangleDraw = function() {
    p.choose.local = p.round(p.random(1));

    // STYLING
    p.fill(p.col.f);
    p.noStroke();

    // PATTERN
    if (p.choose.local == 0) {
      p.triangle(p.pos.x, p.pos.y,
        p.pos.x + p.u.w, p.pos.y,
        p.pos.x, p.pos.y + p.u.h);
    } else if (p.choose.local == 1) {
      p.triangle(p.pos.x + p.u.w, p.pos.y,
        p.pos.x + p.u.w, p.pos.y + p.u.h,
        p.pos.x, p.pos.y + p.u.h);
    }
  };

  p.curves = function() {
    p.choose.local = p.round(p.random(7));

    // STYLING
    if (p.choose.local < 4) {
      p.noFill();
      p.stroke(p.col.s);
      p.strokeWeight(p.str.weight);
      p.strokeCap(p.str.cap);
      p.strokeJoin(p.str.join);
    } else {
      p.fill(p.col.f);
      p.noStroke();
    }

    // PATTERN
    if (p.choose.local == 0) {
      p.bezier( p.pos.x, p.pos.y + p.u.h/2, // vertex mid-left
        p.pos.x+p.u.w/2, p.pos.y+p.u.h/2,
        p.pos.x+p.u.w/2, p.pos.y+p.u.h-p.str.off,
        p.pos.x+p.u.w, p.pos.y+p.u.h-p.str.off); //vertex down-right
    } else if (p.choose.local == 1) {
      p.bezier( p.pos.x+p.u.w, p.pos.y+p.u.h/2, // vertex mid-right
        p.pos.x+p.u.w/2, p.pos.y+p.u.h/2,
        p.pos.x+p.u.w/2, p.pos.y+p.u.h-p.str.off,
        p.pos.x, p.pos.y+p.u.h-p.str.off); //vertex down-left
    } else if (p.choose.local == 2) {
      p.bezier( p.pos.x+p.u.w, p.pos.y+p.u.h/2, // vertex mid-right
        p.pos.x+p.u.w/2, p.pos.y+p.u.h/2,
        p.pos.x+p.u.w/2, p.pos.y+p.str.off,
        p.pos.x, p.pos.y+p.str.off); // vertex up-left
    } else if (p.choose.local == 3) {
      p.bezier( p.pos.x, p.pos.y+p.u.h/2, // vertex mid-left
        p.pos.x+p.u.w/2, p.pos.y+p.u.h/2,
        p.pos.x+p.u.w/2, p.pos.y+p.str.off,
        p.pos.x+p.u.w, p.pos.y+p.str.off); // vertex up-right
    } else if (p.choose.local == 4) {
      // filled shape
      p.beginShape();
      p.vertex (p.pos.x, p.pos.y+p.u.h/2); // vertex mid-left
      p.bezierVertex( p.pos.x+p.u.w/2, p.pos.y+p.u.h/2,
        p.pos.x+p.u.w/2, p.pos.y+p.u.h,
        p.pos.x+p.u.w, p.pos.y+p.u.h); // vertex down-right
      p.bezierVertex( p.pos.x+p.u.w, p.pos.y+p.u.h,
        p.pos.x, p.pos.y+p.u.h,
        p.pos.x, p.pos.y+p.u.h); // vertex down-left
      p.endShape();
    } else if (p.choose.local == 5) {
      // filled shape
      p.beginShape();
      p.vertex (p.pos.x+p.u.w, p.pos.y+p.u.h/2); // vertex mid-right
      p.bezierVertex( p.pos.x+p.u.w/2, p.pos.y+p.u.h/2,
        p.pos.x+p.u.w/2, p.pos.y+p.u.h,
        p.pos.x, p.pos.y+p.u.h); // vertex down-left
      p.bezierVertex( p.pos.x, p.pos.y+p.u.h,
        p.pos.x+p.u.w, p.pos.y+p.u.h,
        p.pos.x+p.u.w, p.pos.y+p.u.h); // vertex down-right
      p.endShape();
    } else if (p.choose.local == 6) {
      // filled shape
      p.beginShape();
      p.vertex (p.pos.x+p.u.w, p.pos.y+p.u.h/2); // vertex mid-right
      p.bezierVertex( p.pos.x+p.u.w/2, p.pos.y+p.u.h/2,
        p.pos.x+p.u.w/2, p.pos.y,
        p.pos.x, p.pos.y); // vertex up-left
      p.bezierVertex( p.pos.x, p.pos.y,
        p.pos.x+p.u.w, p.pos.y,
        p.pos.x+p.u.w, p.pos.y); // vertex up-right
      p.endShape();
    } else if (p.choose.local == 7) {
      // filled shape
      p.beginShape();
      p.vertex (p.pos.x, p.pos.y+p.u.h/2); // vertex mid-left
      p.bezierVertex( p.pos.x+p.u.w/2, p.pos.y+p.u.h/2,
        p.pos.x+p.u.w/2, p.pos.y,
        p.pos.x+p.u.w, p.pos.y); // vertex up-right
      p.bezierVertex( p.pos.x+p.u.w, p.pos.y,
        p.pos.x, p.pos.y,
        p.pos.x, p.pos.y); // vertex up-left
      p.endShape();
    }
  };

  p.circle = function() {
    p.choose.local = p.round(p.random(1));
    // Local VARIABLES
    var circleSize = 0;
    var half = {
      off: p.radians(p.map(p.round(p.random(8)), 0, 8, 0, 360)),  // offset rotation in 45° steps
      start: p.radians(0),  // set arc to 180°
      end: p.radians(180)
    }

    // STYLING
    p.str.choose = p.round(p.random(1));
    if (p.str.choose == 0) {
      p.noStroke();
      p.fill(p.col.f);
    } else {
      p.noFill();
      p.stroke(p.col.s);
      p.strokeWeight(p.str.weight);
      p.strokeCap(p.str.cap);
      p.strokeJoin(p.str.join);
    }

    // determine size of circle
    if (p.u.w < p.u.h) {
      circleSize = p.random(p.u.w/8, p.u.w);
    } else {
      circleSize = p.random(p.u.h/8, p.u.h);
    }

    // PATTERN
    if (p.choose.local == 0) {
      p.ellipse(p.pos.x + p.u.w/2, p.pos.y + p.u.h/2, circleSize, circleSize);
    } else {
      p.arc(p.pos.x + p.u.w/2, p.pos.y + p.u.h/2, circleSize, circleSize, half.start + half.off, half.end + half.off, p.PIE);
    }
  };

  p.diagLine2 = function() {
    p.choose.local = p.round(p.random(1));

    // STYLING
    p.stroke(p.col.s);
    p.strokeWeight(p.str.weight);
    p.strokeCap(p.str.cap);
    p.strokeJoin(p.str.join);
    p.noFill();

    // PATTERN
    p.beginShape();
    if (p.choose.local == 0) {
      p.vertex(p.pos.x, p.pos.y + p.str.off);
      p.vertex(p.pos.x + p.u.w/3, p.pos.y + p.u.h/3);
      p.vertex(p.pos.x + p.u.w - p.u.w/3, p.pos.y + p.u.h/3);
      p.vertex(p.pos.x + p.u.w, p.pos.y + p.u.h - p.str.off);
    } else {
      p.vertex(p.pos.x + p.u.w, p.pos.y + p.str.off);
      p.vertex(p.pos.x + p.u.w - p.u.w/3, p.pos.y + p.u.h - p.u.h/3);
      p.vertex(p.pos.x + p.u.w/3, p.pos.y + p.u.h - p.u.h/3);
      p.vertex(p.pos.x, p.pos.y + p.u.h - p.str.off);
    }
    p.endShape();
  };

  p.horizontLines = function() {
    // local VARIABLES
    var lineMax = p.round(p.random(3, 6));
    // STYLING
    p.stroke(p.col.s);
    p.strokeWeight(p.str.weight);
    p.strokeCap(p.PROJECT);
    p.strokeJoin(p.str.join);
    p.noFill();

    // PATTERN
    for (let i=1; i<=lineMax; i++) {
      p.line(p.pos.x + p.str.off, p.pos.y + i * p.u.h/(lineMax+1),
            p.pos.x + p.u.w - p.str.off, p.pos.y + i * p.u.h/(lineMax+1));
    }
  };

  p.lineFigures = function() {
    p.choose.local = p.round(p.random(1));

    // local variables
    var ln = {
      min: 3,
      max: 7,
      num: 0,
      choose: 0
    }
    var temp = {
      x: 0,
      y: 0
    }

    // set line count
    ln.num = p.round(p.random(ln.min, ln.max));

    // STYLING
    p.noFill();
    p.stroke(p.col.s);
    p.strokeWeight(p.str.weight);
    p.strokeCap(p.str.cap);
    p.strokeJoin(p.str.join);

    // draw Linefigure
    p.beginShape();
    for (let i=0; i< ln.num; i++) {
      if (p.choose.local == 0) {
        // x either 0 or u.w
        ln.choose = p.round(p.random(1));
        if (ln.choose == 0) {
          temp.x = p.u.w/6;
        } else {
          temp.x = p.u.w-p.u.w/6;
        }
        temp.y = p.round(p.random(p.u.h));
      } else {
        // y either 0 or u.h
        ln.choose = p.round(p.random(1));
        if(ln.choose == 0) {
          temp.y = p.u.h/6;
        } else {
          temp.y = p.u.h - p.u.h/6;
        }
        temp.x = p.round(p.random(p.u.w));
      }
      // draw vertices
      p.vertex(p.pos.x + temp.x, p.pos.y + temp.y);
    }
    p.endShape();
  };

  p.sineWave = function() {
    // STYLING
    p.stroke(p.col.s);
    p.strokeWeight(p.str.weight);
    p.strokeCap(p.str.cap);
    p.strokeJoin(p.str.join);
    p.noFill();

    // PATTERN
    p.beginShape();
    for (let i=0; i < p.u.w; i++) {
      p.sine.scale = p.map(p.noise(p.sine.off+6000), 0, 1, 0, p.u.h/2);
      p.sine.incr = p.map(p.noise(p.sine.off), 0, 1, p.PI/180, p.PI/6);
      var tempY = p.u.h/2 + (p.sin(p.sine.angle) * p.sine.scale);
      p.vertex(p.pos.x+i, p.pos.y+tempY);
      // increment noise for sine
      p.sine.angle += p.sine.incr;
      p.sine.off += p.sine.offincr;
    }
    p.endShape();
  };

  p.space = function() {};


  // ----------------------------------------------------------
  // GLOBAL VARIABLES

  p.u = {
    wMin: 30,
    wMax: 80,
    hMin: 30,
    hMax: 80,
    w: 0,
    h: 0
  };

  p.choose = {
    main: null,
    max: null,
    local: null
  };

  p.fnArray = [
    p.diagLine,
    p.triangleDraw,
    p.curves,
    p.circle,
    p.diagLine2,
    p.horizontLines,
    p.lineFigures,
    p.sineWave,
    p.space
  ];

  p.patterns = [];

  p.n = {
    x: {
      off: null,
      incr: 0.04
    },
    y: {
      off: null,
      incr: 0.001
    }
  };

  p.sine = {
    angle: null,
    scale: null,
    off: null,
    offincr: 0.005,
    incr: 3.14/14
  };

  p.pos = {
    x: 0,
    y: 0
  };

  p.col = {
    bgnd: 0,
    f: 255,
    s: 255
  };

  p.str = {
    weight: 3,
    off: 0,
    cap: 0,
    join: 0,
    choose: 0
  };

};

var myp5 = new p5(sketch1, 'sketch1');
