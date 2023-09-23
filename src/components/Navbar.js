import React from 'react'
import { NavLink } from 'react-router-dom'
import navStyles from '../styles/nav.module.css'

export const Navbar = () => {
  return (
    <header>
        <nav className={navStyles.nav}>
            <ul className={navStyles.links}>
                <li><NavLink className={({ isActive }) => isActive ? `${navStyles.active}` : navStyles.a} to='/'>Home</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? `${navStyles.active}` : navStyles.a} to='/about'>About</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? `${navStyles.active}` : navStyles.a} to='/contact'>Contact</NavLink></li>
                <li><NavLink className={navStyles.cart} to='/cart'><i className="fa fa-shopping-cart"></i> </NavLink></li>
            </ul>
        </nav>
    </header>
  )
}

export default {Navbar}
