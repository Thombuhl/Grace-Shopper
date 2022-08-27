/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import { logout, exchangeToken, fetchCart } from './store';
import {
  Container,
  Wrapper,
  LeftNav,
  LeftNavItem,
  CenterNav,
  RightNav,
  RightNavItem,
  Logo,
} from './styledComponents/NavStyles';
import Search from './Search';
import auth from './store/auth';

class Nav extends Component {
  componentDidMount() {
    this.props.exchangeToken();
  }
  componentDidUpdate() {
    this.props.fetchCart();
  }

  render() {
    const { auth, logout, fetchCart, cart } = this.props;
    return (
      <div>
        <Container>
          <Wrapper>
            <LeftNav className="menu">
              <LeftNavItem className="menu-item">
                <div className="dropdown">
                  <button className="dropdown-btn left-menu-button">
                    <Link style={{ color: '#f6e3c5' }} to="/products">
                      Shop All
                    </Link>
                  </button>
                  <div className="dropdown-content">
                    <a href="#">Link 1</a>
                  </div>
                </div>
              </LeftNavItem>
              <LeftNavItem className="menu-item">
                <div className="dropdown">
                  <button className="dropdown-btn left-menu-button">
                    <Link style={{ color: '#f6e3c5' }} to="/mens">
                      Mens
                    </Link>
                  </button>
                  <div className="dropdown-content">
                    <a href="#">Link 1</a>
                  </div>
                </div>
              </LeftNavItem>
              <LeftNavItem className="menu-item">
                <div className="dropdown">
                  <button className="dropdown-btn left-menu-button">
                    <Link style={{ color: '#f6e3c5' }} to="/womens">
                      Womens
                    </Link>
                  </button>
                  <div className="dropdown-content">
                    <a href="#">Link 1</a>
                  </div>
                </div>
              </LeftNavItem>
            </LeftNav>
            <CenterNav>
              <Logo>
                <Link className="links" to="/">
                  <img
                    style={{ width: '6vw', height: '6vh' }}
                    src="../public/solenice.png"
                  />
                </Link>
              </Logo>
            </CenterNav>
            <RightNav>
              {auth.id ? (
                <div className="dropdown">
                  <button
                    className="dropdown-btn left-menu-button"
                    style={{ background: 'none', border: 'none' }}
                  >
                    <Link
                      className="dropdown-btn left-menu-button"
                      style={{ color: '#f6e3c5' }}
                      to="/"
                    >
                      Welcome {auth.firstName}
                      <img
                        style={{
                          borderRadius: '50%',
                          marginLeft: '10px',
                        }}
                        src={auth.profileImage}
                      ></img>
                    </Link>
                  </button>
                  <div className="dropdown-content">
                    <Link to="/account">My Account</Link>
                    <Link onClick={logout} to="/">
                      Logout
                    </Link>
                  </div>
                </div>
              ) : (
                <div>
                  <RightNav>
                    <RightNavItem>
                      <Link className="links" to="/login">
                        Login
                      </Link>
                    </RightNavItem>
                    <RightNavItem>
                      <Link className="links" to="/signup">
                        SignUp
                      </Link>
                    </RightNavItem>
                  </RightNav>
                </div>
              )}
              <RightNavItem>
                <Link className="links" to="/cart">
                  <IconButton onClick={fetchCart} aria-label="cart">
                    <Badge
                      badgeContent={cart.lineItems ? cart.lineItems.length : 0}
                      showZero
                      color="primary"
                    >
                      <ShoppingCartIcon style={{ color: '#f6e3c5' }} />
                    </Badge>
                  </IconButton>
                </Link>
              </RightNavItem>
            </RightNav>
          </Wrapper>
        </Container>
      </div>
    );
  }
}
const mapStateToProps = ({ auth, cart }) => {
  return {
    auth,
    cart,
  };
};

const mapDispatch = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    exchangeToken: () => dispatch(exchangeToken()),
    fetchCart: () => dispatch(fetchCart()),
  };
};

export default connect(mapStateToProps, mapDispatch)(Nav);
