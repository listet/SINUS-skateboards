import React from 'react'
import './Header.css'
import Nav from '../nav/Nav.jsx'


function Header() {
    return (
        <header className='header'>
            <img src='../src/assets/sinus-logo-horisontal.png' alt='Logo' />
            <Nav />
        </header>
    )
}

export default Header
