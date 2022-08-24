import React, {useState} from 'react';
import './navbar.scss';
import {images} from '../../constants';
import {useWindowSize} from '../../utils';
import { HashLink } from 'react-router-hash-link';
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/Hi";


const Navbar = () => {

  const offsets = [0 , 80, -170, -90, -20];
  const windowSize = useWindowSize();

  const [toggle, setToggle] = useState(false);

  const scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop + offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth"
    });
  }  

  const navbarLinks = () => {
    return(
      <ul className="navbarLinks">
        {['Home', 'About', 'Team', 'Faq'].map((item, index) => (
          <li className="navbarLinks-link" key={`link-${item}`}>
            <HashLink 
              to={`/#${item}`}
              smooth={true} 
              scroll={el => scrollWithOffset(el, offsets[index])}
            >
              {item}
            </HashLink>
          </li>
        ))}
      </ul>
    )
  }
  const navbarMenuLinks = () => {
    return(
      <React.Fragment>
        <ul className="navbarMenuLinks">
            {['Home', 'About', 'Team', 'Faq'].map((item, index) => (
              <div class = 'nav_list_item'>
                <li className="navbarMenuLinks-link" key={`link-${item}`}>
                  <HashLink 
                    to={`/#${item}`} 
                    smooth={true} 
                    scroll={el => scrollWithOffset(el, offsets[index])}
                    onClick={()=>{setToggle((toggle)=>!toggle)}}  
                  >
                    <p className="temp">{item}</p>
                  </HashLink>
                </li>
              </div>
            ))}
          {contactButton()}
        </ul>
      </React.Fragment>
    )
  }

  const contactButton = () => {
    if(windowSize.width > 749){
      return(
        <HashLink 
          to={'/#Contact'}
          smooth={true}
          scroll={el => scrollWithOffset(el, offsets[4])} 
          onClick={()=>{toggle ? setToggle((toggle)=>!toggle) : null}} 
        >
          <p className={toggle ? "contactBtn_mobile" : 'contactBtn'}>Contact</p>
        </HashLink>
      )
    }else{
      return(
        <div class = 'nav_list_item'>
          <HashLink 
            to={'/#Contact'}
            onClick={()=>{setToggle((toggle)=>!toggle)}} 
            smooth={true}
            scroll={el => scrollWithOffset(el, offsets[4])} 
          >
            <p className="contactBtn_mobile">Contact</p>
          </HashLink>
        </div>
      )

    }
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <HashLink to='/#Home' smooth={true}>
          <img src={images.logo} alt="" className="app_logo"/>
        </HashLink>
        {navbarLinks()}
        <div className="navbar-left">
          {windowSize.width > 749 ? contactButton() : null}
          {!toggle && 
            <div className="navbar-left-icon">
              <HiOutlineMenuAlt3 onClick={() => {setToggle(true)}}/>
            </div> 
          }
        </div>
        {toggle && <div className='bg-menu'>
          <div className='close-icon'>
            <HiOutlineX onClick={() => {setToggle(false)}}/>
          </div>
          {navbarMenuLinks()}
        
        </div>}

      </div>
    </nav>
  )
}

export default Navbar