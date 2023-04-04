import { DefaultTheme } from "styled-components";

const color = {
  white: "#ffffff",
  black: "#000000",
  bgColor: "#F1F1F5",
};

const fontWeight = {
  light: 300,
  Regular: 400,
  normal: 500,
  bold: 700,
};

const borderRadius = {
  input: "16px",
  button: "18px",
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
