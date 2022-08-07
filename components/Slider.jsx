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
        <div className='single__slide'>
            
            <div className="image"><img src="night.jpg" alt="" /></div>
            <div className="slide__text">
              <h3>WELCOME TO Thawakal transport</h3>
            </div>
        </div>
        <div className='single__slide'>
        <div className="image"><img src="modern.jpg" alt="" /></div>
        <div className="slide__text">
              <h3>Who we are</h3>
              <p>We are a International Transport service company having Service across INDIA & UAE.</p>
            </div>
        </div>
        <div className='single__slide'>
        <div className="image"><img src="logistic.jpg" alt="" /></div>
        <div className="slide__text">
              <h3>What we do</h3>
              <p>Rent A Car, School And College Transportation, Passenger Transporting, Rental Buses, Tours, And Desert Safari Etc. Rent A Car, School And College Transportation, Passenger Transporting, Rental Buses, Tours, And Desert Safari Etc.</p>
            </div>
        </div>
        <div className='single__slide'>
        <div className="image"><img src="school.jpg" alt="" /></div>
        {/* <div className="slide__text">
              <h3>WELCOME TO ROADIEZ TRANSORT</h3>
              <p>Founded Since 2020</p>
            </div> */}
        </div>

    </Slider>
  </div>
  )
}

export default HeaderSlider