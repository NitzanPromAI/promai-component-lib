import { ButtonHTMLAttributes, RefObject } from "react";
export interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    size?: "small" | "medium" | "large";
    color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
    variant?: "contained" | "outlined" | "text";
    ref?: RefObject<HTMLButtonElement>;
}
