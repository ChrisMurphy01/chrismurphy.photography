import React from 'react'

class StripeButton extends React.Component {
  render() {
    return (
      <StripeCheckout
        name="Chris Murphy Photography" // the pop-in header title
        description="Secure payment with Stripe &reg;" // the pop-in header subtitle
        ComponentClass="div"
        panelLabel="Give Money" // prepended to the amount in the bottom pay button
        email="chrismurphy01@gmail.com"
        amount={1000000} // cents
        currency="GBP"
        stripeKey="pk_test_Vah0YUn8xlMmM0SYFKRrXiPP"
        locale="en"
        shippingAddress
        billingAddress={true}
        allowRememberMe // "Remember Me" option (default true)
        token={this.onToken} // submit callback
        reconfigureOnUpdate={false}
      >
        <button className="btn btn-primary">Checkout</button>
      </StripeCheckout>
    )
  }
}

export default StripeButton
