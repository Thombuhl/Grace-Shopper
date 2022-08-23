import React from 'react'
import { useSelector } from 'react-redux'
import '../../../public/checkout.css'

const Checkout = (props) => {
  const userCart = useSelector(state => state.cart)
  const cartTotal = userCart.lineItems.reduce((accum, item)=>{
    return accum += (item.product.price * item.quantity)
  }, 0).toFixed(2)
  const totalItems = userCart.lineItems.reduce((accum, item)=>{
    return accum += item.quantity 
  }, 0)
  const delivery = (cartTotal > 150 ? 0 : .05 * cartTotal).toFixed(2)
  const tax = (.04 * cartTotal).toFixed(2)
  const finalPrice = (cartTotal*1 + delivery*1 + tax*1).toFixed(2) 

  const reviewAndPay = (e)=> {
    e.preventDefault()
    console.log(props.history.push('/checkout/payment'))
  }

  return (
    <div className='checkout-component'>
      <form onSubmit={reviewAndPay}>
        {/* <a href="">LOGIN & CHECKOUT FASTER</a> */}
        <div>
          <h3>Contact Details</h3>
          <p>We'll use these details to keep you informed on your delivery.</p>
          <input type="text" placeholder='Email *'/>
        </div>
        <h3>Shipping Address</h3>
        <div>
          <input type="text" placeholder='First Name *' />
          <input type="text" placeholder='Last Name *' />
        </div>
        <div>
          <input type="text" placeholder='Street Address, PO Box *'/>
        </div>
        <div>
          <input type="text" placeholder='Apartment/Unit (optional)'  />
        </div>
        <div>
          <input type="text" placeholder='City/Town *' />
          <input type="text" placeholder='State *' />
        </div>
        <div>
          <input type="text" placeholder='Zip Code *' />
        </div>
        <h6>Country: USA</h6>
        <h2>Delivery Option [?]</h2>
        <label htmlFor="">Standard  <input type="radio" name='shipping' className='shipping'/><p>3-5 bussiness day</p></label>
        <label htmlFor="">Express <input type="radio" name='shipping' className='shipping'/><p>24 hour</p></label>
        <label htmlFor="">Pickup  <input type="radio" name='shipping' className='shipping'/><p>Pick it up in our store</p></label>
        <label htmlFor=""><input type="checkbox" /> My billing and delivery information are the same</label>
        <label htmlFor=""><input type="checkbox" /> I'm 13+ years old *</label>
        <h5>Also want product updates with our newsletter?</h5>
        <label htmlFor=""> <input type="checkbox" /> Yes, I'd like to receive emails about exclusive sales and more</label>
        <button>Review and Pay</button>
      </form>
        <div>
          <h5>Order Summary</h5>
          <p>{ totalItems } Items ${ cartTotal }</p>
          <p>DELIVERY: ${ delivery }
          </p>
          <p>Sales Tax: ${ tax }</p>
          <h5>TOTAL ${ finalPrice }</h5>
          <input type="text" placeholder='Enter your promo code'/>
          <button>+</button>
          <div>
            <h5>Order Details</h5>
            {
              userCart.lineItems.map( item => (
                <li key={item.id} className='flex-row'>
                  <img src={item.product.imageLocation} alt="product" width='30%' />
                  <div>
                    <p>{item.product.name}</p>
                    <p>{item.product.colorway}</p>
                    <p>SIZE: {item.product.size} / QTY: {item.quantity}</p>
                    <p>${item.product.price}</p>
                  </div>
                </li>
              ))
            }
          </div>
          <h6>ACCEPTED PAYMENT METHODS</h6>
          <div>
            <img src="" alt="MasterCard Icon" />
            <img src="" alt="AMEX Icon" />
            <img src="" alt="Visa Icon" />
          </div>
        </div>
    </div>
  )
}

export default Checkout