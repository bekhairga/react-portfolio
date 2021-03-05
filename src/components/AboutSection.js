import React from 'react';
import {About, Hide, Description, Image,} from './styles.js';
import home1 from '../img/home1.png';
const AboutSection = () => {
  return(
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>your <span>dreams</span></h2>
          </Hide>
          <Hide>
            <h2>come true</h2>
          </Hide>
        </div>
        <p>Contact us for any photography or videography idea that you have. We have professionals with amazing skills</p>
        <button>Contact us</button>
      </Description>
      <Image>
        <img src={home1} alt="person"/>  
      </Image>
    </About>
  )
}


export default AboutSection;