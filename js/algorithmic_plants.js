var lsys;
var turtle;
var steps = 0;
var selected_plant;
var plant;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  frameRate(4);
  clear();
  
  selected_plant = Math.floor(Math.random() * Object.keys(plants).length);
  plant = plants[selected_plant];
  turtle = new Turtle(plant);
  lsys = new LSystem(plant.axiom, plant.rules);
  
  console.log(plant.name, "\n", plant.axiom, "\n", plant.rules,  "\n", plant.theta,  "\n", plant.maxGenerations);
}

function draw() {
  console.log(steps);

  background(20, 2, 10);
  stroke(205, 220, 255, 70);
  strokeWeight(2);
  push();
  turtle.shrink();
  turtle.prep();
  lsys.generate();
  turtle.setInstructions(lsys.sentence);
  turtle.render();
  pop();

  steps++;

  if (steps > plant.maxGenerations) {
    noLoop();
  }
}

function mouseClicked() {
  selected_plant = (selected_plant+1) % Object.keys(plants).length;
  plant = plants[selected_plant];
  turtle = new Turtle(plant);
  lsys = new LSystem(plant.axiom, plant.rules);
  steps = 0;
  
  background(35, 20, 0);
  
  console.log(plant.name, "\n", plant.axiom, "\n", plant.rules,  "\n", plant.theta,  "\n", plant.maxGenerations);
  loop();
}