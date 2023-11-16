import { useRef } from "react";
import Slider from "react-slick";
import { IconButton, Stack } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css"; // Import your CSS file
import { palette } from "../../themes/palette";
import { CarouselProp } from "./Carousel.types";

const CarouselMenu = (props: CarouselProp) => {
  const { id, isDisabled, menuItems: SIDE_MENU_ITEMS_AS_ARR, selectedMenuItem, handleClick, settings } = props;
  const sliderRef = useRef<any>(null);

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const buttons = SIDE_MENU_ITEMS_AS_ARR.map((item, index) => (
    <div
      key={index}
      className={`menu-item ${selectedMenuItem === item.type ? "menu-item__active" : ""}`}
      onClick={() => handleClick(index)}
    >
      <span>{item.type}</span>
    </div>
  ));

  return (
    <div id={id}>
      <Stack justifyContent={"center"} justifyItems={"center"}>
        <Stack direction="row" justifyContent={"center"}>
          <div className="nav-arrow left-arrow">
            <IconButton onClick={goToPrev}>
              <ChevronLeftIcon sx={{ color: palette.main.primary }} />
            </IconButton>
          </div>
          <div className={`carousel-menu-container ${isDisabled ? "is-disabled" : ""}`}>
            <div className="slider">
              <Slider ref={sliderRef} {...defaultSettings} {...settings}>
                {buttons}
              </Slider>
            </div>
          </div>
          <div className="nav-arrow right-arrow">
            <IconButton className="nav-arrow right-arrow" onClick={goToNext}>
              <ChevronRightIcon sx={{ color: palette.main.primary }} />
            </IconButton>
          </div>
        </Stack>
      </Stack>
    </div>
  );
};

const defaultSettings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  focusOnSelect: true,
};

export default CarouselMenu;
