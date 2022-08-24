// import React from 'react';
import './about.scss';
import {Separator, Polygon} from '../../../components';
import {RiSurveyLine} from 'react-icons/Ri';
import {motion} from 'framer-motion';
import {CgProfile} from 'react-icons/Cg';
import {GiMicroscope, GiChart} from 'react-icons/Gi';
import data from '../../../data/about.json';
 
const About = () => {

  return (
    <div className="about" id="About">
      <Polygon/>
      <div className="about-container">
        <motion.span 
          className="about-tag" 
          transition={{duration: 1, delay: 0.4}} 
          whileInView={{ opacity: [0, 1]}} 
          viewport={{ once: true }}>
            {data[0].tag}
        </motion.span>
        <motion.h1 
          className="about-title" 
          transition={{duration:1, delay: 0.4}} 
          whileInView={{ opacity: [0, 1]}} 
          viewport={{ once: true }}>
            {data[0].title}
        </motion.h1>
        <motion.p 
          className="about-description" 
          transition={{duration:1, delay: 0.4}} 
          whileInView={{ opacity: [0, 1]}} 
          viewport={{ once: true }}>
            {data[0].description}
        </motion.p>
        <ul className="about-pros">
          <motion.li className="about-pros-item" transition={{duration:0.5, delay: 0.4}} whileInView={{ opacity: [0, 1], x: [20,0] }} viewport={{ once: true }}>
            <div className="item-icon"><GiMicroscope/></div> {data[0].iconsText[0]}</motion.li>
          <motion.li className="about-pros-item" transition={{duration:0.65, delay: 0.4}} whileInView={{ opacity: [0, 1], x: [20,0] }} viewport={{ once: true }}>
            <div className="item-icon"><GiChart/></div> {data[0].iconsText[1]}</motion.li>
          <motion.li className="about-pros-item" transition={{duration:0.8, delay: 0.4}} whileInView={{ opacity: [0, 1], x: [20,0] }} viewport={{ once: true }}>
            <div className="item-icon"><RiSurveyLine/></div> {data[0].iconsText[2]}</motion.li>
          <motion.li className="about-pros-item" transition={{duration:0.95, delay: 0.4}} whileInView={{ opacity: [0, 1], x: [20,0] }} viewport={{ once: true }}>
            <div className="item-icon"><CgProfile/></div> {data[0].iconsText[3]}</motion.li>
        </ul>
      <Separator/>
      </div>
      <div className="about-container">
        <motion.span 
          className="about-tag. temp" 
          transition={{duration:1, delay: 0.4}} 
          whileInView={{ opacity: [0, 1]}} 
          viewport={{ once: true }}>
            {data[1].tag}
        </motion.span>
        <motion.h1 
          className="about-title" 
          transition={{duration:1, delay: 0.4}} 
          whileInView={{ opacity: [0, 1]}} 
          viewport={{ once: true }}>
            {data[1].title}
        </motion.h1>
        <motion.p 
          className="about-description" 
          transition={{duration:1, delay: 0.4}} 
          whileInView={{ opacity: [0, 1]}} 
          viewport={{ once: true }}>
            {data[1].description}
        </motion.p>
        <ul className="about-pros">
          <motion.li className="about-pros-item" transition={{duration:0.5, delay: 0.4}} whileInView={{ opacity: [0, 1], x: [20,0] }} viewport={{ once: true }}>
            <div className="item-icon. temp2"><GiMicroscope/></div> {data[1].iconsText[0]}</motion.li>
          <motion.li className="about-pros-item" transition={{duration:0.65, delay: 0.4}} whileInView={{ opacity: [0, 1], x: [20,0] }} viewport={{ once: true }}>
            <div className="item-icon. temp2"><GiChart/></div> {data[1].iconsText[1]}</motion.li>
          <motion.li className="about-pros-item" transition={{duration:0.8, delay: 0.4}} whileInView={{ opacity: [0, 1], x: [20,0] }} viewport={{ once: true }}>
            <div className="item-icon. temp2"><RiSurveyLine/></div> {data[1].iconsText[2]}</motion.li>
          <motion.li className="about-pros-item" transition={{duration:0.95, delay: 0.4}} whileInView={{ opacity: [0, 1], x: [20,0] }} viewport={{ once: true }}>
            <div className="item-icon. temp2"><CgProfile/></div> {data[1].iconsText[3]}</motion.li>
        </ul>
      <Separator/>
      </div>
    </div>
  )
}

export default About