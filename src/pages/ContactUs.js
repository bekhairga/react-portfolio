import React from 'react'
import {pageAnimation} from '../animation';
import {motion} from 'framer-motion';
import styled from 'styled-components';
const ContactUs = () => {
    return (
        <motion.div variants={pageAnimation} initial="initial" animate="show" exit="exit" style={{background : '#fff'}}>
            Contact US
        </motion.div>
    )
}

export default ContactUs
