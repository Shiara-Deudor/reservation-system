import React from 'react'
import { NavLink } from 'react-router-dom'
import { paths } from '../utils/routes'

const Navbar = () => {
  return (
    <header>
        <nav>
            <ul>
                <li>
                    <NavLink to={paths.home}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={paths.room}>Rooms</NavLink>
                </li>
                <li>
                    <NavLink to={paths.reservation}>Reservations</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar
