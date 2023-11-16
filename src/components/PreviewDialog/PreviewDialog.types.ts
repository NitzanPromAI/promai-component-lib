export interface PreviewDialogProp {
  id?: string;
  mainTitle: string;
  subTitle: string;
  items: any[];
  tableHead: any;
  error?: string;
  actions: React.ReactNode;
  handleClose: (e: any) => void;
}

export interface PreviewItemProps {
  children: React.ReactNode;
  title: string;
  color: string;
}
