import React from 'react'
import { all } from '../components/Images'
import StripeCheckout from 'react-stripe-checkout'

import uuid from 'uuid/v4'

class Image extends React.Component {
  constructor() {
    super()

    this.onToken = this.onToken.bind(this)
  }

  onToken(token) {
    const amount = 1000
    fetch(`${process.env.LAMBDA_ENDPOINT}purchase.js`, {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify({
        token,
        amount,
        currency: 'gbp',
        idempotency_key: uuid(),
        description: 'ADD PHOTO DETAILS HERE'
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
        requestId: process.env.STRIPE_PUBLISHABLE_KEY
      })
    })
      .then(res => res.json())
      .catch(error => console.error(error))
      .then(response => {
        console.log(response)
      })
  }

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
        <h2>Image</h2>
        <StripeCheckout
          token={this.onToken}
          stripeKey={process.env.STRIPE_PUBLISHABLE_KEY}
        />

        <img src={`${imageUrl}`} className="photo-image" />
      </div>
    )
  }
}

export default Image
