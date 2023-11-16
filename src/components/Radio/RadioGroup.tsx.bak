import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { RadioGroupProps } from "./radio.types";
import { FC } from "react";
import "./radioBtn.css";

const RadioButtonsGroup: FC<RadioGroupProps> = (props) => {
  const { isRow, childList, value, handleChange, containerStyle } = props;
  return (
    <RadioGroup
      row={isRow || false}
      aria-labelledby="demo-row-radio-buttons-group-label"
      name="row-radio-buttons-group"
      value={value}
      onChange={handleChange}
      style={containerStyle}
    >
      {childList &&
        childList.map((item, index) => (
          <FormControlLabel
            key={index}
            value={item.value}
            control={<Radio />}
            label={item.label}
            disabled={item.disabled}
            className={"Body2"}
          />
        ))}
    </RadioGroup>
  );
};

export default RadioButtonsGroup;
