var plants = {
  // from algorithmic botany
  // by Lindenmayer and Prusinkiewicz
  0: {
    name: 'tall grass',
    axiom: 'F',
    rules: {
      F: 'F[+F]F[-F][F]'
    },
    theta: 20,
    scalingFactor: 0.5,
    initialLength: 3.2,
    maxGenerations: 4,
    translateX: null,
    translateY: null,
  },
  
  1: {
    name: 'brush',
    axiom: 'F',
    rules: {
      F: 'FF-[-F+F+F]+[+F-F-F]'
    },
    theta: 22.5,
    scalingFactor: 0.5,
    initialLength: 4.5,
    maxGenerations: 3,
    translateX: null,
    translateY: null,
  },
  
  2: {
    name: 'parsely',
    axiom: 'X',
    rules: {
      X: 'F[+X]F[-X]+X',
      F: 'FF'
    },
    theta: 20,
    scalingFactor: 0.5,
    initialLength: 3,
    maxGenerations: 7,
    translateX: null,
    translateY: null,
  },
  
  3: {
    name: 'symmetrical',
    axiom: 'X',
    rules: {
      X: 'F[+X][-X]FX',
      F: 'FF'
    },
    theta: 25.7,
    scalingFactor: 0.5,
    initialLength: 2.6,
    maxGenerations: 7,
    translateX: null,
    translateY: null,
  },
  4: {
    name: 'breeze',
    axiom: 'X',
    rules: {
      X: 'F+[-[X]-X]-F[-X]-FX',
      F: 'FF'
    },
    theta: -20,
    scalingFactor: 0.5,
    initialLength: 3.5,
    maxGenerations: 4,
    translateX: null,
    translateY: null,
  },
  5: {
    name: 'feather',
    axiom: 'X',
    rules: {
      X: 'F-[[X]+X]+F[+FX]-X',
      F: 'FF'
    },
    theta: 25,
    scalingFactor: 0.5,
    initialLength: 3.7,
    maxGenerations: 5,
    translateX: null,
    translateY: null,
  },

  6: {
    name: 'fraz',
    axiom: 'FX',
    rules: {
      F: 'FF-[-F+F]+[+F-F]',
      X: 'FF+[+F]+[-F]'
    },
    theta: 25,
    scalingFactor: 0.5,
    initialLength: 4,
    maxGenerations: 3,
    translateX: null,
    translateY: null,
  }
}