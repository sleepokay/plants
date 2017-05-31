function LSystem(axiom, rules) {
  this.sentence = axiom;
  this.rules = rules;

  this.generate = function() {
    var nextString = [];
    for (var i = 0; i <= this.sentence.length; i++) {
      var character = this.sentence.charAt(i);
      if (character in this.rules) {
        nextString.push(
          this.rules[character]
        );
      } else {
        nextString.push(character);
      }
    }
    this.sentence = nextString.toString();
    return this.sentence;
  }
}