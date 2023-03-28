import { DefaultTheme } from "styled-components";

const color = {
  white: "#ffffff",
  black: "#000000",
};

const fontWeight = {
  light: 300,
  normal: 500,
  semibold: 600,
};

const borderRadius = {
  input: "15px",
};

export type ColorsTypes = typeof color;
export type fontWeightTypes = typeof fontWeight;
export type borderRadius = typeof borderRadius;

const theme: DefaultTheme = {
  color,
  fontWeight,
  borderRadius,
};

export default theme;
