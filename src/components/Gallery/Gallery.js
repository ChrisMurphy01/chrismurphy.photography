import React from 'react'
import './styles.scss'
import { Link } from 'react-router-dom'

// <Link
//   to={`image${gallery[image].split('.', 1)}`}
//   className="photo-image--link"
// >
// </Link>
const galleryItem = (image, i, gallery) => {
  return (
    <li key={image}>
      <img src={gallery[image]} className="photo-image" />
    </li>
  )
}

const Gallery = props => {
  return (
    <div>
      <h2>{props.title}</h2>
      <ul className="gallery-list">
        {Object.keys(props.images).map((image, i) => {
          return galleryItem(image, i, props.images)
        })}
      </ul>
    </div>
  )
}

export default Gallery
