import React from 'react'
import { all } from '../components/Images'
import StripeCheckout from 'react-stripe-checkout'
import StripeButton from '../components/StripeButton'

import uuid from 'uuid/v4'

class Image extends React.Component {
  constructor() {
    super()

    this.onToken = this.onToken.bind(this)
  }

  onToken(token) {
    console.log({ token })
    console.log(`${process.env.LAMBDA_ENDPOINT}purchase`)
    const amount = 1000
    fetch(`${process.env.LAMBDA_ENDPOINT}purchase`, {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify({
        token,
        amount,
        idempotency_key: uuid()
      }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
      .then(res => res.json())
      .catch(error => console.error(error))
      .then(response => {
        let message =
          typeof response === 'object' && response.status === 'succeeded'
            ? 'Charge was successful!'
            : 'Charge failed.'

        console.log({ message })
        console.log(response)
      })

    // fetch('/save-stripe-token', {
    //   method: 'POST',
    //   body: JSON.stringify(token),
    // }).then(response => {
    //   response.json().then(data => {
    //     alert(`We are in business, ${data.email}`);
    //   });
    // });
  }

  // handleOnClick(e) {
  //   const amount = 1000
  //   // const $messageBox = document.getElementById('messageBox');
  //   // const $button = document.querySelector('button');

  //   const handler = StripeCheckout.configure({
  //     key: process.env.STRIPE_PUBLISHABLE_KEY,
  //     image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
  //     locale: 'auto',
  //     // closed: function() {
  //     //   resetButtonText()
  //     // },
  //     token: function(token) {
  //       fetch(`${process.env.LAMBDA_ENDPOINT}purchase`, {
  //         method: 'POST',
  //         body: JSON.stringify({
  //           token,
  //           amount,
  //           idempotency_key: uuid()
  //         }),
  //         headers: new Headers({
  //           'Content-Type': 'application/json'
  //         })
  //       })
  //         .then(res => res.json())
  //         .catch(error => console.error(error))
  //         .then(response => {
  //           let message =
  //             typeof response === 'object' && response.status === 'succeeded'
  //               ? 'Charge was successful!'
  //               : 'Charge failed.'

  //           console.log({ message })
  //           console.log(response)
  //         })
  //     }
  //   })

  //   handler.open({
  //     amount,
  //     name: 'Test Shop',
  //     description: 'A Fantastic New Widget'
  //   })
  // }

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

        <button onClick={this.handleOnClick}>buy</button>
        <img src={`f${imageUrl}`} />
      </div>
    )
  }
}

export default Image
