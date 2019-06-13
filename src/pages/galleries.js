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

import Galleries from '../components/Galleries/Galleries'

class GalleriesPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <main>
          <Galleries />
        </main>
      </React.Fragment>
    )
  }
}

export default DefaultLayout(GalleriesPage)
