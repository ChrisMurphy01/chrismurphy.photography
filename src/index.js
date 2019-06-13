import React from 'react'
import ReactDOM from 'react-dom'
import './styles.scss'
import Home from './pages/home'
import Contact from './pages/contact'
import Gallery from './pages/gallery'
import Galleries from './pages/galleries'
import Sizes from './pages/sizes'
import Image from './pages/image'
import Checkout from './pages/checkout'

import { BrowserRouter as Router, Route } from 'react-router-dom'

const Index = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/galleries" component={Galleries} />
        <Route path="/gallery/:name" component={Gallery} />
        <Route path="/about" component={Sizes} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/image/:name" component={Image} />
      </div>
    </Router>
  )
}

ReactDOM.render(<Index />, document.getElementById('app'))
