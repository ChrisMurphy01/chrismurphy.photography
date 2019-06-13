import React from 'react'

import DefaultLayout from '../layouts/DefaultLayout'

import {
  BNW,
  flora,
  london,
  seascapes,
  waterscapes,
  woodland,
  iceworlds
} from '../components/Images/Images'

import Gallery from '../components/Gallery/Gallery'

const GalleryPage = props => {
  return (
    <React.Fragment>
      <main>
        {props.name === 'Black & White' && (
          <Gallery title="Black & White" images={BNW} />
        )}
        {props.name === 'Iceworlds' && (
          <Gallery title="Ice Worlds" images={iceworlds} />
        )}
        {props.name === 'Flora' && <Gallery title="Flora" images={flora} />}
        {props.name === 'London' && <Gallery title="London" images={london} />}
        {props.name === 'Seascapes' && (
          <Gallery title="Seascapes" images={seascapes} />
        )}
        {props.name === 'Waterscapes' && (
          <Gallery title="Waterscapes" images={waterscapes} />
        )}
        {props.name === 'Woodland' && (
          <Gallery title="Woodland" images={woodland} />
        )}
      </main>
    </React.Fragment>
  )
}

export default DefaultLayout(GalleryPage)
