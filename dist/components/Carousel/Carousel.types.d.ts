import { Settings } from "react-slick";
type ItemProp = {
    key: number;
    type: string;
};
export interface CarouselProp {
    id?: string;
    isDisabled: boolean;
    selectedMenuItem: string;
    menuItems: ItemProp[];
    settings?: Settings;
    handleClick: (x: number) => void;
}
export {};
