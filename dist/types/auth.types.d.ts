export interface LoginProps {
    userName?: string;
    password?: string;
    token?: string;
}
export interface LogoutProps {
    userName?: string;
}
export interface LoginMockProps {
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
}
