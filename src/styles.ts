const gridMultiple = 8;

export const size = (px: number): string => `${px}px`;
export const sizeNumber = (px: number): number => px;

export const grid = (grid: number): string => size(gridNumber(grid));
export const gridNumber = (grid: number): number => grid * gridMultiple;

export const colors = {
  gray1: "#e6e6e6",
  blue1: "#2c8898",
  darkRed1: "#982c61",
} as const;
