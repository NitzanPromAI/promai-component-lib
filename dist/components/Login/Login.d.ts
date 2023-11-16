import React from "react";
import "./login.css";
interface LoginProps {
    userName?: string;
    password?: string;
    token?: string;
}
type LoginPageProps = {
    id?: string;
    formErrors: {
        errorMsg: string;
        loginError: boolean;
        userName: boolean;
        password: boolean;
    };
    formData: LoginProps;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>, type: string) => void;
    handleSubmit: (e: React.FormEvent) => void;
    loading?: boolean;
};
declare const LoginPage: (props: LoginPageProps) => import("react/jsx-runtime").JSX.Element;
export default LoginPage;
