import React from 'react'
import ReactDOM from 'react-dom'
import Home from './pages/home'
import Sizes from './pages/sizes'
import Image from './pages/image'

import { BrowserRouter as Router, Route } from 'react-router-dom'

const Index = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={Sizes} />
        <Route path="/image/:name" component={Image} />
      </div>
    </Router>
  )
}

ReactDOM.render(<Index />, document.getElementById('app'))
