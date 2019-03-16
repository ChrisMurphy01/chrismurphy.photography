import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

import uuid from 'uuid/v4'

class Checkout extends React.Component {
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
      .then(res => {
        console.log('res', res)
        res.json()
      })
      .catch(error => console.log(error))
      .then(response => {
        console.log(response)
      })
  }
  render() {
    return (
      <StripeCheckout
        token={this.onToken}
        stripeKey={process.env.STRIPE_PUBLISHABLE_KEY}
      />
    )
  }
}

export default Checkout
