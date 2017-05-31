var lsys;
var turtle;

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
  console.log(steps);
  background(20, 2, 10);
  stroke(205, 220, 255, 70);



  // prepare turtle and draw L-System
  push();
  turtle.shrink();
  turtle.prep();
  ;
  turtle.setInstructions(lsys.generate());
  turtle.render();
  pop();

  steps++;
  if (steps > plant.maxGenerations)
    noLoop();
}

function reset() {
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