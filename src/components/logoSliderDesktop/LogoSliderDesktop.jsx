import Slider from "react-slick";

import { ReactComponent as MIcon } from "../../assets/icons/main-icons/M.svg";
import { ReactComponent as TimerIcon } from "../../assets/icons/main-icons/Timer.svg";
import { ReactComponent as CrownIcon } from "../../assets/icons/main-icons/Crown.svg";
// import { ReactComponent as WorldIcon } from "../../assets/icons/main-icons/World.svg";
import { ReactComponent as ShieldIcon } from "../../assets/icons/main-icons/Shield.svg";
import { ReactComponent as SoccerIcon } from "../../assets/icons/main-icons/Soccer.svg"

// Import css files
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "./styles.scss";

const LogoSliderDesktop = ({rtl}) => {
  const settings = {
    dots: false,
    infinite: true,
    pauseOnHover: false,
    rtl: rtl,
    autoplaySpeed: 0,
    speed: 3000,
    easing: "linear",
    autoplay: true,
    cssEase: 'linear',
    arrows: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    vertical: true,
    variableWidth: false,
    verticalSwiping: true,
    swipeToSlide: true,
    verticalSwiping: false,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    },
  };

  return (
    <div className="logo-slides-desktop-wrapper">
      <Slider {...settings}>
        <MIcon />
        <TimerIcon />
        <CrownIcon />
        <ShieldIcon />
        <MIcon />
        <TimerIcon />
        <CrownIcon />
        <SoccerIcon />
      </Slider>
    </div>
  );
};

export default LogoSliderDesktop;
