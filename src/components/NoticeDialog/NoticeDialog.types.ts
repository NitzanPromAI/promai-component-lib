import { DialogProps } from "@mui/material";

export interface INoticeDialogProps extends DialogProps {
  id?: string;
  children: React.ReactNode;
  handleClose: (e: boolean) => void;
}

export interface INoticeItemProps {
  id?: string;
  title: string;
  titleStyle?: React.CSSProperties;
  runningText: string;
  runningTextSyle?: React.CSSProperties;
  image?: string;
  actions?: React.ReactNode;
}
