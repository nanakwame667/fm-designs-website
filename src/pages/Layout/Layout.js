import React from 'react';
import './Layout.css';
import { Link,Outlet } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
export default function Layout() {
  return(
      <div className='container layout'>
          <div className='content'>
          <div className='logo'>
            <img src={logo} alt="logo"/>
          </div>
          <div className='links'>
          <ul>
              <li>
                  <Link className='link' to='/'>Home</Link>
              </li>
              <li>
                  <Link className='link' to='/categories'>Categories</Link>
              </li>
              <li>
                  <Link className='link' to='/gallery'>Gallery</Link>
              </li>
              <li>
                  <Link className='link' to='/about'>About</Link>
              </li>
              <li>
                  <Link className='link' to='/contact'>Contact</Link>
              </li>
          </ul>
          </div>
          </div>
          <Outlet/>
      </div>
  );
}
