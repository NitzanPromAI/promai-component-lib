import { alpha, styled } from "@mui/material/styles";
import { pink } from "@mui/material/colors";
import Switch, { SwitchProps } from "@mui/material/Switch";

const StyledSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: "primary",
    "&:hover": {
      backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: "primary",
  },
}));

const label = { inputProps: { "aria-label": "Switch" } };

export default function CustomSwitch({ onChange, ...props }: SwitchProps) {
  return (
    <div>
      <StyledSwitch {...label} onChange={onChange} {...props} />
    </div>
  );
}
