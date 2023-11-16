import { CircularProgress, Typography } from "@mui/material";
import ImageMagnifierTooltip from "../ImageMagnifierTooltip";

interface Props {
  id?: string;
  text: string;
  isActive?: boolean;
  image?: string;
  textOverflow?: string;
  loading?: boolean;
  handleClick: () => void;
}

const BreadCrumbItem = ({ id, text, isActive = false, image, textOverflow, loading, handleClick }: Props) => {
  return (
    <div
      id={id}
      className={`breadcrumb-item-wrapper ${
        isActive ? "breadcrumb-item-wrapper-active" : "breadcrumb-item-wrapper-inactive"
      }`}
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <Typography variant="body1" overflow={"hidden"} textOverflow={textOverflow || "ellipsis"}>
        {text}
      </Typography>

      {loading ? (
        <div className="">
          <CircularProgress color="inherit" size={16} />
        </div>
      ) : (
        image && (
          <div className="breadcrumb-img-wrapper">
            <ImageMagnifierTooltip imgSrc={`data:image/png;base64,${image}`} imgAlt="" />
          </div>
        )
      )}
    </div>
  );
};

export default BreadCrumbItem;
