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

const LogoSliderDesktop = ({rtl, vertical}) => {
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
    slidesToShow: 7,
    slidesToScroll: 1,
    vertical: vertical,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
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
