var plants = {
  0: {
    name: 'b',
    axiom: 'F',
    rules: {
      F: 'F[+F]F[-F][F]'
    },
    theta: 20,
    scalingFactor: 0.5,
    initialLength: 3.2,
    maxGenerations: 4,
    translateX: 0,
    translateY: null,
  },
  
  1: {
    name: 'c',
    axiom: 'F',
    rules: {
      F: 'FF-[-F+F+F]+[+F-F-F]'
    },
    theta: 22.5,
    scalingFactor: 0.5,
    initialLength: 4.5,
    maxGenerations: 3,
    translateX: 0,
    translateY: null,
  },
  
  2: {
    name: 'd',
    axiom: 'X',
    rules: {
      X: 'F[+X]F[-X]+X',
      F: 'FF'
    },
    theta: 20,
    scalingFactor: 0.5,
    initialLength: 3,
    maxGenerations: 7,
    translateX: 0,
    translateY: null,
  },
  
  3: {
    name: 'e',
    axiom: 'X',
    rules: {
      X: 'F[+X][-X]FX',
      F: 'FF'
    },
    theta: 25.7,
    scalingFactor: 0.5,
    initialLength: 2.6,
    maxGenerations: 7,
    translateX: 0,
    translateY: null,
  },
  
  4: {
    name: 'f',
    axiom: 'X',
    rules: {
      X: 'F-[[X]+X]+F[+FX]-X',
      F: 'FF'
    },
    theta: 22.5,
    scalingFactor: 0.5,
    initialLength: 3.7,
    maxGenerations: 5,
    translateX: 0,
    translateY: null,
  }
}