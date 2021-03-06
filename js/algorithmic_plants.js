var lsys;
var turtle;
var selected = -1;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(25, 5, 10);
  stroke(205, 220, 255, 70);
  frameRate(4);
  strokeWeight(2);

  if (selected == -1)
    selected = Math.floor(Math.random() * Object.keys(plants).length);

  plant = plants[selected];
  turtle = new Turtle(plant);
  lsys = new LSystem(plant.axiom, plant.rules);
  steps = 0;
  
  console.log(plant.name, "\n", plant.maxGenerations);

}

function draw() {
  background(25, 5, 10);
  stroke(205, 220, 255, 70);

  if (steps >= plant.maxGenerations) {
    noLoop();
  }
  else {
    steps++;
  }

  // prepare turtle and draw L-System
  push();
  lsys.generate();
  turtle.shrink();
  turtle.prep();
  turtle.setInstructions(lsys.sentence);
  turtle.render();
  pop();

}

function reset() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(25, 5, 10);
  strokeWeight(2);
  frameRate(4);
  clear();

  if (selected == -1)
    Math.floor(Math.random() * Object.keys(plants).length);
  plant = plants[selected];
  turtle = new Turtle(plant);
  lsys = new LSystem(plant.axiom, plant.rules);
  steps = 0;
  
  
  console.log(plant.name, "\n", plant.maxGenerations);
  loop();
}

function windowResized() {
  reset();
}