import { MenuItem, Select, SelectProps, Typography } from "@mui/material";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import "./select.css";

interface SelectOptionProps {
  optionText: string;
  value: string;
}

interface Props extends SelectProps {
  options: SelectOptionProps[];
}

const CustomSelect = ({ options, label, name, placeholder, value, ...restProps }: Props) => {
  return (
    <div className="form-group">
      {label && (
        <label htmlFor={name}>
          <Typography variant="body5" className="select-label">
            {label}
          </Typography>
        </label>
      )}
      <Select
        IconComponent={KeyboardArrowDownOutlinedIcon}
        className="custom-select"
        displayEmpty
        renderValue={(selected) => {
          if (restProps.multiple && Array.isArray(selected)) {
            if (selected.length === 0) {
              return <Typography variant="body4">{placeholder}</Typography>;
            }

            return selected.join(", ");
          }
          if (!selected && placeholder) {
            return <Typography variant="body4">{placeholder}</Typography>;
          } else if (selected && typeof selected === "string") {
            return selected;
          } else return null;
        }}
        value={value || restProps.multiple ? [] : ""}
        {...restProps}
      >
        {options.length ? (
          options.map((item) => (
            <MenuItem value={item.value} key={item.value}>
              <Typography variant="body1">{item.optionText}</Typography>
            </MenuItem>
          ))
        ) : (
          <div>
            <Typography textAlign="center" variant="body2">
              <em>No options</em>
            </Typography>
          </div>
        )}
      </Select>
    </div>
  );
};

export default CustomSelect;
