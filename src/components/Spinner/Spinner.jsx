import React from 'react';
import './spinner.scss';
import {PropagateLoader} from 'react-spinners';
const Spinner = () => {
  return (
    <div className="spinner">
        <PropagateLoader/>
    </div>
  )
}

export default Spinner