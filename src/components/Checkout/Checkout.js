import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../../../public/checkout.css'

const Checkout = (props) => {
  const dispatch = useDispatch( )
  const user = useSelector(state => state.auth)
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
  const [ shippingInfo, setShipingInfo ] = useState({
    email: '',
    firstName: '',
    lastName: '',
    addressStreet: '',
    addressCity: '',
    addressState: '',
    addressZip: '',
    addressUnit: '',
    shipping:'',
    isBillingMailingEqual: true,
    isValidAge: true,
    newsLetter: true
  })

  const onChange = (ev) => {
    setShipingInfo({...shippingInfo, [ev.target.name]: ev.target.value });
  };

  useEffect(()=>{
    setShipingInfo({...shippingInfo, ...user})
    console.log('-------------', user)
  },[user])
  console.log('//////////////', shippingInfo)
  
  const reviewAndPay = (e)=> {
    e.preventDefault()
    console.log(shippingInfo)
    // props.history.push('/checkout/payment')
  }

  
  return (
    <div className='checkout-component'>
      <form onSubmit={reviewAndPay} >
        {/* <a href="">LOGIN & CHECKOUT FASTER</a> */}
        <div>
          <h3>Contact Details</h3>
          <p>We'll use these details to keep you informed on your delivery.</p>
          <label htmlFor="">Email:</label>
          <input type="text" placeholder='Email *' name='email' value={shippingInfo.email} onChange={onChange}/>
        </div>
        <h3>Shipping Address</h3>
        <div>
          <label htmlFor="">First Name:</label>
          <input type="text" placeholder='First Name *' name='firstName' value={shippingInfo.firstName} onChange={onChange}/>
          <label htmlFor="">Last Name:</label>
          <input type="text" placeholder='Last Name *' name='lastName' value={shippingInfo.lastName} onChange={onChange}/>
        </div>
        <div>
          <label htmlFor="">Street Name</label>
          <input type="text" placeholder='Street Address, PO Box *' name='streetName' value={shippingInfo.addressStreet} onChange={onChange}/>
        </div>
        <div>
          <label htmlFor="">Unit:</label>
          <input type="text" placeholder='Apartment/Unit (optional)' name='unit' value={shippingInfo.addressUnit} onChange={onChange}/>
        </div>
        <div>
          <label htmlFor="">City: </label>
          <input type="text" placeholder='City/Town *' name='city' value={shippingInfo.addressCity} onChange={onChange}/>
          <label htmlFor="">State: </label>
          <input type="text" placeholder='State *' name='state' value={shippingInfo.addressState} onChange={onChange}/>
        </div>
        <div>
          <label htmlFor="">Zip: </label>
          <input type="text" placeholder='Zip Code *' name='zip' value={shippingInfo.addressZip} onChange={onChange}/>
        </div>
        <h6>Country: USA</h6>
        <h2>Delivery Option [?]</h2>
        <label htmlFor="">Standard  <input type="radio" name='shipping' className='shipping'/><p>3-5 bussiness day</p></label>
        <label htmlFor="">Express <input type="radio" name='shipping' className='shipping'/><p>24 hour</p></label>
        <label htmlFor="">Pickup  <input type="radio" name='shipping' className='shipping'/><p>Pick it up in our store</p></label>
        <label htmlFor=""><input type="checkbox" checked={shippingInfo.isBillingMailingEqual} onClick={()=>{setShipingInfo({...shippingInfo, isBillingMailingEqual: !shippingInfo.isBillingMailingEqual})}}/> My billing and delivery information are the same</label>
        <label htmlFor=""><input type="checkbox" checked={shippingInfo.isValidAge} onClick={()=>{setShipingInfo({...shippingInfo, isValidAge: !shippingInfo.isValidAge})}}/> I'm 13+ years old *</label>
        <h5 >Also want product updates with our newsletter?</h5>
        <label htmlFor=""> <input type="checkbox" checked={shippingInfo.newsLetter} onClick={()=>{setShipingInfo({...shippingInfo, newsLetter: !shippingInfo.newsLetter})}}/> Yes, I'd like to receive emails about exclusive sales and more</label>
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