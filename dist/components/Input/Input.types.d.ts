/// <reference types="react" />
import { FilledInputProps, InputProps, OutlinedInputProps, SxProps } from "@mui/material";
export interface InputFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
    variant?: "filled" | "outlined" | "standard";
    size: "small" | "medium";
    icon?: React.ReactNode;
    label?: string;
    placeholder?: string;
    sx?: SxProps;
    disabled?: boolean;
    readOnly?: boolean;
    max?: number;
    min?: number;
    error?: boolean;
    helperText?: React.ReactNode;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    inputProps?: Partial<FilledInputProps> | Partial<OutlinedInputProps> | Partial<InputProps>;
}
