import React from 'react'
import './style.css'
const DiscountBar = (props) => {
  return (
    <div className='discount'>
        <i class="fa-solid fa-tags"></i>
        
        <p>{props.condition} Use Code: <span className='code'>{props.code}</span></p>
        <i class="fa-regular fa-face-tongue-money"></i>
    </div>
  )
}

export default DiscountBar