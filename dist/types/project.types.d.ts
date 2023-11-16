export type projectProp = {
    id?: string;
    projectName?: string;
    projectIPCI?: string;
    projectImgUrl?: string;
};
export type IProjectAPINode = {
    id: string;
    order: number;
    status: string;
    contentType: string;
    createdAt: Date;
    updatedAt: Date;
    previousVersionNode: string | null;
    stepBomImageNodeId: string | null;
    projectId: string;
    subsystemId: string | null;
    ecoId: string | null;
    configurationId: string | null;
    pdfTemplateId: string | null;
    templateId: string | null;
    templatePackageId: string | null;
    procedureId: string | null;
    stepId: string | null;
    introductionId: string | null;
    informativeStepId: string | null;
    bomImageId: string | null;
};
export interface IProjectAPI {
    swVer: string;
    name: string;
    language: string;
    projectImage: string;
    ctlgName: string | null;
    manName: string | null;
    procedureName: string | null;
    dwgName: string | null;
    fiName: string | null;
    id: string;
    prjLogo: string;
    ver: string;
    hasMultLnks: boolean;
    showNewVer: boolean;
    createdAt: Date;
    updatedAt: Date;
    customerId: string;
    configurationId: string | null;
    nodes: IProjectAPINode[];
}
export type INewProjectProp = {
    id?: string;
    projectName?: string;
    projectIPCI?: string;
    projectImgUrl?: string;
    nodeId?: string;
};
export interface IProjectModel {
    selected: IProjectAPI | null;
    newProject: INewProjectProp | null;
    isAdding: boolean;
    loading: boolean;
    error: string | null;
    projectAPIData: unknown | null;
}
