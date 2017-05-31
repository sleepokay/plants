function Turtle(plant) {
  // plant contains all the parameter values: axiom, production rules,
  // draw length, scaling factor, rotation, and translations
  this.length = window.innerHeight / plant.initialLength;
  this.theta = radians(plant.theta);
  this.scalingFactor = plant.scalingFactor;
  this.translateX = plant.translateX;
  this.translateY = plant.translateY;
  this.instructions = plant.axiom;
  this.thickness = plant.initialThickness;
  
  this.shrink = function() {
    this.length *= this.scalingFactor;
  }
  
  this.setInstructions = function(instructions) {
    this.instructions = instructions;    
  }
  
  this.prep = function() {
    if (this.translateX || this.translateY) {
      translate(width / 2 + this.translateX, height - 100 + this.translateY);
    } else {
      translate(width / 2, height - 100);
    }
  }
  
  /*
  Standard rule set:
    F: Draw a line and move forward
    G: Move forward (without drawing a line)
    +: Rotate right
    -: Rotate left
    [: Save current location
    ]: Restore previous location
  */
  this.render = function() {
    for (var i = 0; i < this.instructions.length; i++) {
      var character = this.instructions.charAt(i);
      switch(character) {
        case 'F':
          line(0, 0, 0, -this.length);
          translate(0, -this.length);
          break;
        case 'G':
          translate(0, -this.length);
          break;
        case '+':
          rotate(-this.theta);
          break;
        case '-':
          rotate(this.theta);
          break;
        case '[':
          push();
          break;
        case ']':
          pop();
          break;
        default:
          break;
      }
    }
  }
}