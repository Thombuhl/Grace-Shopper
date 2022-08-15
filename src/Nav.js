import React from "react";
import { connect } from "react-redux";
import { HashRouter as Router, Link } from "react-router-dom";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from "@mui/material/IconButton";

const Container = styled.div`
  height: 70px;
  background-color: #343a40;
  color: white;
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

const Nav = () => {
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
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <div className="dropdown show bg-dark px-2">
                <a
                  className="btn btn-secondary dropdown-toggle text-warning"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Category
                </a>
                <div
                  className="dropdown-menu bg-dark"
                  aria-labelledby="dropdownMenuLink"
                >
                  <Link to="/mens" className="dropdown-item text-warning">
                    Mens
                  </Link>
                  <Link to="/womens" className="dropdown-item text-warning">
                    Womens
                  </Link>
                  <Link to="/unisex" className="dropdown-item text-warning">
                    Unisex
                  </Link>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <div className="dropdown show bg-dark">
                <Link
                  to="/"
                  className="btn btn-secondary dropdown-toggle text-warning"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Brands
                </Link>
                <div
                  className="dropdown-menu bg-dark"
                  aria-labelledby="dropdownMenuLink"
                >
                  <Link to="/nike" className="dropdown-item text-warning">
                    Nike
                  </Link>
                  <Link to="/adidas" className="dropdown-item text-warning">
                    Adidas
                  </Link>
                  <Link to="/jordans" className="dropdown-item text-warning">
                    Jordans
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="mx-auto order-0">
          <Link
            className=" btn btn-lg navbar-brand mx-auto text-warning"
            to="/"
          >
            <img className="logo" src="public/logo.png" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target=".dual-collapse2"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="btn btn-lg nav-link text-warning" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-lg nav-link text-warning" to="/signup">
                Sign-Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default connect()(Nav);
