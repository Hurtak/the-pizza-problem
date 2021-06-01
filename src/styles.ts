import React from "react";

const gridMultiple = 8;

export const size = (px: number): string => `${px}px`;
export const sizeNumber = (px: number): number => px;

export const grid = (grid: number): string => size(gridNumber(grid));
export const gridNumber = (grid: number): number => grid * gridMultiple;

export type Color = React.CSSProperties["color"];

export const colors: { [key: string]: Color } = {
  green1: "green",

  blue1: "#2c8898",
  blue2: "blue",

  red1: "red",
  darkRed1: "#982c61",

  gray1: "#e6e6e6",
  gray2: "#4a4a4a",
} as const;
