import LightTooltip from "../LightTooltip";
import "./ImageMagnifierTooltip.css";

interface Props {
  id?: string;
  imgSrc: string;
  imgAlt?: string;
  imgClassName?: string;
}

const ImageMagnifierTooltip = ({ id, imgSrc, imgAlt = "", imgClassName = "" }: Props) => {
  return (
    <LightTooltip
      id={id}
      title={
        <div>
          <img className="magnifier-image" src={imgSrc} alt={imgAlt} />
        </div>
      }
      placement="right"
    >
      <img src={imgSrc} className={imgClassName} alt={imgAlt} />
    </LightTooltip>
  );
};

export default ImageMagnifierTooltip;
