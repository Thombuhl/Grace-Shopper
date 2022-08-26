import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

export const OrderSummary = () => {

  const dispatch = useDispatch( )

  const user = useSelector(state => state.auth)
  const userCart = useSelector(state => state.cart) 
  
  const cartItems = userCart.lineItems.reduce((accum, item)=>{
    return accum += item.quantity 
  }, 0)
  const cartTotal = userCart.lineItems.reduce((accum, item)=>{
    return accum += (item.product.price * item.quantity)
  }, 0).toFixed(2)
  
  const deliveryFee = (cartTotal > 150 ? 0 : .05 * cartTotal).toFixed(2)
  const taxFee = (.04 * cartTotal).toFixed(2)
  
  const [shippingMethod, setShipingMethod] = useState({})
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
    newsLetter: true,
    discountCode: '',
  })

  const [discountAmount, setDiscountAmount] = useState(userCart.discountAmount)
  const finalPrice = ((cartTotal*1 + deliveryFee*1 + taxFee*1).toFixed(2))
  const finalDiscount = discountAmount < 1 ?
    finalPrice - finalPrice * discountAmount :
    finalPrice - discountAmount

  const onChange = (ev) => {
    setShipingInfo({...shippingInfo, [ev.target.name]: ev.target.value });
  };

  useEffect(()=>{
    // setShipingInfo({...shippingInfo, ...user})
    setDiscountAmount(userCart.discountAmount)
  },[user, userCart])
  
  
  const reviewAndPay = (e)=> {
    e.preventDefault()
    // props.history.push('/checkout/payment')
  }

  const handleChange = (e)=> {
    const {name, value } = e.target
    setShipingMethod({ [name]:value })
  }

  const fetchDiscount = async(e)=> {
    e.preventDefault()
    dispatch(applyDiscount(shippingInfo.discountCode))
  }

  return (
    <div>
      <h5>Order Summary</h5>
      <p>{ cartItems } Items ${ cartTotal }</p>
      <p>DELIVERY: ${ deliveryFee }
      </p>
      <p>Sales Tax: ${ taxFee }</p>
      {
        finalDiscount 
          ? <p>BEFORE: ${ finalPrice } { discountAmount < 1 ? <strong>-{discountAmount*100}%</strong> : <strong>-{discountAmount}</strong> }</p>
          : null
      }
      <h5>TOTAL ${ finalDiscount ? finalDiscount : finalPrice}</h5>
      <input type="text" placeholder='Enter your promo code' name='discountCode'value={shippingInfo.discountCode} onChange={onChange}/>
      <button onClick={fetchDiscount} >+</button>
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
  )
}
