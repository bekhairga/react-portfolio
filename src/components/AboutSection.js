import React from 'react';
import home1 from '../img/home1.png';
const AboutSection = () => {
  return(
    <div className="AboutSection">
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>your <span>dreams</span></h2>
          </div>
          <div className="hide">
            <h2>come true</h2>
          </div>
        </div>
        <p>Contact us for any photography or videography idea that you have. We have professionals with amazing skills</p>
        <button>Contact us</button>
      </div>
      <div className="image">
        <img src={home1} alt="person"/>
      </div>
    </div>
  )
}
export default AboutSection;