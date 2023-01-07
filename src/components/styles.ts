const gridMultiple = 8;

export const size = (px: number): string => `${px}px`;
export const sizeNumber = (px: number): number => px;

export const grid = (grid: number): string => size(gridNumber(grid));
export const gridNumber = (grid: number): number => grid * gridMultiple;

export const colors = {
  red: "#e10909",
  redDark: "#982c61",

  green: "#2c984e",

  blue: "#2c8898",

  gray1: "#e6e6e6",
  gray2: "#4a4a4a",
} as const;

export type Color = typeof colors[keyof typeof colors];

export const breakPoints = {
  // Synced with sakura.css breakpoints
  tablet: "@media (min-width: 383px)",
  desktop: "@media (min-width: 685px)",
};
