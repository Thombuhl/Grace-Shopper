import React, {useState} from 'react';
import axios from 'axios';
import {CardElement, useElements, useStripe} from "@stripe/stripe-js";


const Payment = () => {
  const [sucess, setSuccess] = useState(false)
  const stripe = useStripe();
  const elements = useElements();


  const handlePayment = async(evt) => {
    evt.preventDefault();
    const [error, paymentMethod] = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)
    })
  }
  return (
    <div></div>
  )
}


export default Payment