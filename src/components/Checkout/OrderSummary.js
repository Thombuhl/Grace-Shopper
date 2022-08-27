import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { applyDiscount } from '../../store';
import styled from 'styled-components';
export const Image = styled.img``;
import StripeContainer from '../../stripe/StripeContainer';

export const OrderSummary = () => {
  const dispatch = useDispatch();
  const userCart = useSelector((state) => state.cart);
  const cartItems = userCart.lineItems.reduce((accum, item) => {
    return (accum += item.quantity);
  }, 0);
  const cartTotal = userCart.lineItems
    .reduce((accum, item) => {
      return (accum += item.product.price * item.quantity);
    }, 0)
    .toFixed(2);
  const deliveryFee = (cartTotal > 150 ? 0 : 0.05 * cartTotal).toFixed(2);
  const taxFee = (0.04 * cartTotal).toFixed(2);
  const [discountInfo, setDiscountInfo] = useState({
    discountCode: '',
    discountAmount: userCart.discountAmount || 0,
    discountValue: '',
  });
  const cartTotalPrice = (cartTotal * 1 + deliveryFee * 1 + taxFee * 1).toFixed(
    2
  );
  const totalAfterDiscount =
    discountInfo.discountAmount < 1
      ? cartTotalPrice - cartTotalPrice * discountInfo.discountAmount
      : cartTotalPrice - discountInfo.discountAmount;

  const onChange = (ev) => {
    console.log(discountInfo);
    setDiscountInfo({ ...discountInfo, [ev.target.name]: ev.target.value });
  };

  useEffect(() => {
    console.log(discountInfo, userCart);
    setDiscountInfo({
      ...discountInfo,
      discountAmount: userCart.discountAmount,
    });
  }, [userCart]);

  const fetchDiscount = async (e) => {
    e.preventDefault();
    dispatch(applyDiscount(discountInfo.discountCode));
  };

  return (
    <div>
      <h5>Order Summary</h5>
      <p>
        {cartItems} Items ${cartTotal}
      </p>
      <p>DELIVERY: ${deliveryFee}</p>
      <p>Sales Tax: ${taxFee}</p>
      {totalAfterDiscount < cartTotalPrice ? (
        <p>
          Discount:{' '}
          {discountInfo.discountAmount < 1 ? (
            <strong>-{discountInfo.discountAmount * 100}%</strong>
          ) : (
            <strong>-${discountInfo.discountAmount}</strong>
          )}
        </p>
      ) : null}
      <h5>TOTAL ${totalAfterDiscount ? totalAfterDiscount : cartTotalPrice}</h5>
      <input
        type="text"
        placeholder="Enter your promo code"
        name="discountCode"
        value={discountInfo.discountCode}
        onChange={onChange}
      />
      <button onClick={fetchDiscount}>+</button>
      <br></br>
      <br></br>
      <div>
        <h5>Order Details</h5>
        {userCart.lineItems.map((item) => (
          <li key={item.id} className="flex-row">
            <img
              style={{ width: '30%', marginRight: '40px' }}
              src={item.product.imageLocation}
              alt="product"
              width="30%"
            />
            <div>
              <p>{item.product.name}</p>
              <p>{item.product.colorway}</p>
              <p>
                SIZE: {item.product.size} / QTY: {item.quantity}
              </p>
              <p>${item.product.price}</p>
            </div>
          </li>
        ))}
      </div>
      <br></br>
      <br></br>
      <h6>ACCEPTED PAYMENT METHODS</h6>
      <div>
        <Image
          style={{ marginBottom: '30px' }}
          src="http://www.credit-card-logos.com/images/multiple_credit-card-logos-1/credit_card_logos_17.gif"
        ></Image>
      </div>
      <StripeContainer />
    </div>
  );
};
