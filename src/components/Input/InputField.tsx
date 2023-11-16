import { FC } from "react";
import { InputFieldProps } from "./Input.types";
import TextField from "@mui/material/TextField";
import { IconButton, Typography } from "@mui/material";
import "./inputField.css";
import theme from "../../themes/theme";

const InputTextField: FC<InputFieldProps> = (props) => {
  // const [inputValue, setInputValue] = useState("");
  const {
    icon,
    label,
    variant,
    sx,
    inputProps,
    size,
    disabled,
    readOnly = false,
    max,
    min,
    placeholder,
    showIcon = false,
    ...rest
  } = props;

  const inputSizesClassNames = {
    small: "input--small",
    medium: "input--medium",
  };

  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const regex = /^[A-Za-z0-9_-]*$/; // Valid characters: English letters, numbers, hyphen, and underscore
  //   const val = e.target.value;
  //   const isValid = regex.test(val);

  //   // Check input characters against min and max length values
  //   if (isValid && val.length <= max) {
  //     setInputValue(val);
  //     if (val.length >= min) rest.onChange(e);
  //   }
  // };

  // useEffect(() => {
  //   if (rest.defaultValue) {
  //     setInputValue(rest.defaultValue as string);
  //   }
  // }, [rest.defaultValue]);

  return (
    <TextField
      id={rest?.id}
      label={!rest.value && label ? <Typography variant="body5">{label}</Typography> : null}
      value={rest.value}
      placeholder={placeholder}
      InputProps={{
        ...inputProps,
        readOnly: readOnly,
        autoComplete: "off",
        endAdornment: (
          <IconButton
            sx={{
              padding: 0,
              "& > svg > path": {
                stroke: disabled ? theme.palette.text.disabled : theme.palette.primary.main,
              },
              display: !rest.value ? "block" : showIcon ? "block" : "none",
            }}
            disabled={disabled}
          >
            {icon}
          </IconButton>
        ),
      }}
      variant={variant}
      sx={{
        ...sx,
        backgroundColor: theme.palette.background.paper,
        "& label.MuiInputLabel-shrink": {
          border: `0.5px solid ${theme.divider.blue}`,
          background: theme.palette.background.default,
          color: theme.palette.text.secondary,
        },
        "& input:-webkit-autofill": {
          WebkitBoxShadow: "0 0 0 1000px #fff inset",
          WebkitTextFillColor: theme.palette.text.primary,
        },
        "& Mui-error": {
          marginLeft: 0,
        },
        "& p.MuiFormHelperText-root": {
          marginLeft: 0,
        },
      }}
      size={size}
      className={`input-wrapper ${inputSizesClassNames[size]}`}
      margin="none"
      autoComplete="off"
      disabled={disabled}
      onChange={rest.onChange}
      onBlur={rest.onBlur}
      required={rest.required}
      error={rest.error}
      helperText={rest.helperText}
      type={rest.type}
    />
  );
};

export default InputTextField;
