var plants = { 
  0: {
    name: 'a',
    axiom: 'F',
    rules: {
      F: 'F[+F]F[-F]F'
    },
    theta: 25.7,
    scalingFactor: 0.5,
    initialLength: 20,
    maxGenerations: 5,
    translateX: 0,
    translateY: null,
  },
  
  1: {
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
  
  2: {
    name: 'c',
    axiom: 'F',
    rules: {
      F: 'FF-[-F+F+F]+[+F-F-F]'
    },
    theta: 22.5,
    scalingFactor: 0.5,
    initialLength: 4.5,
    maxGenerations: 4,
    translateX: 0,
    translateY: null,
  }
}