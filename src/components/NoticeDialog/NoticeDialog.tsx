import { Dialog, IconButton } from "@mui/material";
import { INoticeDialogProps } from "./NoticeDialog.types";
import { ModalCloseIcon } from "../Icon";

export default function NoticeDialog(props: INoticeDialogProps) {
  const { children, id, open, handleClose, ...restProps } = props;

  return (
    <div id={id}>
      <Dialog
        id={id}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        {...restProps}
      >
        {children}
        <IconButton
          aria-label="close"
          onClick={() => handleClose(false)}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
        >
          <ModalCloseIcon />
        </IconButton>
      </Dialog>
    </div>
  );
}
