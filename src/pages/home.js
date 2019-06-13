import React from 'react'

import HomeLayout from '../layouts/HomeLayout'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <main>
          <div className="home-content-wrapper">
            <div className="home-content">
              <h1>Chris Murphy</h1>
              <h2>Fine Art Photography</h2>
              <Link to="galleries" className="enter-button">
                Enter
              </Link>
            </div>
          </div>
        </main>
      </React.Fragment>
    )
  }
}

export default HomeLayout(Home)
