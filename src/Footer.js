import React from 'react';
import styled from 'styled-components';
import {
  Container,
  LeftFooter,
  CenterFooter,
  RightFooter,
  Logo,
  Info,
  SocialMedia,
  SocialMediaIcon,
  Title,
  List,
  CenterItem,
  RightItem,
  Image,
} from './styledComponents/FooterStyles';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PlaceIcon from '@mui/icons-material/Place';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Container>
      <LeftFooter>
        <Logo>
          <Link to="/">
            <img
              style={{
                width: '20vw',
                height: '10vh',
                marginRight: 'auto',
                marginLeft: 'auto',
              }}
              src="../public/solenice.png"
            />
          </Link>
        </Logo>
        <Info>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </Info>
        <SocialMedia>
          <SocialMediaIcon>
            <a href="https://facebook.com">
              <FacebookIcon style={{ color: '#f6e3c5' }} />
            </a>
          </SocialMediaIcon>
          <SocialMediaIcon>
            <a href="https://instagram.com">
              <InstagramIcon style={{ color: '#f6e3c5' }} />
            </a>
          </SocialMediaIcon>
          <SocialMediaIcon>
            <a href="https://twitter.com">
              <TwitterIcon style={{ color: '#f6e3c5' }} />
            </a>
          </SocialMediaIcon>
        </SocialMedia>
      </LeftFooter>
      <CenterFooter>
        <Title>Resources</Title>
        <List>
          <CenterItem>
            <Link style={{ color: '#f6e3c5' }} to="/">
              Home
            </Link>
          </CenterItem>
          <CenterItem>
            <Link style={{ color: '#f6e3c5' }} to="/cart">
              Cart
            </Link>
          </CenterItem>
          <CenterItem>
            <Link style={{ color: '#f6e3c5' }} to="/products">
              All Products
            </Link>
          </CenterItem>
          <CenterItem>
            <Link style={{ color: '#f6e3c5' }} to="/mens">
              Mens
            </Link>
          </CenterItem>
          <CenterItem>
            <Link style={{ color: '#f6e3c5' }} to="/womens">
              Womens
            </Link>
          </CenterItem>
        </List>
      </CenterFooter>
      <RightFooter>
        <Title>Contacts</Title>
        <RightItem>
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            style={{ color: '#f6e3c5', textDecoration: 'none' }}
          >
            <PlaceIcon style={{ marginRight: '5px' }} /> 1 Infinite Loop
          </a>
        </RightItem>
        <RightItem>
          <SmartphoneIcon style={{ marginRight: '5px' }} /> +1 234-567-890
        </RightItem>
        <RightItem>
          <MailIcon style={{ marginRight: '5px' }} /> Contact@GST7.dev
        </RightItem>
        <Image src="http://www.credit-card-logos.com/images/multiple_credit-card-logos-1/credit_card_logos_17.gif"></Image>
      </RightFooter>
    </Container>
  );
};

export default Footer;
