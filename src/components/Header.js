import React from 'react'
import Nav from './Nav'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Header = props => {
  return (
    <React.Fragment>
      <Link to="/">
        <h1>Chris Murphy</h1>
        <h2>Photography</h2>
      </Link>
      {props.showFilter !== 'false' && (
        <Nav handleSetFilter={props.handleSetFilter} />
      )}
    </React.Fragment>
  )
}

export default Header
