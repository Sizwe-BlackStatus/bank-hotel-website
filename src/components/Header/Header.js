import React from 'react';
import "./Header.css"
import Navbar from '../Navbar/Navbar';

function Header() {
    return (
        <div className='header-container'>
            <div className='header-logo'>
                <p className='header-text'>bankhotel</p>
            </div>
            <Navbar />
            <div className='header-contacts'>
                <p className='contacts'>+38 032 297 50 20</p>
            </div>
        </div>
    );
}

export default Header;