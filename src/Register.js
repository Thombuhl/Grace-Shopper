import React, { Component } from 'react';
import { login } from './store';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import {
  Wrapper,
  Button,
  Input,
  Title,
  Form,
} from './styledComponents/LoginStyles';
import { signup } from './store/auth';
import { Container } from './styledComponents/SignUpStyles';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      email: '',
      gender: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(ev) {
    this.setState({ [ev.target.name]: ev.target.value });
  }

  onSubmit(ev) {
    ev.preventDefault();
    this.props.signup(this.state);
  }

  render() {
    const { onChange, onSubmit } = this;
    const { username, password, email, gender } = this.state;
    {
      return (
        <Container>
          <Wrapper>
            <Title style={{ textAlign: 'center', color: '#f6e3c5' }}>
              Register
            </Title>
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
              <Input
                type="email"
                name="email"
                onChange={onChange}
                value={email}
                placeholder="Example@Email.com"
              />
              <Link
                style={{ textAlign: 'center', fontWeight: 900 }}
                to="/login"
              >
                Already have an Account?
              </Link>
              <Button>Register</Button>
            </Form>
          </Wrapper>
        </Container>
      );
    }
  }
}

const mapDispatch = (dispatch, { history }) => {
  return {
    signup: (usrInfo) => {
      dispatch(signup(usrInfo, history));
      history.push('/');
    },
  };
};

export default connect(null, mapDispatch)(Register);
