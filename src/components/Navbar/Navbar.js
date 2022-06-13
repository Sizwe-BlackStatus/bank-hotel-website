import React from 'react';
import './Navbar.css'

function Navbar() {
    return (
        <div className='navbar'>
            <ul className='navbar-links'>
                <li className='navbar-link'>home</li>
                <li className='navbar-link'>about</li>
                <li className='navbar-link'>rooms</li>
                <li className='navbar-link'>restaurant</li>
                <li className='navbar-link'>conference hall</li>
                <li className='navbar-link'>contacts</li>
            </ul>
        </div>
    );
}

export default Navbar;