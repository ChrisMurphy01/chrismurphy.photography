import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class Nav extends React.Component {
  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     filter: props.filter
  //   }
  // }

  render() {
    return (
      <div className="nav-container">
        <ul className="nav">
          <li>
            <button onClick={() => this.props.handleSetFilter('BNW')}>
              Black &amp; White
            </button>
          </li>
          <li>
            <button onClick={() => this.props.handleSetFilter('flora')}>
              Flora
            </button>
          </li>
          <li>
            <button onClick={() => this.props.handleSetFilter('london')}>
              London
            </button>
          </li>
          <li>
            <button onClick={() => this.props.handleSetFilter('seascapes')}>
              Seascapes
            </button>
          </li>
          <li>
            <button onClick={() => this.props.handleSetFilter('waterscapes')}>
              Waterscapes
            </button>
          </li>
          <li>
            <button onClick={() => this.props.handleSetFilter('woodland')}>
              Woodland
            </button>
          </li>
          <li>
            <button onClick={() => this.props.handleSetFilter('iceworlds')}>
              Iceworlds
            </button>
          </li>
        </ul>
      </div>
    )
  }
}

// <li>
//   <Link to="/sizes">Sizes</Link>
// </li>
// <li>
//   <Link to="/checkout">Checkout</Link>
// </li>

export default Nav
