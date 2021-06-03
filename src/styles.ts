import React from "react";

const gridMultiple = 8;

export const size = (px: number): string => `${px}px`;
export const sizeNumber = (px: number): number => px;

export const grid = (grid: number): string => size(gridNumber(grid));
export const gridNumber = (grid: number): number => grid * gridMultiple;

export type Color = React.CSSProperties["color"];

export const colors: { [key: string]: Color } = {
  red: "#e10909",
  redDark: "#982c61",

  green: "#2c984e",

  blue: "#2c8898",

  gray1: "#e6e6e6",
  gray2: "#4a4a4a",
} as const;
