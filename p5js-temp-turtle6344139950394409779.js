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
  
  this.
  
  this.render = function() {
    for (var i = 0; i < this.axiom.length; i++) {
      var character = this.axiom.charAt(i);
      switch(character) {
        case 'F':
          line(0, 0, 0, -this.turtle.length);
          translate(0, -this.turtle.length);
          break;
        case 'G':
          translate(0, -this.turtle.length);
          break;
        case '+':
          rotate(this.turtle.rotateRight);
          break;
        case '-':
          rotate(this.turtle.rotateLeft);
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