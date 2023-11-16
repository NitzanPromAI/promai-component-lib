export interface IPartWithIdAndFatherId {
  id?: string;
  type: string;
  fatherId?: string | null;
}

export interface IGetIPC {
  IPCI?: string;
  catalogNodeId?: string;
  rootNodeId?: string;
}

export interface IPartData {
  id: string;
  image?: string | null;
  nodeId: string;
  catalogNumber: string;
  assemblyQuantity?: string;
  projectQuantity?: string;
  name: string;
  description?: string | null;
  isUnattachRootItem?: string;
  disposable?: string | null;
  attachingPart?: string | null;
  serialNumber?: string | null;
  fatherId: string;
}

export interface IPatchPartItemCustomHeaders {
  rootNodeId: string;
  catalogNodeId: string;
  ipci: string;
  nodeId: string;
}

export interface IsIPCIExistCustomHeaders {
  existingIPCI: string;
  newIPCI: string;
}

export interface IGetNodeContentTableCustomHeaders {
  rootNodeId: string;
}
