import { FC } from "react";
import { MyButtonProps } from "./Button.types";
import Button from "@mui/material/Button";

const buttonDefaultStyles = {
  display: "inline-flex",
  alignItems: "center",
  justifyContents: "center",
  border: "none",
  borderRadius: "4px",
};

const buttonSizes = {
  small: {
    height: "28px",
    fontSize: "14px",
    padding: "3px 16px",
  },
  medium: {
    height: "36px",
    fontSize: "16px",
    padding: "4px 20px",
  },
  large: {
    height: "48px",
    fontSize: "20px",
    padding: "5px 24px",
  },
};

const MyButton: FC<MyButtonProps> = (props) => {
  const { children, size = "medium", variant = "text", color = "primary", ...rest } = props;
  const buttonStyles = {
    ...rest.style,
    ...buttonDefaultStyles,
    ...buttonSizes[size],
  };

  return (
    <Button sx={buttonStyles} variant={variant} color={color} {...rest} disabled={rest.disabled}>
      {children}
    </Button>
  );
};

export default MyButton;
