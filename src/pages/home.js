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
        <main>
          {this.props.filter === 'BNW' && (
            <div>
              <h2>Black &amp; White</h2>
              <ul className="gallery-list">
                {Object.keys(BNW).map((image, i) => {
                  return this.galleryItem(image, i, BNW)
                })}
              </ul>
            </div>
          )}
          {this.props.filter === 'iceworlds' && (
            <div>
              <h2>Ice Worlds</h2>
              <ul className="gallery-list">
                {Object.keys(iceworlds).map((image, i) => {
                  return this.galleryItem(image, i, iceworlds)
                })}
              </ul>
            </div>
          )}
          {this.props.filter === 'flora' && (
            <div>
              <h2>Flora</h2>
              <ul className="gallery-list">
                {Object.keys(flora).map((image, i) => {
                  return this.galleryItem(image, i, flora)
                })}
              </ul>
            </div>
          )}
          {this.props.filter === 'london' && (
            <div>
              <h2>London</h2>
              <ul className="gallery-list">
                {Object.keys(london).map((image, i) => {
                  return this.galleryItem(image, i, london)
                })}
              </ul>
            </div>
          )}
          {this.props.filter === 'seascapes' && (
            <div>
              <h2>Seascapes</h2>
              <ul className="gallery-list">
                {Object.keys(seascapes).map((image, i) => {
                  return this.galleryItem(image, i, seascapes)
                })}
              </ul>
            </div>
          )}
          {this.props.filter === 'waterscapes' && (
            <div>
              <h2>Waterscapes</h2>
              <ul className="gallery-list">
                {Object.keys(waterscapes).map((image, i) => {
                  return this.galleryItem(image, i, waterscapes)
                })}
              </ul>
            </div>
          )}
          {this.props.filter === 'woodland' && (
            <div>
              <h2>Woodland</h2>
              <ul className="gallery-list">
                {Object.keys(woodland).map((image, i) => {
                  return this.galleryItem(image, i, woodland)
                })}
              </ul>
            </div>
          )}
        </main>
      </React.Fragment>
    )
  }
}

export default DefaultLayout(Home)
