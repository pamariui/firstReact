import React from 'react'
import './style.css';

const Header = ({text, comments }) => {
  return (
    <div>
        <h1>{text}</h1>
        <h2>{comments}</h2>
    </div>
    
  )
}

export default Header