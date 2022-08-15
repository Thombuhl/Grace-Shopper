import React, { Component } from 'react';
import { login } from './store';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';



class SignIn extends Component{
  constructor(){
    super();
    this.state = {
      username: '',
      password: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
   
  }
  onChange(ev){
    this.setState({ [ev.target.name]: ev.target.value });
  }
  onSubmit(ev){
    ev.preventDefault();
    this.props.login(this.state);
  }
  render(){
    const { onChange, onSubmit, } = this;
    const { username, password } = this.state;
    return (
      <form onSubmit={ onSubmit } className="form-group" id="sign-in">
        <h2>LOGIN</h2>
        <div>
          <label>Username</label>
          <input  className="input-group mb-3" name='username' onChange={ onChange } value={ username } placeholder='Enter Username'/>
        </div>
        <div>
          <label>Password</label>
          <input className="input-group mb-3" name='password' onChange={ onChange } value={ password } placeholder='Enter Password'/>
        </div>
        <Link to="/newpassword">Forgot your Password?</Link>
        <Link to="/" id='sign-btn' className="btn btn-secondary btn-lg">Sign In</Link>
        <Link to='signup'>Create account</Link>
      </form>
    );
  };
};

const mapDispatch = (dispatch)=> {
  return {
    login: (credentials)=> {
      dispatch(login(credentials));
    }
  };
};

export default connect(null, mapDispatch)(SignIn);