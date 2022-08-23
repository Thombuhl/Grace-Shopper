import React from 'react'
import { useSelector } from 'react-redux'
import '../../../public/checkout.css'

const Checkout = () => {
  const userCart = useSelector(state => state.cart)
  console.log(userCart)

  const total = userCart.lineItems.reduce((accum, item)=>{
    return accum += (item.product.price * item.quantity)
  }, 0)

  return (
    <div className='component'>
      <a href="">LOGIN and CHECKOUT FASTER</a>
      <form action="">
        <h3>Contact Details</h3>
        <p>We'll use these details to keep you informed on your delivery.</p>
        <input type="text" placeholder='Email *' className='checkout-input'/>
        <h3>Contact Details</h3>
        <div>
          <input type="text" placeholder='First Name *' />
          <input type="text" placeholder='Last Name *' />
        </div>
        <input type="text" placeholder='Street Address, PO Box *' />
        <input type="text" placeholder='Apartment/Unit (optional)' />
        <div>
          <input type="text" placeholder='City/Town *' />
          <input type="text" placeholder='State *' />
        </div>
        <input type="text" placeholder='Zip Code *' />
        <h4>Country: USA</h4>
        <h2>Delivery Option</h2>
        <input type="radio" name='shipping' /><label htmlFor="">Standard</label>
        <input type="radio" name='shipping' /><label htmlFor="">Express</label>     
        <input type="checkbox" /> <label htmlFor="">My billing and delivery information are the same</label>
        <input type="checkbox" /> <label htmlFor="">I'm 13+ years old *</label>
        <h5>Also want product updates with our newsletter?</h5>
        <input type="checkbox" /> <label htmlFor="">Yes, I'd like to receive emails about exclusive sales and more</label>
        <button>Review and Pay</button>
      </form>
    </div>
  )
}

export default Checkout