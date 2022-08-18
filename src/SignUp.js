import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signup } from './store/auth';

class SignUp extends Component {
  constructor () {
    super();
    this.state = {
      username: '',
      password: '',
      email: '',
      gender: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange (ev) {
    this.setState({ [ev.target.name]: ev.target.value });
  }

  onSubmit (ev) {
    ev.preventDefault();
    this.props.signup(this.state);
  }

  render () {
    const { onChange, onSubmit } = this;
    const { username, password, email, gender } = this.state;
    return (
      <form onSubmit={onSubmit} className="form-group" id="sign-in">
        <h2>SIGN UP</h2>
        <div>
          <label>Username</label>
          <input
            className="input-group mb-3"
            name="username"
            onChange={onChange}
            value={username}
            placeholder="Enter Username"
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            className="input-group mb-3"
            name="password"
            onChange={onChange}
            value={password}
            placeholder="Enter Password"
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            className="input-group mb-3"
            name="email"
            onChange={onChange}
            value={email}
            placeholder="Enter Email"
            required
          />
        </div>
        <div>
          <label>Gender</label>
          <input
            className="input-group mb-3"
            name="gender"
            onChange={onChange}
            value={gender}
            placeholder="Enter Gender"
            required
          />
        </div>
        <Link to="/login">Have an account?</Link>
        <button>Sign Up</button>
      </form>
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    signup: (usrInfo) => {
      dispatch(signup(usrInfo));
    }
  };
};

export default connect(null, mapDispatch)(SignUp);
