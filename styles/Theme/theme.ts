import { DefaultTheme } from "styled-components";

const color = {
  white: "#ffffff",
  black: "#000000", 
  bgColorDeep: "#F1F1F5", // 배경색 깊음
  bgColorLight: "#F8F8FA", // 배경색 얕음
  fontColorDark: "#191919",  // 폰트 컬러 강
  fontColorGrey: "#767676",  // 폰트 컬러 중
  fontColorLight: "#999999", // 폰트 컬러 약
  brandColorLight: "#EDF1D6", // 브랜드 컬러 밝음
  brandColorMedium: "#9DC08B", // 브랜드 컬러 중간
  branchColorDeep: "#609966", // 브랜드 컬러 딥
  brandColorDark: "#40513B", // 브랜드 컬러 다크
  errorColor: "#FF6457", // 오류 및 알림 컬러
  lineColorDark: "#191919", // 라인 컬러 짙음
  lineColorMiddle: "#DBDBDB", // 라인 컬러 중간
  lineCOlorLight: "#EDEDED", // 라인 컬러 얕음
};

const fontWeight = {
  light: 300,
  Regular: 400,
  normal: 500,
  bold: 700,
};

const borderRadius = {
  input: "0.75rem",
  button: "0.625rem",
  container: "0.375rem",
};

const fontSize = {
  fontSize12: "0.75rem",
  fontSize14: "0.875rem",
  fontSize16: "1rem",
  fontSize24: "1.5rem",
  fontSize28: "1.75rem",
  fontSize32: "2rem",
  fontSize36: "2.25rem",
  fontSize40: "2.5rem",
  fontSize48: "3rem",
  fontSize56: "3.5rem",
  fontSize64: "4rem",
  fontSize72: "4.5rem",
}

export type ColorsTypes = typeof color;
export type fontWeightTypes = typeof fontWeight;
export type borderRadius = typeof borderRadius;
export type fontSizes = typeof fontSize;

const theme: DefaultTheme = {
  color,
  fontWeight,
  borderRadius,
  fontSize,
};

export default theme;
