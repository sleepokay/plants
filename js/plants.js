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
    name: 'sprig',
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
    name: 'feathery',
    axiom: 'X',
    rules: {
      X: 'F-[[X]+X]+F[+FX]-X',
      F: 'FF'
    },
    theta: 22.5,
    scalingFactor: 0.5,
    initialLength: 3.7,
    maxGenerations: 5,
    translateX: null,
    translateY: null,
  },

  // by emily xie
  5: {
    name: 'spidery',
    axiom: 'X',
    rules: {
      X: '+F[--[]-[X]-X]-F[-FX]+X',
      F: 'FF'
    },
    theta: 20,
    scalingFactor: 0.5,
    initialLength: 3,
    maxGenerations: 6,
    translateX: null,
    translateY: 50,
  },
}