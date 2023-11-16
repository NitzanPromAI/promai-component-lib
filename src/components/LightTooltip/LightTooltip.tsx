import { styled } from "@mui/material/styles";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";

interface ExtendedTooltipProps extends TooltipProps {
  minWidth?: string;
}

const LightTooltip = styled(({ className, minWidth, ...props }: ExtendedTooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme, minWidth }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "#666666",
    boxShadow:
      "0px 1px 2px -2px rgba(40, 53, 147, 0.08), 1px 2px 2px 0px rgba(40, 53, 147, 0.10), 1px 1px 2px 0px rgba(40, 53, 147, 0.10)",
    fontSize: 14,
    padding: 8,
    minWidth: minWidth,
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.white,
  },
}));

export default LightTooltip;
