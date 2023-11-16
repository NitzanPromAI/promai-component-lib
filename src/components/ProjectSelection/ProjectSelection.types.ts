export interface ProjectItemProp {
  id?: string;
  projectName?: string;
  hasOptions?: boolean;
}

export type INewProject = {
  id: string;
  name: string;
  projectIPCI: string;
  projectImgUrl: string;
  hasOptions: boolean;
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
  nodes: any[];
}

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

export interface ProjectSelectionListProp {
  list?: any[];
  selected: any | null;
  newProject?: INewProject | null;
  selectedIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  addProjectIcon?: React.ReactNode;
  theme: {
    default: string;
    textSecondary: string;
    disabled: string;
    icons: string;
  };
  handleItemClick: (e: any) => void;
}
