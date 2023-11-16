import { Box, Paper, Stack, Typography } from "@mui/material";
import "./PreviewDialog.css";
import { PreviewDialogProp } from "./PreviewDialog.types";
import PreviewItem from "./PreviewItem";
import { Button } from "../Button";

const PreviewDialog = (props: PreviewDialogProp) => {
  const { id, mainTitle, subTitle, items, error, actions, tableHead, handleClose } = props;
  return (
    <Paper id={id} className="workspace" elevation={3} sx={{ paddingX: 3, paddingY: 2 }}>
      <Stack direction="column" gap={6}>
        <Stack direction="column" gap={1}>
          <Stack direction="row" gap={2} alignItems="center">
            <Typography variant="h2" color={(theme) => theme.palette.text.primary} className="preview-main-title">
              {mainTitle}
            </Typography>
            <Typography variant="h5" color={(theme) => theme.palette.text.primary} className="preview-sub-title">
              {subTitle}
            </Typography>
          </Stack>

          {error && (
            <Box
              padding={1}
              borderRadius="2px"
              width="fit-content"
              border="1px solid"
              borderColor={(theme) => theme.palette.error.main}
            >
              <Typography variant="h5" color={(theme) => theme.palette.error.main}>
                {error}
              </Typography>
            </Box>
          )}
        </Stack>

        <Stack direction="column" gap={2}>
          <table className="preview-content-table">
            <thead>
              <tr>{tableHead?.map((_el: any, _idx_: number) => <th key={_idx_}>{_el}</th>)}</tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={tableHead?.length + 1}>
                  <div
                    style={{
                      maxHeight: "50vh",
                      overflow: "scroll",
                      width: "100%",
                    }}
                  >
                    {items?.map((item, index) => (
                      <PreviewItem title={item?.title} color={item?.color} key={index}>
                        <table className="preview-content-items">
                          <tbody>
                            {item?.list?.map((el: any, idx: number) => (
                              <tr key={idx}>
                                <td></td>
                                {Object?.keys(el)?.map((_el, _idx_) => <td key={_idx_}>{el[_el] || "-"}</td>)}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </PreviewItem>
                    ))}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Button onClick={handleClose}>
              <Typography
                sx={{ textTransform: "uppercase", textDecoration: "underline" }}
                color={(theme) => theme.palette.primary.main}
              >
                Cancel
              </Typography>
            </Button>

            <Stack direction="row" gap="30px">
              {actions}
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default PreviewDialog;
