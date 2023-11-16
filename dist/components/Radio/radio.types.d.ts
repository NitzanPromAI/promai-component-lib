import { CSSProperties } from "react";
type children = {
    value: string | number;
    label: string;
    disabled?: boolean;
    id?: string | number;
};
export interface RadioGroupProps {
    childList: children[];
    disabled?: boolean;
    isRow?: boolean;
    value?: string | number;
    containerStyle?: CSSProperties;
    handleChange: React.ChangeEventHandler<HTMLInputElement>;
}
export {};
