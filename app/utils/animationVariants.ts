export const animationVariants = {
  fadeUp: {
    initial: { opacity: 0, y: 80 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  },

  fadeDown: {
    initial: { opacity: 0, y: -80 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  },
  
  fadeDownAndOut: {
    initial: { opacity: 1, y: 0 },
    animate: {
      opacity: 0,
      y: 50,
      transition: { duration: 0.6 },
    },
  },

  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.6 } },
  },

  fadeOut: {
    initial: { opacity: 1 },
    animate: { opacity: 0, transition: { duration: 0.6 } },
  },

  fadeLeft: {
    initial: { opacity: 0, x: -200 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  },
  fadeRight: {
    initial: { opacity: 0, x: 100 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  },

  zoomIn: {
    initial: { scale: 0.5, opacity: 0.7 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  },
  zoomOut: {
    initial: { scale: 1.2, opacity: 0.7 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  },
};
