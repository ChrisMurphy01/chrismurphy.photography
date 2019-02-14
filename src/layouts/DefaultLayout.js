import React from 'react'
import Nav from '../components/Nav'

export default Page =>
  class DefaultLayout extends React.Component {
    render() {
      return (
        <div>
          <Page />
        </div>
      )
    }
  }
