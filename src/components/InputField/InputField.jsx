import React from 'react'
import './style.css';

const InputField = ({placeholder,btnText}) => {
  return (
    <div className='input-field'>
        <input type="text" placeholder={placeholder}/>
        <button>{btnText}</button>
    </div>
  )
}

export default InputField;