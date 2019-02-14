import React from 'react'

import DefaultLayout from '../layouts/DefaultLayout'
import './styles.scss'
import { Link } from 'react-router-dom'
import {
  BNW,
  flora,
  london,
  seascapes,
  waterscapes,
  woodland,
  iceworlds
} from '../components/Images'

class Home extends React.Component {
  galleryItem(image, i, gallery) {
    return (
      <li key={image}>
        <Link
          to={`image${gallery[image].split('.', 1)}`}
          className="photo-image--link"
        >
          <img src={gallery[image]} className="photo-image" />
        </Link>
      </li>
    )
  }

  render() {
    return (
      <React.Fragment>
        <h1>Chris Murphy</h1>
        <h2>Photography</h2>
        <main>
          <ul className="gallery-list">
            {Object.keys(BNW).map((image, i) =>
              this.galleryItem(image, i, BNW)
            )}
            {Object.keys(iceworlds).map((image, i) =>
              this.galleryItem(image, i, iceworlds)
            )}
            {Object.keys(flora).map((image, i) =>
              this.galleryItem(image, i, flora)
            )}
            {Object.keys(london).map((image, i) =>
              this.galleryItem(image, i, london)
            )}
            {Object.keys(seascapes).map((image, i) =>
              this.galleryItem(image, i, seascapes)
            )}
            {Object.keys(waterscapes).map((image, i) =>
              this.galleryItem(image, i, waterscapes)
            )}
            {Object.keys(woodland).map((image, i) =>
              this.galleryItem(image, i, woodland)
            )}
          </ul>
        </main>
      </React.Fragment>
    )
  }
}

export default DefaultLayout(Home)
