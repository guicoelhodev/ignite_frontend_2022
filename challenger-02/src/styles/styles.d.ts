import "styled-components";
import { defaultStyleTheme } from "./default";

type ThemeType = typeof defaultStyleTheme;

// extendendo as tipagens do styled-components

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
