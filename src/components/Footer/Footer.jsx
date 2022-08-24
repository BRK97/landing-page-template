import React from 'react';
import './footer.scss';
import {images} from '../../constants';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import {BsLinkedin, BsGithub} from 'react-icons/Bs';

const Footer = () => {

  const offsets = [0 , 80, -170, -90, -20];

  const scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop + offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth"
    });
  } 

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="company-slogan">
          <img src={images.logo} alt="logo" className="footer-logo" />
          <h3 className="slogan">Insert here slogan or something wise</h3>
        </div>
        <ul className="footer-list">
          <li>
            <HashLink  
              to={`/#Home`} 
              smooth={true} 
              scroll={el => scrollWithOffset(el, offsets[0])}
            >
              Home
            </HashLink>
          </li>
          <li>&bull;</li>
          <li>
            <HashLink   
              to={`/#About`} 
              smooth={true} 
              scroll={el => scrollWithOffset(el, offsets[1])}
            >
            About
          </HashLink>
          </li>
          <li>&bull;</li>
          <li>
            <HashLink   
              to={`/#Team`} 
              smooth={true} 
              scroll={el => scrollWithOffset(el, offsets[2])}>
            Team
          </HashLink>
          </li>
          <li>&bull;</li>
          <li>
            <Link   to="/Leadership">
            Leadership
          </Link>
          </li>
          <li>&bull;</li>
          <li>
            <HashLink   to={`/#Faq`} 
              smooth={true} 
              scroll={el => scrollWithOffset(el, offsets[3])}>
            Faq
          </HashLink>
          </li>
          <li>&bull;</li>
          <li>
            <HashLink   to={`/#Contact`} 
              smooth={true} 
              scroll={el => scrollWithOffset(el, offsets[4])}>
            Contact Us
          </HashLink>
          </li>
        </ul>
        <div className="footer-bottomLine">
          <span>
            &copy; This company {/\d{4}/.exec(Date())[0]}, All Rights Reserved
          </span>
          {/* <ul>
            <li>Term of Service</li>
            <li>&bull;</li>
            <li>Privacy Policy</li>
          </ul> */}
          <p>
           {/* This website was created by Barak.O <a href=""><BsLinkedin/></a> <a className="github" href=""><BsGithub/></a> */}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer