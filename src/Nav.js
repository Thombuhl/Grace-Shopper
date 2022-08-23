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

class Nav extends Component {
  componentDidMount() {
    this.props.exchangeToken();
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
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
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
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
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
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                  </div>
                </div>
              </LeftNavItem>
            </LeftNav>
            <CenterNav>
              <Logo>
                <Link className="links" to="/">
                  SoleNice.
                </Link>
              </Logo>
            </CenterNav>
            <RightNav>
              <InputBase
                className="search"
                placeholder="Search…"
                inputProps={{
                  'aria-label': 'search',
                  style: {
                    padding: 5,
                  },
                }}
                endAdornment={
                  <SearchIcon style={{ color: 'gray', padding: 2 }} />
                }
              />

              {auth.id ? (
                <div className="dropdown">
                  <button
                    className="dropdown-btn left-menu-button"
                    style={{ background: 'none', border: 'none' }}
                    onClick={logout}
                  >
                    <Link
                      className="dropdown-btn left-menu-button"
                      style={{ color: '#f6e3c5' }}
                      to="/"
                    >
                      Logout
                    </Link>
                  </button>
                  <div className="dropdown-content">
                    <Link to="/account">My Account</Link>
                    <a href="">Edit Profile</a>
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
