import React from 'react'

function Features() {
  return (
    <div className='features'>

        <div className="features__heading">
            <h3>About Thawakal Transport L.L.C</h3>

            <p>Thawakal Transport is One Of The Leading Private Transportation Provider In The United Arab Emirates With The Head Office Located in Dubai</p>
        </div>
        <div className="container">

            <div className="feature">

                <div className="feature__icon">
                    <img src="time.png" alt="" />
                </div>

                <div className="feature__text"><h3>Timeliness</h3></div>
            </div>

            <div className="feature">

                <div className="feature__icon">
                    <img src="professional.png" alt="" />
                </div>

                <div className="feature__text"><h3>Professional And Trained Drivers</h3></div>
            </div>

            <div className="feature">

                <div className="feature__icon">
                    <img src="monitoring.png" alt="" />
                </div>

                <div className="feature__text"><h3>Vehicle Monitoring</h3></div>
            </div>

            <div className="feature">

                <div className="feature__icon">
                    <img src="quality.png" alt="" />
                </div>

                <div className="feature__text"><h3>Quality Service</h3></div>
            </div>
        </div>
    </div>
  )
}

export default Features