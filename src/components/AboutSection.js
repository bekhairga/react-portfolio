import React from 'react';
import {About, Hide, Description, Image,} from './styles.js';
import home1 from '../img/home1.png';
import {motion} from 'framer-motion';
const AboutSection = () => {


  const titleAnimation = {
    hidden: {opacity: 0},
    show: {opacity: 1, transition: {duration: 2}}
  }
  const container = {
    hidden: {x: 100},
    show: {x: 0, transition: {duration:0.75, ease: 'easeOut', staggerChildren: 0.25, when: 'afterChildren'}}
  }

  return(
    <About>
      <Description>
        <motion.div variants={container} initial='hidden' animate='show' className="title">
          <Hide>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation} >your <span>dreams</span></motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation} >come true</motion.h2>
          </Hide>
        </motion.div>
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