import axios from 'axios'
import React from 'react'
import { useSelector } from 'react-redux'
import './checkout.css'

const Checkout = () => {
  const userCart = useSelector(state => state.cart)
  console.log(userCart)

  const checkoutCart = async(e) => {
    e.preventDefault()
    // logic to checkout a cart
  }

  return (
    <div>
      CHECKOUT 
      <ol>
        {
          userCart.lineItems.map( item => {
            return (
              <li key={item.id}>
                <h3>{ item.product.name }</h3>
                <h4>{ item.product.colorway }</h4>
                <h5>QTY: { item.quantity }</h5>
                <img src={item.product.imageLocation} alt='item' width='20%'/>
              </li>
            )
          })
        }
      </ol>
      <form onSubmit={checkoutCart}>
        <input type="text" placeholder='DISCOUNT CODE' />
        <button> CHECKOUT</button>
      </form>
    </div>
  )
}

export default Checkout