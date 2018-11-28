import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/customers'>Customers</Link></li>
        <li><Link to='/employees'>Employees</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header