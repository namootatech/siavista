// The blur effect is created in css check main.css
export const blurMove = {
  initial: {
    top: 0,
    right: 0,
    transform: 'translateX(0)',
  },
  enter: (i) => ({
    right: 0,
    transform: 'translateX(-100%)',
    transition: {
      duration: 0.25,
      delay: 0.05 * i,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: (i) => ({
    top: 0,
    right: 0,
    transform: 'translateX(0)',
    transition: {
      duration: 0.25,
      delay: 0.05 * i,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};

export const blurGrayscale = {
  initial: {
    opacity: 1,
    scale: 2,
    'backdrop-filter': ' blur(5px) grayscale(1)',
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.24,
    },
    scale: 1,
    'backdrop-filter': ' blur(0px) grayscale(0)',
  },
  exit: {
    opacity: 1,
    'backdrop-filter': 'blur(3px) grayscale(1)',
    scale: 2,
    delay: 0,
    transition: {
      duration: 0.24,
    },
  },
};

// This animation creates a fade effect on in and out of components

export const opacity = {
  initial: {
    opacity: 1,
    scale: 2,
  },
  enter: {
    opacity: 0,

    transition: {
      duration: 0.3,
    },
    scale: 2,
  },
  exit: {
    opacity: 1,
    scale: 2,
    delay: 0,
    transition: {
      duration: 0.3,
    },
  },
};
