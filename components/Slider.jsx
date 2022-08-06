import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function HeaderSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className='slider__container'>
    <Slider {...settings}>
        <div>
            <div className="image"><img src="night.jpg" alt="" /></div>
        </div>
        <div>
        <div className="image"><img src="modern.jpg" alt="" /></div>
        </div>
        <div>
        <div className="image"><img src="logistic.jpg" alt="" /></div>
        </div>
        <div>
        <div className="image"><img src="school.jpg" alt="" /></div>
        </div>

    </Slider>
  </div>
  )
}

export default HeaderSlider