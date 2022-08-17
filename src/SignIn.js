import React, { Component } from 'react';
import { login } from './store';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import auth from './store/auth';




class SignIn extends Component{
  constructor(){
    super();
    this.state = {
      username: '',
      password: '',
      loginAttempt: false,
      error: false,
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }



  onChange(ev){
    this.setState({ [ev.target.name]: ev.target.value });
  }
  onSubmit(ev){
    try {
      ev.preventDefault();
      this.props.login(this.state) 
    } catch (err) {
      console.log(err)
    }
  
  }

  render(){
    const { onChange, onSubmit, } = this;
    const { username, password, loginSuccessful } = this.state;
    if (loginSuccessful) {
      return <Redirect to='/'/>
    } else {
    return (
      <form onSubmit={ onSubmit } className="form-group" id="sign-in">
        <h2>LOGIN</h2>
        <div>
          <label>Username</label>
          <input className="input-group mb-3" name='username' onChange={ onChange } value={ username } placeholder='Enter Username'/>
        </div>
        <div>
          <label>Password</label>
          <input className="input-group mb-3" name='password' onChange={ onChange } value={ password } placeholder='Enter Password'/>
        </div>
        <Link to="/newpassword">Forgot your Password?</Link>
         <button onClick={()=> {this.setState({login:''})}} className="btn btn-secondary btn-lg"> Sign In</button>
        <Link to='signup'>Create account</Link>
      </form>
    );
    }
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
