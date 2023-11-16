import React from "react";
interface ProjectProps {
    id?: string;
    className: string;
    projectName?: string;
    hasOptions: boolean;
    leftIcon?: React.ReactNode;
    theme: {
        textSecondary: string;
    };
}
declare const ProjectItem: ({ id, className, projectName, hasOptions, leftIcon, theme }: ProjectProps) => import("react/jsx-runtime").JSX.Element;
export default ProjectItem;
