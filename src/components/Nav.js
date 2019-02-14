import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Nav = () => (
  <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/sizes">Sizes</Link>
      </li>
    </ul>
    <hr />
  </div>
)

export default Nav
