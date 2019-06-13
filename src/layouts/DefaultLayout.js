import React from 'react'
import Header from '../components/Header/Header'

export default Page =>
  class DefaultLayout extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        filter: ''
      }

      this.handleSetFilter = this.handleSetFilter.bind(this)
    }

    handleSetFilter(filter) {
      this.setState({ filter: filter })
    }

    render() {
      return (
        <div className="default-layout">
          <Header handleSetFilter={this.handleSetFilter} />
          <Page
            filter={this.state.filter}
            name={this.props.match.params.name}
          />
        </div>
      )
    }
  }
