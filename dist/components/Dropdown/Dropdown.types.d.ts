/// <reference types="react" />
export type ChildListProp = {
    id?: string;
    name: string;
    icon?: React.ReactNode;
    onClick?: (event: Event | React.SyntheticEvent) => void;
};
export interface DropdownItemProp {
    id?: string;
    name: string;
    handleOnClick?: (event: Event | React.SyntheticEvent) => void;
    icon?: React.ReactNode;
    haschildren?: boolean;
    optionsIcon?: React.ReactNode;
    childlist?: ChildListProp[];
}
export interface DropdownListProps {
    id?: string;
    handleOnClick?: (item: DropdownItemProp) => void;
    listHeader?: string;
    list?: DropdownItemProp[];
    setItemOpen: (e: boolean) => void;
    children: React.ReactNode;
}
