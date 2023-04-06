import "styled-components";
import {
  ColorsTypes,
  FontWeightTypes,
  BorderRadius,
  fontSizes,
} from "styles/Theme/theme";

declare module "styled-components" {
  export interface DefaultTheme {
    color: ColorsTypes;
    fontWeight: FontWeightTypes;
    borderRadius: borderRadius;
    fontSize: fontSizes;
  }
}
