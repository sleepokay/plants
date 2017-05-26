function LSystem(axiom, ruleset) {
  this.sentence = plant.axiom;
  this.ruleset = plant.ruleset;

  this.generate = function() {
    var nextString = [];
    for (var i = 0; i <= this.axiom.length; i++) {
      var character = this.axiom.charAt(i);
      if (character in this.rules) {
        nextString.push(
          this.ruleset[character]
        );
      } else {
        nextString.push(character);
      }
    }
    this.sentence = nextString.toString();
  }
}