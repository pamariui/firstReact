import React from 'react'
import './style.css'

const Footer= ({copy, years}) => {
  return (
    <footer>
        <p>
        {copy} <i class="fa-sharp fa-regular fa-copyright"></i>  {years}
        </p>
        
    </footer>
  )
}

export default Footer