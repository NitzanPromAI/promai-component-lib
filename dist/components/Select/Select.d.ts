import { SelectProps } from "@mui/material";
import "./select.css";
interface SelectOptionProps {
    optionText: string;
    value: string;
}
interface Props extends SelectProps {
    options: SelectOptionProps[];
}
declare const CustomSelect: ({ options, label, name, placeholder, value, ...restProps }: Props) => import("react/jsx-runtime").JSX.Element;
export default CustomSelect;
