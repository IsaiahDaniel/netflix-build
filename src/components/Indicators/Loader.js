import React from 'react';
import "./indicators.css";

const Loader = ({ spinner }) => {

  if(spinner){
    return (
      <div className="spinner"></div>
    )
  }

  return (
    <div className='loader'>
        <img src={require("../../assets/Netflix-Logo-2006.png")} alt="loader..." />
        <h3>Loading....</h3>
    </div>
  )
}

export default Loader