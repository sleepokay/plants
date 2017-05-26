var plants = {
  0: {
    name: 'bush',
    axiom: 'F',
    ruleset: {
      F: 'FF-[-F+F+F]+[+F-F-F]'
    },
    theta: 22.5,
    scalingFactor: 0.5,
    // initial length gets divided by height
    initialLength: 4.5,
    maxGenerations: 4,
    translateX: 100,
    translateY: null,
  },

  1: {
    name: 'fern',
    axiom: 'F',
    ruleset: {
      F: 'F[+F]F[-F][F]'
    },
    theta: 20,
    lengthFactor: 0.5,
    initialLength: 2.5,
    maxGenerations: 5,
    translateX: null,
    translateY: null,
  }
}