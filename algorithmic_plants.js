var lsys;
var turtle;
var steps = 0;
var selected_plant;
var plant;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  
  var random_plant = Math.floor(Math.random() * Object.keys(plants).length);
  selected_plant = 0; //random_plant;
  plant = plants[selected_plant];
  console.log(plant);
  turtle = new Turtle(plant);
  lsys = new LSystem(plant.axiom, plant.rules);
  frameRate(4);
}

function draw() {  
  if (steps >= plant.maxGenerations) {
    noLoop();
  }
  
  background(0);
  stroke(195, 210, 245, 50);
  
  push();
  turtle.shrink();
  turtle.translateStart();
  lsys.generate();
  turtle.setInstructions(lsys.sentence);
  turtle.render();
  pop();
  
  steps++;
}

function mouseClicked() {
  selected_plant = (selected_plant+1) % Object.keys(plants).length);
  plant = plants[selected_plant];
  turtle = new Turtle(plant);
  lsys = new LSystem(plant.axiom, plant.rules);
  steps = 0;
  loop();
  
}