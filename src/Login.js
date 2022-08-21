import React, { Component } from 'react';
import { login } from './store';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import {
  Container,
  Wrapper,
  Button,
  Input,
  Title,
  Form,
} from './styledComponents/LoginStyles';

class Login extends Component {
  constructor() {
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

  onChange(ev) {
    this.setState({ [ev.target.name]: ev.target.value });
  }
  onSubmit(ev) {
    try {
      ev.preventDefault();
      this.props.login(this.state);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { onChange, onSubmit } = this;
    const { username, password, loginSuccessful } = this.state;

    if (loginSuccessful) {
      return <Redirect to="/" />;
    } else {
      return (
        <Container>
          <Wrapper>
            <Title style={{ textAlign: 'center' }}>Sign In</Title>
            <Form onSubmit={onSubmit}>
              <Input
                name="username"
                onChange={onChange}
                value={username}
                placeholder="Enter Username"
              />
              <Input
                name="password"
                onChange={onChange}
                value={password}
                placeholder="Enter Password"
              />
              <Link
                style={{ textAlign: 'center', fontWeight: '900' }}
                to="/resetpassword"
              >
                Forgot your Password?
              </Link>
              <Link
                style={{ textAlign: 'center', fontWeight: '900' }}
                to="/signup"
              >
                Create account
              </Link>
              <Button>Sign In</Button>
            </Form>
          </Wrapper>
        </Container>
      );
    }
  }
}

const mapDispatch = (dispatch, { history }) => {
  return {
    login: (credentials) => {
      dispatch(login(credentials, history));
      history.push('/');
    },
  };
};
export default connect(null, mapDispatch)(Login);
