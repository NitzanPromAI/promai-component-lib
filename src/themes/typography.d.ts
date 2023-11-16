import { Typography, TypographyVariantsOptions } from "@mui/material";
import { TypographyOptions } from "@mui/material/styles/createTypography";

declare module "@mui/material/styles/createTypography" {
  interface TypographyPropsVariantOverrides {
    body3: true;
    body4: true;
    body5: true;
    body6: true;
    body7: true;
    body8: true;
  }
}

export interface ExtendedTypographyOptions extends TypographyOptions {
  body3: React.CSSProperties;
  body4: React.CSSProperties;
  body5: React.CSSProperties;
  body6: React.CSSProperties;
  body7: React.CSSProperties;
  body8: React.CSSProperties;
}

export default function createTypography(typography: TypographyVariantsOptions): Typography;
