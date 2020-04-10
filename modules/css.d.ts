import * as CSS from "csstype";

declare module "csstype" {
  interface Properties {
    // add css custom properties
    "--rps-width"?: CSS.WidthProperty;
    "--rps-height"?: CSS.HeightProperty;
    "--rps-foreground-color"?: CSS.ColorProperty;
    "--rps-background-color"?: CSS.BackgroundColorProperty;
    "--rps-border-radius"?: CSS.BorderRadiusProperty;
    "--rps-segment-margin"?: CSS.MarginProperty;
  }
}
