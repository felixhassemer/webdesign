var p5 = require("p5");

var myp5 = new p5(function(sketch) {

  sketch.setup = function() {
    sketch.createCanvas(500, 500);
    sketch.background(0);
  }

}, 'canvContainer');
