const gridMultiple = 8;

export const size = (px: number): string => `${px / 16}rem`;
export const sizeNumber = (px: number): number => px;

export const grid = (grid: number): string => size(gridNumber(grid));
export const gridNumber = (grid: number): number => grid * gridMultiple;

export const color = {
  white: "white",
  black: "black",
};
