import "styled-components";
import {
  ColorTypes,
  FontWeightTypes,
  BorderRadiusTypes,
} from "styles/Theme/theme";

declare module "styled-components" {
  export interface DefaultTheme {
    color: ColorTypes;
    fontWeight: FontWeightTypes;
    borderRadius: BorderRadiusTypes;
  }
}
