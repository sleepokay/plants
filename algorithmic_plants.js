var lsys;
var turtle;
var steps = 0;
var selected_plant;

function setup() {
  createCanvas(
    window.innerWidth,
    window.innerHeight
  );
  turtle = new Turtle(plant);
  lsys = new LSystem(plant.axiom, plant.ruleset);
  frameRate(4);
}

function draw() {
  if (framesPassed >= plant.maxGenerations) {
    noLoop();
  }
  push();
  background(0);
  stroke(255, 50);
  turtle.shrink();
  turtle.translateStart();
  lsys.generate();
  lsys.render();
  pop();
  framesPassed++;
}

function windowResized() {
  plant = plants[selected_plant];
  turtle = new Turtle(plant);
  lsys = new LSystem(plant, turtle);
  resizeCanvas(
    window.innerWidth,
    window.innerHeight
  );
  background(0);
  noLoop();
}