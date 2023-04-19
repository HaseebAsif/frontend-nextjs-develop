export enum Durations {
  Fast = 0.25,
  Medium = 0.5,
  Slow = 0.75,
  Sloth = 1
}

export const Easings = Object.freeze({
  Ease: [0.25, 0.1, 0.25, 1],
  In: [0.42, 0, 1, 1],
  Out: [0, 0, 0.58, 1],
  InOut: [0.42, 0, 0.58, 1],
  InSine: [0.47, 0, 0.745, 0.715],
  OutSine: [0.39, 0.575, 0.565, 1],
  InOutSine: [0.445, 0.05, 0.55, 0.95],
  InQuad: [0.55, 0.085, 0.68, 0.53],
  OutQuad: [0.25, 0.46, 0.45, 0.94],
  InOutQuad: [0.455, 0.03, 0.515, 0.955],
  InCubic: [0.55, 0.055, 0.675, 0.19],
  OutCubic: [0.215, 0.61, 0.355, 1],
  InOutCubic: [0.645, 0.045, 0.355, 1],
  InQuart: [0.895, 0.03, 0.685, 0.22],
  OutQuart: [0.165, 0.84, 0.44, 1],
  InOutQuart: [0.77, 0, 0.175, 1],
  InQuint: [0.755, 0.05, 0.855, 0.06],
  OutQuint: [0.23, 1, 0.32, 1],
  InOutQuint: [0.86, 0, 0.07, 1],
  InExpo: [0.95, 0.05, 0.795, 0.035],
  OutExpo: [0.19, 1, 0.22, 1],
  InOutExpo: [1, 0, 0, 1],
  InCirc: [0.6, 0.04, 0.98, 0.335],
  OutCirc: [0.075, 0.82, 0.165, 1],
  InOutCirc: [0.785, 0.135, 0.15, 0.86],
  InBack: [0.6, -0.28, 0.735, 0.045],
  OutBack: [0.175, 0.885, 0.32, 1.275],
  InOutBack: [0.68, -0.55, 0.265, 1.55],
  Linear: [0, 0, 1, 1]
});
