import React from 'react';
import "./Button.css";

const Button = ({ text, classNames, styles, buttonType, loading, children, disabled }) => {
  return (
    <button className={`btn__primary ${classNames}`} style={styles} type={buttonType} disabled={disabled}>
        { children }
    </button>
  )
}

Button.defaultProps = {
  buttonType: "button",
  loading: false
}

export default Button;