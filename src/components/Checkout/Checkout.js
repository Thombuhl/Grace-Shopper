import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import '../../../public/checkout.css'
import { OrderSummary } from './OrderSummary'

// TODO:
//   Redirect User to Review & Pay route on click


const Checkout = () => {
  const user = useSelector(state => state.auth)
  const userCart = useSelector(state => state.cart) 
  const [shippingMethod, setShipingMethod] = useState({shippingMethod: 'notPriority'})
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
    isValidAge: false,
    newsLetter: true,
    discountCode: '',
  })

  const onChange = (ev) => {
    setShipingInfo({...shippingInfo, [ev.target.name]: ev.target.value });
  };

  const reviewAndPay = (e)=> {
    e.preventDefault()
    // Takes us to the payment page
    // props.history.push('/checkout/payment')
  }
  
  const handleChange = (e)=> {
    const {name, value } = e.target
    console.log(shippingMethod)
    setShipingMethod({ [name]:value })
  }
  
  useEffect(()=>{
    setShipingInfo({...shippingInfo, ...user})
  },[user, userCart])
  
  return (
    <div className='checkout-component'>
      <form onSubmit={reviewAndPay} >
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
          <input type="text" placeholder='Street Address, PO Box *' name='addressStreet' value={shippingInfo.addressStreet} onChange={onChange}/>
        </div>
        <div>
          <label htmlFor="">Unit:</label>
          <input type="text" placeholder='Apartment/Unit (optional)' name='addressUnit' value={shippingInfo.addressUnit} onChange={onChange}/>
        </div>
        <div>
          <label htmlFor="">City: </label>
          <input type="text" placeholder='City/Town *' name='addressCity' value={shippingInfo.addressCity} onChange={onChange}/>
          <label htmlFor="">State: </label>
          <input type="text" placeholder='State *' name='addressState' value={shippingInfo.addressState} onChange={onChange}/>
        </div>
        <div>
          <label htmlFor="">Zip: </label>
          <input type="text" placeholder='Zip Code *' name='addressZip' value={shippingInfo.addressZip} onChange={onChange}/>
        </div>
        <h6>Country: USA</h6>
        <h2>Delivery Option [?]</h2>
        <label htmlFor="">Standard  <input onChange={handleChange} type="radio" name='shippingMethod' className='shipping' value='notPriority' checked={shippingMethod.shippingMethod === 'notPriority'}/><p>3-5 bussiness day</p></label>
        <label htmlFor="">Express <input onChange={handleChange} type="radio" name='shippingMethod' className='shipping' value='priority'/><p>24 hour</p></label>
        <label htmlFor="">Pickup  <input onChange={handleChange} type="radio" name='shippingMethod' className='shipping'value='pickUp'/><p>Pick it up in our store</p></label>
        <label htmlFor=""><input type="checkbox" checked={shippingInfo.isBillingMailingEqual} onChange={()=>{setShipingInfo({...shippingInfo, isBillingMailingEqual: !shippingInfo.isBillingMailingEqual})}}/> My billing and delivery information are the same</label>
        <label htmlFor=""><input type="checkbox" checked={shippingInfo.isValidAge} onChange={()=>{setShipingInfo({...shippingInfo, isValidAge: !shippingInfo.isValidAge})}}/> I'm 13+ years old *</label>
        <h5 >Also want product updates with our newsletter?</h5>
        <label htmlFor=""> <input type="checkbox" checked={shippingInfo.newsLetter} onChange={()=>{setShipingInfo({...shippingInfo, newsLetter: !shippingInfo.newsLetter})}}/> Yes, I'd like to receive emails about exclusive sales and more</label>
        <button disabled={ !shippingInfo.isValidAge || !shippingInfo.addressStreet || !shippingInfo.addressCity || !shippingInfo.addressState || !shippingInfo.addressZip }>Review and Pay</button>
      </form>
      <OrderSummary />
  </div>
  )
}

export default Checkout
