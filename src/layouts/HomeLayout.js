import React from 'react'

export default Page =>
  class DefaultLayout extends React.Component {
    render() {
      return (
        <div className="home-image">
          <Page />
        </div>
      )
    }
  }
