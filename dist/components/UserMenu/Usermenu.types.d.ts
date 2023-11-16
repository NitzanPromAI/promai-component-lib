/// <reference types="react" />
import { HeaderDropdownItemProp } from "../Header";
export interface UserAvatarProps {
    children: React.ReactNode;
    list?: HeaderDropdownItemProp[];
    listHead?: string;
    handleOnClick?: (item: HeaderDropdownItemProp) => void;
    colors: {
        main: string;
        default: string;
    };
    userInfo: IUserInfoProps;
}
export interface IUserInfoProps {
    name?: string;
    role?: string;
}
