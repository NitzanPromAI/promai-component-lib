import { IconButton } from "@mui/material";
import { CloseSearchIcon, SearchIcon } from "../Icon";
import "./Search.css";
import { SearchProps } from "./Search.types";

const Search = (props: SearchProps) => {
  const { placeholder, onChange, value, setValue, disabled, theme, className } = props;

  const handleClear = () => {
    setValue("");
  };

  return (
    <div className={className}>
      <input autoFocus placeholder={placeholder} onChange={onChange} value={value} disabled={disabled} />
      {value && (
        <IconButton title="clear" onClick={handleClear} className="search-close-icon">
          <CloseSearchIcon />
        </IconButton>
      )}
      <span>
        <button className={`search-button ${disabled ? "is-disabled" : ""}`}>
          <SearchIcon stroke={disabled ? theme.disabled : theme.main} />
        </button>
      </span>
    </div>
  );
};

export default Search;
