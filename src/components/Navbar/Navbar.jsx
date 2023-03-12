import React from 'react';
import Link from '../link/Link';
import Logo from '../logo';
import './Navbar.css';

const Navbar = (props) => {
  return (
  <>
    <nav className='navbar'>
        <div className='navbar-container'>
            <Logo logo='Chegg' link='#' className="navbar-logo"/>
            <div className='link-container'>
              <Link link='#' text='Learn about Chegg Study' className='add'/>
              <ul>
                {React.Children.map(props.children, (child, index) => (
                  <React.Fragment key={index}>
                    {child}
                    {index < props.children.length - 1 && <li className="separator"></li>}
                  </React.Fragment>
                ))}
              </ul>
              <i className="fa-solid fa-chevron-down icon"></i>
            </div>
        </div>
    </nav>
  </>
  )
}

export default Navbar;