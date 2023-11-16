import { PaletteOptions, Palette } from "@mui/material";

declare module "@mui/material/styles/createPalette" {
  interface PalettePropsVariantOverrides {
    body3: true;
    body4: true;
    body5: true;
    body6: true;
    body7: true;
    body8: true;
  }
}

export interface ExtendedPaletteOptions extends PaletteOptions {
  gray: React.CSSProperties;
}

export default function createPalette(palette: PaletteOptions): Palette;
