import { SIDE_MENU_ITEMS } from "./types/shared.types";
export declare const ROLES_OPTIONS: {
    value: string;
    optionText: string;
}[];
export declare const SIDE_MENU_ITEMS_AS_ARR: {
    key: number;
    type: SIDE_MENU_ITEMS;
}[];
export declare const APP_ROUTES_INDEX = "/";
export declare const APP_ROUTES_LOGIN = "/login";
export declare const APP_ROUTES_HOME = "/home";
export declare const APP_ROUTES_TEST = "/test";
export declare const APP_ROUTES_USERS = "/users";
export declare const APP_ROUTES_CATCH_ALL = "*";
export declare const PROJECT_LIST: {
    id: string;
    projectName: string;
    projectIPCI: string;
    projectImgUrl: string;
}[];
export declare const NEW_PROJECT: {
    id: string;
    name: string;
    projectIPCI: string;
    projectImgUrl: string;
    hasOptions: boolean;
};
export declare const loginMockData: {
    token: string;
    name: string;
    permission: string;
    userName: string;
    id: string;
    role: string;
    tempPermissionLevel: null;
    tempExpireAt: null;
    isDisclaimer: null;
    state: string;
    createdAt: string;
    updatedAt: string;
    isAdmin: boolean;
    rank: number;
};
