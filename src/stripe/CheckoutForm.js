import React, {useState} from 'react';
import axios from 'axios';
import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js"

const CARD_OPTIONS = {

}


const PaymentForm = () => {
  const [success, setSuccess] = useState(false)
  const stripe = useStripe();
  const elements = useElements();


  const handleSubmit = async(evt) => {
    evt.preventDefault();
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)
    })

    if(!error) {
      try {
        const {id} = paymentMethod
        const response = await axios.post('/api/orders/checkout', {
          amount: 1000, 
          id
        })
          
        if(response.data.success) {
          console.log("confirmed")
          setSuccess(true)
      }
      } catch (error) {
        console.log('There was an error', error)
      }

    } else {
      console.log(error)
    }
}
  return (
    <>
    {!success ? 
        <form onSubmit={handleSubmit}>
          <fieldset className='FormGroup'></fieldset>
          <div className="FormRow">
            <CardElement options={CARD_OPTIONS}/>
          </div>
          <fieldset>
            <button>Pay</button>
          </fieldset>
        </form>
        : <div>
          <h2>You Bought something</h2>
        </div>
    }
    </>
  )
}


export default PaymentForm