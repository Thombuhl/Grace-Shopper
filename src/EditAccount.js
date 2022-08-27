import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Container,
  Form,
  Input,
  Title,
  Button,
  Wrapper,
  FormDiv,
} from './styledComponents/EditAccountStyles';
import Footer from './Footer';

class _EditAccountForm extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      firstName: '',
      lastName: '',
      email: '',
    };
    this.save = this.save.bind(this);
  }
  componentDidMount() {
    if (this.props.auth.id) {
      console.log('thisprops', this.props.auth);
      this.setState({
        username: this.props.username,
        firstName: this.props.auth.firstName,
        lastName: this.props.auth.lastName,
        email: this.props.auth.email,
      });
    }
  }

  //   componentDidUpdate(prevProps) {
  //     console.log('prevProps', prevProps);
  //     const { auth } = this.props;
  //     console.log('id', auth.username);
  //     if (prevProps.auth.id && auth.id) {
  //       this.setState({
  //         username: auth.username,
  //         firstName: auth.firstName,
  //         lastName: auth.lastName,
  //         email: auth.email,
  //       });
  //     }
  //   }

  save(event) {
    event.preventDefault();
    const auth = {
      username: this.state.username,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
    };
    this.props.updateAuth(auth);
  }
  render() {
    const { username, firstName, lastName, email } = this.state;
    const { save } = this;
    const { auth, updateAuth } = this.props;
    return (
      <Container>
        <Wrapper>
          <FormDiv>
            <Form onSubmit={save}>
              <Title>Edit Account</Title>
              <Input
                value={username}
                placeholder="Username"
                onChange={(event) =>
                  this.setState({ username: event.target.value })
                }
              ></Input>
              <Input
                value={firstName}
                placeholder="First Name"
                onChange={(event) =>
                  this.setState({ firstName: event.target.value })
                }
              ></Input>
              <Input
                value={lastName}
                placeholder="Last Name"
                onChange={(event) =>
                  this.setState({ lastName: event.target.value })
                }
              ></Input>
              <Input
                value={email}
                type="email"
                placeholder="Example@email.com"
                onChange={(event) =>
                  this.setState({ email: event.target.value })
                }
              ></Input>
              <Button>Submit</Button>
            </Form>
          </FormDiv>
        </Wrapper>
        <Footer />
      </Container>
    );
  }
}

const mapState = ({ auth }) => {
  console.log('auth', auth.id);
  return {
    auth,
  };
};

const mapDispatch = (dispatch, { history }) => {
  return {};
};

const EditAccountForm = connect(mapState, mapDispatch)(_EditAccountForm);
export default EditAccountForm;
