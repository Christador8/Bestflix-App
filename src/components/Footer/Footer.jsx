import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <h2 className='footer-title'>Bestflix</h2>
      <p className='footer-description'>Watch anywhere. Cancel anytime.</p>
      <ul>
        <li>Audio Description</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyright-text'>© 2023 Bestflix, Inc.</p>
    </div>
  );
};

export default Footer;
