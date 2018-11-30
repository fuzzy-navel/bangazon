import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/computers'>Computers</Link></li>
        <li><Link to='/customers'>Customers</Link></li>
        <li><Link to='/departments'>Departments</Link></li>
        <li><Link to='/employees'>Employees</Link></li>
        <li><Link to='/orders'>Orders</Link></li>
        <li><Link to='/paymenttypes'>Payment Types</Link></li>
        <li><Link to='/products'>Products</Link></li>
        <li><Link to='/producttypes'>Product Types</Link></li>
        <li><Link to='/trainingprograms'>Training Programs</Link></li>

      </ul>
    </nav>
  </header>
)

export default Header