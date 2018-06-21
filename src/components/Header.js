import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
        <div className="header">
          <img alt="" src="https://troolr.com/assets/graphics/logo-small.png" />
          <div className="nav">
            <div className="nav-items">
              <Link to="">Locations</Link>
              <Link to="">Categories</Link>
            </div>

          </div>
        </div>);
};

export default Header;
