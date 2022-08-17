import React from "react";
import styled from "styled-components";
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
} from "./styledComponents/FooterStyles";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import MailIcon from "@mui/icons-material/Mail";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container>
      <LeftFooter>
        <Logo>GST7</Logo>
        <Info>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Info>
        <SocialMedia>
          <SocialMediaIcon>
            <FacebookIcon />
          </SocialMediaIcon>
          <SocialMediaIcon>
            <InstagramIcon />
          </SocialMediaIcon>
          <SocialMediaIcon>
            <TwitterIcon />
          </SocialMediaIcon>
        </SocialMedia>
      </LeftFooter>
      <CenterFooter>
        <Title>Resources</Title>
        <List>
          <CenterItem>
            <Link style={{ color: "black" }} to="/">
              Home
            </Link>
          </CenterItem>
          <CenterItem>
            <Link style={{ color: "black" }} to="/cart">
              Cart
            </Link>
          </CenterItem>
          <CenterItem>
            <Link style={{ color: "black" }} to="/mens">
              Mens
            </Link>
          </CenterItem>
          <CenterItem>
            <Link style={{ color: "black" }} to="/womens">
              Womens
            </Link>
          </CenterItem>
          <CenterItem>
            <Link style={{ color: "black" }} to="/unisex">
              Unisex
            </Link>
          </CenterItem>
        </List>
      </CenterFooter>
      <RightFooter>
        <Title>Contacts</Title>
        <RightItem>
          <PlaceIcon style={{ marginRight: "5px" }} /> 1 Infinite Loop
        </RightItem>
        <RightItem>
          <SmartphoneIcon style={{ marginRight: "5px" }} /> +1 234-567-890
        </RightItem>
        <RightItem>
          <MailIcon style={{ marginRight: "5px" }} /> Contact@GST7.dev
        </RightItem>
        <Image src="http://www.credit-card-logos.com/images/multiple_credit-card-logos-1/credit_card_logos_17.gif"></Image>
      </RightFooter>
    </Container>
  );
};

export default Footer;
