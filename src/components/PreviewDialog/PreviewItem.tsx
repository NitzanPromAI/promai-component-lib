import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { PreviewItemProps } from "./PreviewDialog.types";

const PreviewItem = (props: PreviewItemProps) => {
  const { children, title, color } = props;
  return (
    <Accordion defaultExpanded square sx={{ width: "100%", boxShadow: "none" }}>
      <AccordionSummary
        sx={{ background: "rgba(210, 214, 245, 0.50)" }}
        expandIcon={<ExpandMoreIcon color="primary" />}
        aria-controls="preview-item-content"
        id="preview-item-title"
      >
        <Typography className="preview-item-title" color={color} fontWeight={700}>
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: 0 }}>{children}</AccordionDetails>
    </Accordion>
  );
};

export default PreviewItem;
