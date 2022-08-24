// import React from 'react';
import './hero.scss';
import { motion } from 'framer-motion';
import {images} from "../../../constants";
import { HashLink } from 'react-router-hash-link';


const Hero = () => {
  return (
    <div className="hero" id="Home">
      <div className="container">
        <section className="left">
          <motion.h1
            className="hero-title"
            animate={{x: 0, scale: 1}}
            initial={{x: 100, scale: 0.9}}
            transition={{duration: 0.4}}
          >
            Your Recruitment Experience Just <br/><span>Leveled Up</span>
          </motion.h1>
          <motion.p
            className="hero-paragraph"
            animate={{x: 0, opacity: 1}}
            initial={{x: -100, opacity: 0}}
            transition={{delay: 0.2, duration: 0.4}}
          >
            The best questionaires that will constantly satisfy your organization hiring process.
          </motion.p>
          <div className="buttons">
            <motion.div 
              className="hero-button"
              animate={{y: 0, opacity: 1}}
              initial={{y: 40, opacity: 0}}
              transition={{delay: 0.3, duration: 0.2}}
            >
              <HashLink
                to="/#Contact" 
                smooth
              >
                Contact Us
              </HashLink>
            </motion.div>
            <motion.div 
              className="hero-button2"
              animate={{y: 0, opacity: 1}}
              initial={{y: 40, opacity: 0}}
              transition={{delay: 0.3, duration: 0.2}}
            >
              <HashLink
                to="/#About" 
                smooth
              >
                Learn More
              </HashLink>
            </motion.div>
          </div>
        </section>
        <section className="right">
          <motion.img 
            // src={images.formIllustration}
            src={images.form2}
            animate={{scale: 1, opacity: 1}}
            initial={{scale: 0.6, opacity: 0.2}}
            transition={{duration: 0.5}}
          >
          </motion.img>
        </section>
      </div>
    </div>
  )
}

export default Hero