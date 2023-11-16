/// <reference types="react" />
export declare enum SIDE_MENU_ITEMS {
    ACTIONS = "Actions",
    USERS = "Users",
    PARTS = "Parts",
    IMAGES = "Images",
    TOOLS = "Tools",
    JIGS = "Jigs",
    MATERIALS = "Materials",
    ASSETS = "Assets",
    PROCEDURES = "Procedures",
    IMAGE_TOOLS = "ImageTools"
}
export type PartialSideMenuItems = Partial<Record<SIDE_MENU_ITEMS, JSX.Element>>;
