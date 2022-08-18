import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchCart, exchangeToken, logout } from './store';
import { Link, Route } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Cart from './Cart';
import Nav from './NavBar';

class _Account extends React.Component {
  constructor () {
    super();
    this.state = {
      loggedIn: false
    };

    this.bind = this.displayLogout.bind(this);
  }

  componentDidMount () {
    this.props.exchangeToken();
  }

  componentDidUpdate (prevProps) {
    if (!prevProps.auth.id && this.props.auth.id) {
      this.props.fetchCart();
    }
  }

  displayLogout (logout_function) {
    return <button onClick={logout_function}>Sign Out</button>;
  }

  render () {
    const { auth, logout, cart } = this.props;

    return (
      <main>
        {auth.id
          ? (
            <button onClick={logout}>Logout {auth.username}</button>
          )
          : (
            <Route exact path="/login" component={SignIn}></Route>
          )}

        {auth.id
          ? (
            <Link to="/cart">Cart ({cart.lineItems.length})</Link>
          )
          : null}
        {auth.id
          ? (
            <Fragment>
              <Route path="/cart" component={Cart} />
            </Fragment>
          )
          : null}
      </main>
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    exchangeToken: () => dispatch(exchangeToken()),
    logout: () => dispatch(logout()),
    fetchCart: () => dispatch(fetchCart())
  };
};
const mapStateToProps = (state) => {
  return state;
};

const Account = connect(mapStateToProps, mapDispatch)(_Account);
export default Account;
