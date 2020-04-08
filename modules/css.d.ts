import * as CSS from "csstype";

declare module "csstype" {
  interface Properties {
    // add css custom properties
    "--width"?: CSS.WidthProperty;
    "--height"?: CSS.HeightProperty;
    "--foreground-color"?: CSS.ColorProperty;
    "--background-color"?: CSS.BackgroundColorProperty;
    "--border-radius"?: CSS.BorderRadiusProperty;
    "--segment-margin"?: CSS.MarginProperty;
  }
}
