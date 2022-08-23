import React from 'react';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from '@stripe/react-stripe-js'
import PaymentForm from './CheckoutForm'

const appearance = {
  theme: 'night'
};
const PUBLIC_KEY = 'pk_test_51LZ1KkHgH8V7eWW5V4ceMly9B4Zc4zJSTKxzguMRjDmSJvtl9RvHKKkXVnL3JikPnByU24ZuSftSpH3qqfI1c1b400EeOX1V0O'

const stripePromise = loadStripe(PUBLIC_KEY, appearance)


const StripeContainer = () => {
  return (
    <Elements stripe={stripePromise}>
        <PaymentForm/>
    </Elements>
  )
}


export default StripeContainer