var lsys;
var turtle;
var selected = -1;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  frameRate(4);
  clear();
  
  background(20, 2, 10);
  stroke(205, 220, 255, 70);
  strokeWeight(2);

  selected = Math.floor(Math.random() * Object.keys(plants).length);
  plant = plants[selected];
  turtle = new Turtle(plant);
  lsys = new LSystem(plant.axiom, plant.rules);
  steps = 0;
  
  console.log(plant.name, "\n", plant.maxGenerations);

}

function draw() {
  console.log("step: " + steps);
  background(20, 2, 10);
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
  if (selected == -1)
    Math.floor(Math.random() * Object.keys(plants).length);
  plant = plants[selected];
  turtle = new Turtle(plant);
  lsys = new LSystem(plant.axiom, plant.rules);
  steps = 0;
  
  background(20, 2, 10);
  
  console.log(plant.name, "\n", plant.axiom, "\n", plant.rules,  "\n", plant.theta,  "\n", plant.maxGenerations);
  loop();
}

function windowResized() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(20, 2, 10);

  plant = plants[selected];
  turtle = new Turtle(plant);
  lsys = new LSystem(plant.axiom, plant.rules);
  steps = 0;
  
  
  console.log(plant.name, "\n", plant.axiom, "\n", plant.rules,  "\n", plant.theta,  "\n", plant.maxGenerations);
  loop();
}