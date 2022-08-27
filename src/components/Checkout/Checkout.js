import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import '../../../public/checkout.css';
import { OrderSummary } from './OrderSummary';
import {
  Container,
  Wrapper,
  FormDiv,
  Form,
  InputDiv,
  Input,
  Button,
  SummaryDiv,
  ContactDiv,
  ShippingDiv,
  DeliveryDiv,
  NewsletterDiv,
  Title,
  Info,
} from '../../styledComponents/CheckoutStyles';
import Footer from '../../Footer';

// TODO:
//   Redirect User to Review & Pay route on click

const Checkout = () => {
  const user = useSelector((state) => state.auth);
  const userCart = useSelector((state) => state.cart);
  const [shippingMethod, setShipingMethod] = useState({
    shippingMethod: 'notPriority',
  });
  const [shippingInfo, setShipingInfo] = useState({
    email: '',
    firstName: '',
    lastName: '',
    addressStreet: '',
    addressCity: '',
    addressState: '',
    addressZip: '',
    addressUnit: '',
    shipping: '',
    isBillingMailingEqual: true,
    isValidAge: false,
    newsLetter: true,
    discountCode: '',
  });

  const onChange = (ev) => {
    setShipingInfo({ ...shippingInfo, [ev.target.name]: ev.target.value });
  };

  const reviewAndPay = (e) => {
    e.preventDefault();
    // Takes us to the payment page
    // props.history.push('/checkout/payment')
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(shippingMethod);
    setShipingMethod({ [name]: value });
  };

  useEffect(() => {
    setShipingInfo({ ...shippingInfo, ...user });
  }, [user, userCart]);

  return (
    <Container>
      <Wrapper>
        <SummaryDiv>
          <OrderSummary />
        </SummaryDiv>
        <FormDiv>
          <Form onSubmit={reviewAndPay}>
            <ContactDiv>
              <Title>Contact Details</Title>
              <Info style={{ textAlign: 'center' }}>
                We'll keep you updated via Email!
              </Info>
              <InputDiv>
                <Input
                  type="email"
                  placeholder="Example@Email.com *"
                  name="email"
                  value={shippingInfo.email}
                  onChange={onChange}
                />
              </InputDiv>
            </ContactDiv>
            <ShippingDiv>
              <Title>Shipping Address</Title>
              <InputDiv>
                <Input
                  type="text"
                  placeholder="First Name *"
                  name="firstName"
                  value={shippingInfo.firstName}
                  onChange={onChange}
                />
                <Input
                  type="text"
                  placeholder="Last Name *"
                  name="lastName"
                  value={shippingInfo.lastName}
                  onChange={onChange}
                />
                <Input
                  type="text"
                  placeholder="Street Address, PO Box *"
                  name="addressStreet"
                  value={shippingInfo.addressStreet}
                  onChange={onChange}
                />
                <Input
                  type="text"
                  placeholder="Apartment/Unit (optional)"
                  name="addressUnit"
                  value={shippingInfo.addressUnit}
                  onChange={onChange}
                />
                <Input
                  type="text"
                  placeholder="City/Town *"
                  name="addressCity"
                  value={shippingInfo.addressCity}
                  onChange={onChange}
                />
                <Input
                  type="text"
                  placeholder="State *"
                  name="addressState"
                  value={shippingInfo.addressState}
                  onChange={onChange}
                />
                <Input
                  type="text"
                  placeholder="Zip Code *"
                  name="addressZip"
                  value={shippingInfo.addressZip}
                  onChange={onChange}
                />
              </InputDiv>
            </ShippingDiv>
            <DeliveryDiv>
              <Title>Delivery Options:</Title>
              <InputDiv>
                <Input
                  onChange={handleChange}
                  type="radio"
                  name="shippingMethod"
                  value="notPriority"
                  checked={shippingMethod.shippingMethod === 'notPriority'}
                />
                <p>Standard (3-5 Business days)</p>
                <Input
                  onChange={handleChange}
                  type="radio"
                  name="shippingMethod"
                  value="priority"
                />
                <p>Express (1-2 Business days)</p>
                <Input
                  onChange={handleChange}
                  type="radio"
                  name="shippingMethod"
                  value="pickUp"
                />
                <p>In-store Pick-up</p>
              </InputDiv>
            </DeliveryDiv>
            <InputDiv>
              <label htmlFor="">
                <input
                  type="checkbox"
                  checked={shippingInfo.isBillingMailingEqual}
                  onChange={() => {
                    setShipingInfo({
                      ...shippingInfo,
                      isBillingMailingEqual:
                        !shippingInfo.isBillingMailingEqual,
                    });
                  }}
                />{' '}
                Billing and Shipping are the same
              </label>
            </InputDiv>
            <InputDiv>
              <label htmlFor="">
                <input
                  type="checkbox"
                  checked={shippingInfo.isValidAge}
                  onChange={() => {
                    setShipingInfo({
                      ...shippingInfo,
                      isValidAge: !shippingInfo.isValidAge,
                    });
                  }}
                />{' '}
                I'm 13+ years old *
              </label>
            </InputDiv>
            <InputDiv>
              <h5>Also want product updates with our newsletter?</h5>
              <label htmlFor="">
                {' '}
                <input
                  type="checkbox"
                  checked={shippingInfo.newsLetter}
                  onChange={() => {
                    setShipingInfo({
                      ...shippingInfo,
                      newsLetter: !shippingInfo.newsLetter,
                    });
                  }}
                />{' '}
                Yes, I'd like to receive emails about exclusive sales and more
              </label>
            </InputDiv>
            <InputDiv>
              <Button
                disabled={
                  !shippingInfo.isValidAge ||
                  !shippingInfo.addressStreet ||
                  !shippingInfo.addressCity ||
                  !shippingInfo.addressState ||
                  !shippingInfo.addressZip
                }
              >
                Review and Pay
              </Button>
            </InputDiv>
          </Form>
        </FormDiv>
      </Wrapper>
    </Container>
  );
};

export default Checkout;
