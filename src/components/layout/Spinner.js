import React from 'react';
import loader from './loader.gif';

const Spinner = () => {
  return (
    <div className="d-flex justify-content-center">
      <img src={loader} alt="Loading..."/>
    </div>
  )
}

export default Spinner
