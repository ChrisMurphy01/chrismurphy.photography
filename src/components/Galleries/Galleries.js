import React from 'react'
import './styles.scss'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import {
  BNW,
  flora,
  london,
  seascapes,
  waterscapes,
  woodland,
  iceworlds
} from '../Images/Images'

const GalleryArray = [
  BNW,
  flora,
  london,
  seascapes,
  waterscapes,
  woodland,
  iceworlds
]

const titles = [
  'Black & White',
  'Flora',
  'London',
  'Seascapes',
  'Waterscapes',
  'Woodland',
  'Iceworlds'
]

const card = (image, i, gallery, title) => {
  return (
    <li key={image}>
      <Link to={`/gallery/${title}`} className="gallery-link">
        <img src={gallery[0]} className="gallery-image" />
        {title}
      </Link>
    </li>
  )
}

const Galleries = () => {
  return (
    <div className="galleries-container">
      <ul className="galleries">
        {Object.keys(GalleryArray).map((image, i) => {
          return card(image, i, GalleryArray[i], titles[i])
        })}
      </ul>
    </div>
  )
}

export default Galleries
