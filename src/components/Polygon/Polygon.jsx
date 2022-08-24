// import React from 'react';
import './polygon.scss';

const Polygon = ({isFlipped}) => {

  if(isFlipped){
    return (
      <div className="polygonFlipped"></div>
    )
  }

  return (
    <div className="polygon"></div>
  )

}

export default Polygon