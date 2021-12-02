import React from "react";
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StrikeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51Ju3g2GI0LrNDd71qSqavYBV2MMdYKZ2DAVXif4156zjMAWG53DlOrlE75cMD2cmY0UbqdJsgX4E0LAIL3yVQBfL00m4ov00kU';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => {
      alert('Payment successful!')
    }).catch(error => {
      console.log('Payment error: ', JSON.parse(error));
      alert(
        'There was an issue with your payment. Please make sure you use the provided credit card.'
      )
    })
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='CROWN Clothing Ltd.'
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
};

export default StrikeCheckoutButton;