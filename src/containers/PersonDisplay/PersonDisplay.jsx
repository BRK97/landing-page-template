import {useEffect, useState}          from 'react';
import { useLocation,useParams }      from "react-router-dom";
import data from '../../data/leadership.json'
import './personDisplay.scss';
import {FaGithub,FaLinkedin,FaTwitter} from 'react-icons/Fa';


const PersonDisplay = () => {

  const {id} = useParams();
  const { pathname } = useLocation();
  const [person, setPerson] = useState({});

  useEffect(() => {
    setPerson(item => ({
      ...item, ...data[id]
    }))
    window.scrollTo(0, 0);
  }, [pathname]);

  return (   
    <div className="personDisplay">
        <div className="background-top">
          <h1>
            {person.education === "professor" ? "Prof. " : null}
            {person.fullName}
            {person.education!="professor" ? `, ${person.education}` : ""}
          </h1>
          <h3>{person.jobTitle}</h3>
          <div className='light x1'></div>
          <div className='light x2'></div>
          <div className='light x3'></div>
          <div className='light x4'></div>
          <div className='light x5'></div>
          <div className='light x6'></div>
          <div className='light x7'></div>
          <div className='light x8'></div>
          <div className='light x9'></div>
      </div>
      <div className="personDisplay-description">
        <div>
          <div className="bg"></div>
          {`${person.about}\n\n\n`}
          <div className="person-slinks">
            {person.linkedinLink && (
              <a href={person.linkedinLink}><FaLinkedin/></a>
            )}
            {person.twitterLink && (
              <a href={person.twitterLink}><FaTwitter/></a>
            )}
            {person.githubLink && (
              <a href={person.githubLink}><FaGithub/></a>
            )}
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default PersonDisplay