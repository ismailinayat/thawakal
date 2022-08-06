import React from 'react';
import {GoLocation} from 'react-icons/go';
import {AiOutlineClockCircle} from 'react-icons/ai';


function Services() {
  return (
    <div className='services'>

        <div className="services__heading">

            <h3>Our Services</h3>
        </div>

        <div className="services__container">

            <div className="service">

                <div className="image">
                    <img src="school2.jpg" alt="" />
                </div>

                <div className="service__info">

                    <div className="service__title">
                        <h4>Transportation to Schools and College</h4>
                    </div>

                    <div className="service__features">

                        <div className="feature">

                            <div className="icon">
                                <GoLocation></GoLocation>
                            </div>

                            <div className="text">Service All Over Emirate</div>
                        </div>

                        <div className="feature">

                            <div className="icon">
                            <AiOutlineClockCircle></AiOutlineClockCircle>
                            </div>

                            <div className="text">As per insititution timing</div>
                        </div>

                      
                    </div>
                        <div className="feature__detail">
                            <p>We provide the transportation to college and schools as long term / short term contracts basis as per the institution policy keeping our policy stable</p>
                        </div>
                </div>
            </div>


            <div className="service">

                <div className="image">
                    <img src="car.jpg" alt="" />
                </div>

                <div className="service__info">

                    <div className="service__title">
                        <h4>Car Rentals</h4>
                    </div>

                    <div className="service__features">

                        <div className="feature">

                            <div className="icon">
                                <GoLocation></GoLocation>
                            </div>

                            <div className="text">Service All Over Emirate</div>
                        </div>

                        <div className="feature">

                            <div className="icon">
                            <AiOutlineClockCircle></AiOutlineClockCircle>
                            </div>

                            <div className="text">Long term/Short term</div>
                        </div>

                      
                    </div>
                        <div className="feature__detail">
                            <p>We have a wide range of fleets including luxuary, superluxuary and Economics class vehicle for rent for long term and short term</p>
                        </div>
                </div>
            </div>


            <div className="service">

                <div className="image">
                    <img src="tour.jpg" alt="" />
                </div>

                <div className="service__info">

                    <div className="service__title">
                        <h4>Tour Pakcage</h4>
                    </div>

                    <div className="service__features">

                        <div className="feature">

                            <div className="icon">
                                <GoLocation></GoLocation>
                            </div>

                            <div className="text">Service All Over Emirate</div>
                        </div>

                        <div className="feature">

                            <div className="icon">
                            <AiOutlineClockCircle></AiOutlineClockCircle>
                            </div>

                            <div className="text">At any time as per request of customer</div>
                        </div>

                      
                    </div>
                        <div className="feature__detail">
                            <p>We will arrange the tour package across all Emirate as per the customer need including City tour, Desert safari,etc.. With our Luxury and Economy class fleets.</p>
                        </div>
                </div>
            </div>


            <div className="service">

                <div className="image">
                    <img src="staff.jpg" alt="" />
                </div>

                <div className="service__info">

                    <div className="service__title">
                        <h4>Staff Transport</h4>
                    </div>

                    <div className="service__features">

                        <div className="feature">

                            <div className="icon">
                                <GoLocation></GoLocation>
                            </div>

                            <div className="text">Service All Over Emirate</div>
                        </div>

                        <div className="feature">

                            <div className="icon">
                            <AiOutlineClockCircle></AiOutlineClockCircle>
                            </div>

                            <div className="text">As per Organization timing</div>
                        </div>

                      
                    </div>
                        <div className="feature__detail">
                            <p>We provides the staff transportation facility across the emiarat as per the contract with company as the group transportation on our long fleets and individual limo services.</p>
                        </div>
                </div>
            </div>


        </div>
    </div>
  )
}

export default Services