import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import bellIcon from '../../assets/bell_icon.png';
import search_icon from '../../assets/search-icon.png';
import profile_img from '../../assets/profile.jpg'; 
import caretIcon from '../../assets/caret_icon.png';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-left"></div>

      <img src={logo} alt="Bestflix Logo" className='logo' />

      <div className="navbar-center">
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>

      <div className="navbar-right">
        <img src={search_icon} alt="Search" className="search-icon" />
        <p className="navbar-text">Children</p>
        <img src={bellIcon} alt="Notifications" className="bell-icon" />

        {/* Profile and dropdown */}
        <div className="navbar-profile">
          <img src={profile_img} alt="Profile" className="profile-img" />
          <img src={caretIcon} alt="Caret" className="caret-icon" />

          <div className="dropdown">
            <p>Sign out of Bestflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
