import React from 'react'
import './style.css'
const DiscountBar = (props) => {
  return (
    <div className='discount'>
        <i className="fa-solid fa-tags"></i>
        
        <p>{props.condition} Use Code: <span className='code'>{props.code}</span></p>
        <i className="fa-regular fa-face-tongue-money"></i>
    </div>
  )
}

export default DiscountBar