import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './styles.scss'

const Nav = () => {
  return (
    <div className="nav-container">
      <ul className="nav">
        <li>
          <Link to="/"> home</Link>
        </li>
        <li>
          <Link to="/galleries"> galleries</Link>
        </li>
        <li>
          <Link to="/contact">contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default Nav
