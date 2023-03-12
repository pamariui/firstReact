import React from 'react';
import './style.css';

const Button = ({name, active}) => {
  return (
    <button className={active}>
        
        {name}
    </button>
  )
}

export default Button