import React from 'react'
import StripeCheckout from  'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;

    const publishableKey='pk_test_51I5LqRG1UqtjPPuBbsYEKeKuSZGdwoMgX4e3Ij545wfCgHvUXG0P4SLmIsketidb2Xm3xeuiLUFbrKUCPmLLJ2r200mvsqRcG6'

    const onToken = token => {
        console.log(token)
        alert('Payment successful!')
    }

    return (

        <StripeCheckout 
            label='Take My Money!'
            name='CRWN Clothing Ltd'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/.CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Gimme the cash!!'
            token={onToken}
            stripeKey={publishableKey}
        />

    )
}

export default StripeCheckoutButton