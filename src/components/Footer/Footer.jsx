import React from 'react'
import './style.css'

const Footer= ({copy, years}) => {
  return (
    <footer>
        <p>
        {copy} <i className="fa-sharp fa-regular fa-copyright"></i>  {years}
        </p>
        
    </footer>
  )
}

export default Footer;