import { ButtonHTMLAttributes } from "react";
export interface CostumeButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    size?: 'small' | 'medium' | 'large';
}
