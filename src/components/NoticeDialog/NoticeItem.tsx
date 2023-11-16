import { Box, Paper, Stack, Typography } from "@mui/material";
import { INoticeItemProps } from "./NoticeDialog.types";
import "./NoticeItem.css";

const NoticeItem = (props: INoticeItemProps) => {
  const { id, title, image, runningText, actions, titleStyle, runningTextSyle } = props;

  return (
    <div id={id} className="notice-item">
      <Paper elevation={3} sx={{ paddingX: 4, paddingY: 3 }}>
        <Stack direction="column" gap={1}>
          <Stack direction="column" gap={1}>
            <Typography variant="h6" sx={{ ...titleStyle }} className="notice-item-title">
              {title}
            </Typography>
            <Typography sx={{ ...runningTextSyle }} className="p-dialog">
              {runningText}
            </Typography>
          </Stack>
          <Stack direction="column" gap={2}>
            {image && (
              <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <img src={image} className="notice-sample-img" alt="sample" />
              </Box>
            )}
            <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>{actions}</Box>
          </Stack>
        </Stack>
      </Paper>
    </div>
  );
};

export default NoticeItem;
