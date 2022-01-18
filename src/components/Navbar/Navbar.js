import React from 'react';
import './Navbar.css';
import img from "../../image/Logo.png";


const Navbar = () => {
    return (
        <div className="navbar">
          <div className="nav-log">
            <img src={img} alt="" />
          </div>
          <div className="nav-search">
              <input type="search" placeholder='Search your destination'/>
          </div>
          <ul className="nav-items">
            <li className="nav-item">
              <a href="#" className="nav-link">
                News
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Destination
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
          <div className="nav-btn">
            <button>Login</button>
          </div>
        </div>
    );
};

export default Navbar;