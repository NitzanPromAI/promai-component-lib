import { ChangeEvent, InputHTMLAttributes } from "react";
export interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
    onChange: (e: ChangeEvent<any>) => void;
    value?: string;
    setValue: (e: string) => void;
    disabled?: boolean;
    theme: {
        disabled: string;
        main: string;
    };
    className?: string;
}
