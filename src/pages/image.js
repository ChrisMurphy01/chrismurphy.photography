import React from 'react'
import Nav from '../components/Nav'
import { all } from '../components/Images'

class Image extends React.Component {
  render() {
    const imageName = this.props.match.params.name
    let imageUrl

    // const liveKey = 'pk_live_99Hu8uS630yGzCzN1y2nBXd5'

    for (const i in all) {
      if (all[i][imageName]) {
        imageUrl = all[i][imageName]
      }
    }
    return (
      <div>
        <Nav />
        <h2>Image</h2>
        <img src={`${imageUrl}`} className="photo-image" />
      </div>
    )
  }
}

export default Image
