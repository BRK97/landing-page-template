// import React from 'react';
import './team.scss';
import { Link } from "react-router-dom";
import {Separator} from '../../../components';
import {AiOutlineArrowRight} from 'react-icons/Ai';
import {useWindowSize} from '../../../utils';
import data from '../../../data/team.json';

const Team = () => {

  const windowSize = useWindowSize();
  
  return (
    <div className="team" id="Team">
      <div className="team-container">
        <div className="sections">
          <section className="section-left">
            <span className="team-tag">team <span id="team-and">&</span> management</span>
            <h1 className="team-title">{data.title}</h1>
            {windowSize.width > 1024 && 
              <Link to='/leadership'>
                <button className="team-button">
                  {data.button} <AiOutlineArrowRight/>
                </button>
              </Link> 
            }
          </section>
          <section className="section-right">
            <p className="team-story">
              {data.story}
            </p>
          </section>
            {windowSize.width <= 1024 && 
              <Link to='/leadership'>
                <button className="team-button">
                  Leadership <AiOutlineArrowRight/>
                </button>
              </Link> 
            }
        </div>
      <Separator/>
      </div>
    </div>
  )
}

export default Team