function Turtle(plant) {
  // plant contains all the parameters: axiom, production rules,
  // draw length, scaling factor, rotation, and translations
  this.length = plant.initialLength;
  this.theta = plant.theta
  this.scalingFactor = plant.scalingFactor;
  this.translateX = plant.translateX;
  this.translateY = plant.translateY;
  
  this.scale = function() {
    this.length *= this.scalingFactor;
  }
  
  this.setInstructions(instructions) {
    this.instructions = instructions;    
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
    for (var i = 0; i < this.axiom.length; i++) {
      var character = this.axiom.charAt(i);
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