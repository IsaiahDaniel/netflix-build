import React from 'react';
import "./input.css";

const Input = ({ inputType, classNames, style, ...otherProps  }) => {
  return (
    <input type={inputType} className={`input ${classNames}`} { ...otherProps } style={style} />
  )
}

Input.defaultProps = {
    inputType: "text"
}

export default Input