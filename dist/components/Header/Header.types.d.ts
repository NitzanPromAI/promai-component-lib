/// <reference types="react" />
type ChildListProp = {
    id?: string;
    name: string;
    icon?: React.ReactNode;
    onClick?: (event: Event | React.SyntheticEvent) => void;
};
type HeaderLink = {
    routeIcon: React.ReactNode;
    route: string;
};
export interface HeaderProps {
    style?: React.CSSProperties;
    className?: string;
    children?: React.ReactNode;
    leftLogo?: React.ReactNode;
    rightLogo?: React.ReactNode;
    promAiLogo?: React.ReactNode;
    isAuthenticated: boolean;
    showDateTime?: boolean;
    showNotification?: boolean;
    listHead?: string;
    name?: string;
    role?: string;
    menuList?: HeaderDropdownItemProp[];
    moreNavLinks?: HeaderLink[];
    handleSelected?: (item: HeaderDropdownItemProp) => void;
}
export interface HeaderDropdownItemProp {
    id?: string;
    name: string;
    handleOnClick?: (event: Event | React.SyntheticEvent) => void;
    icon?: React.ReactNode;
    haschildren?: boolean;
    optionsIcon?: React.ReactNode;
    childlist?: ChildListProp[];
}
export {};
