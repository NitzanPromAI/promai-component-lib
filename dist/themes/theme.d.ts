declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
        body3: true;
        body4: true;
        body5: true;
        body6: true;
        body7: true;
        body8: true;
    }
}
declare module "@mui/material/styles" {
    interface Theme {
        divider: {
            blue: string;
        };
        elements: {
            icons: string;
            buttons: {
                disabled: string;
            };
        };
    }
    interface ThemeOptions {
        divider?: {
            blue?: string;
        };
        elements: {
            icons?: string;
            buttons?: {
                disabled?: string;
            };
        };
    }
}
declare const theme: import("@mui/material/styles").Theme;
export default theme;
