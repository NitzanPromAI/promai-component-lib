import { IProjectAPI, IProjectAPINode } from "./project.types";

export interface ICustomerConfiguration {
  id: string;
  isLTR: boolean;
  language: string;
  canvasHeight: number;
  canvasWidth: number;
  iconSize: number;
  catalogRadius: number;
  catalogBorderWidth: number;
  margin: number;
  yActionMargin: number;
  yIconMargin: number;
  textFont: string;
  titleSize: number;
  fontSize: number;
  arrowHeadWidth: number;
  arrowHeadLength: number;
  arrowWidth: number;
  drawBorder: boolean;
  borderWidth: number;
  borderColor: string;
  name: string | null;
  createdAt: Date;
  updatedAt: Date;
  customerId: string;
  nodes: IProjectAPINode[];
}

export interface ICustomerAPI {
  name: string;
  id: string;
  customerLogo: string;
  email: string | null;
  createdAt: Date;
  updatedAt: Date;
  configuration: ICustomerConfiguration;
  projects: IProjectAPI[];
}

export interface ICustomerSliceProp {
  customers: ICustomerAPI[];
  currentCustomer: ICustomerAPI | null;
  loading: boolean;
}
