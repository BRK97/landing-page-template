import { useEffect } from 'react';
import { images }           from '../../constants';
import { HashLink } from 'react-router-hash-link';
import { useLocation }      from "react-router-dom";
import Card from './Card.jsx';
import data from '../../data/leadership.json';
import './leadership.scss';

const Leadership = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop + offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth"
    });
  } 

  return (
    <div className="leadership">
      <div className="imageBG">
        <div className="polaroid"/>
        <h1 className="leadership-title">Leadership</h1>
        <div className="callToAction-div">
          <HashLink to="/leadership/#Executive-Cards" smooth={true} scroll={el => scrollWithOffset(el, -200)}>
            <img src={images.chevron} alt="" className="callToAction-icon" />
          </HashLink>
        </div>
      </div>
      <h3 className="executive-title">EXECUTIVE TEAM</h3>
      <div className="executive-cards" id='Executive-Cards'>
        {
          data.map((item) => {
            return(
              <Card 
                name = {item.fullName} 
                jobTitle = {item.jobTitle} 
                education = {item.education}
                id = {item.id}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default Leadership