import React, { Component } from "react";
import { connect } from "react-redux";
import { HashRouter as Router, Link } from "react-router-dom";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from "@mui/material/IconButton";
import { logout, exchangeToken, userCart } from "./store";

const Container = styled.div`
  height: 70px;
  background-color: #343a40;
  color: white;
  border-radius: 2px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LeftNav = styled.div`
  flex: 1;
  display: flex;
`;
const LeftNavItem = styled.div`
  font-size: 1rem;
  margin-right: 10px;
`;
const CenterNav = styled.div`
  flex: 1;
`;
const RightNav = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`;
const RightNavItem = styled.div`
  font-size: 1rem;
  margin-left: 10px;
`;
const Logo = styled.h1`
  font-weight: bold;
  text-align: center;
  color: white;
`;

class Nav extends Component {
  componentDidMount() {
    this.props.exchangeToken();
  }

  render() {
    const { auth, logout, userCart } = this.props;
    return (
      <div>
        <Container>
          <Wrapper>
            <LeftNav className="menu">
              <LeftNavItem className="menu-item">
                <div className="dropdown">
                  <button className="dropdown-btn left-menu-button">
                    <Link to="/mens">Mens</Link>
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
                    <Link to="/womens">Womens</Link>
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
                    <Link to="/unisex">Unisex</Link>
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
                  GST7.
                </Link>
              </Logo>
            </CenterNav>
            <RightNav>
              <InputBase
                className="search"
                placeholder="Search…"
                inputProps={{
                  "aria-label": "search",
                  style: {
                    padding: 5,
                  },
                }}
                endAdornment={
                  <SearchIcon style={{ color: "gray", padding: 2 }} />
                }
              />
              {auth.id ? (
                <button onClick={logout}>Logout {auth.username}</button>
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
                <IconButton
                  onClick={() => console.log("Go to cart!")}
                  aria-label="cart"
                >
                  <Badge badgeContent={0} showZero color="primary">
                    <ShoppingCartIcon style={{ color: "white" }} />
                  </Badge>
                </IconButton>
              </RightNavItem>
            </RightNav>
          </Wrapper>
        </Container>
      </div>
    );
  }
}
const mapStateToProps = ({ auth }) => {
  return {
    auth,
  };
};

const mapDispatch = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    exchangeToken: () => dispatch(exchangeToken()),
    // userCart: () => dispatch(userCart())
  };
};

export default connect(mapStateToProps, mapDispatch)(Nav);
