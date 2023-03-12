import React from 'react'
import './style.css'


const Logo = (props) => {
  return (
    <a className='logo' href={props.link}>
        <div className='short'>{props.logo}</div>
        <i className="fa-regular fa-registered"></i>
    </a>
  )
}

export default Logo