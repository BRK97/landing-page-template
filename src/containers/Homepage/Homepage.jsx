import React,{ useEffect }          from 'react';
import { useLocation }        from "react-router-dom";
import {About, Faq, Team, Hero, Contact} from './index';

const Homepage = () => {

  return (
    <React.Fragment>
      <Hero />
      <About />
      <Team />
      <Faq />
      <Contact />
    </React.Fragment>
  )
}

export default Homepage;