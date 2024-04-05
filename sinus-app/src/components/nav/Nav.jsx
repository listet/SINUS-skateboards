import React from 'react'
import './Nav.css'
import cartImg from '../../assets/cart.png'
import NavItem from '../navItem/NavItem'

function Nav() {
    const itemsNav = [
        'Products',
        'My Account',
    ]
    return (
        <nav className='nav__container'>
            <ul className='nav__list'>
                {
                    itemsNav.map(item => {
                        return <NavItem item={item} />
                    })
                }
                <li className='nav__item'><img src={cartImg} alt="cart" /> </li>
            </ul>
        </nav >
    )
}

export default Nav
