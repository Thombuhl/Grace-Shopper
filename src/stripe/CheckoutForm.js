import React, { useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

const CARD_OPTIONS = {};

const PaymentForm = ({ cart }) => {
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  let totalAmountOfCart = 0;

  cart.lineItems.forEach((lineItem) => {
    let quantity = lineItem.quantity;
    let price = lineItem.product.price;
    if (quantity && price) {
      let lineItemCost = price * quantity;
      totalAmountOfCart = lineItemCost + totalAmountOfCart;
    }
  });

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post('/api/orders/create-payment-intent', {
          amount: (totalAmountOfCart * 0.04 + 25 + totalAmountOfCart) * 100,
          id,
        });

        if (response.data.success) {
          console.log('confirmed');
          setSuccess(true);
        }
      } catch (error) {
        console.log('There was an error', error);
      }
    } else {
      console.log(error);
    }
  };

  return (
    <>
      {!success ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <form
            style={{
              width: '50vw',
              height: '20vh',
              border: '1px solid black',
              borderRadius: '12px',
              backgroundColor: '#53bf9d',
            }}
            onSubmit={handleSubmit}
          >
            <fieldset className="FormGroup"></fieldset>
            <div style={{ fontWeight: 900 }} className="FormRow">
              <CardElement options={CARD_OPTIONS} />
            </div>
            <button
              style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                padding: '10px',
                width: '20%',
                backgroundColor: '#f6e3c5',
                color: '#53bf9d',
                borderRadius: '12px',
                border: 'none',
                fontWeight: 900,
              }}
            >
              Pay
            </button>
          </form>
        </div>
      ) : (
        <div>
          <h2>You Bought something</h2>
        </div>
      )}
    </>
  );
};

const mapStateToProps = ({ cart }) => {
  return {
    cart,
  };
};

export default connect(mapStateToProps, null)(PaymentForm);
