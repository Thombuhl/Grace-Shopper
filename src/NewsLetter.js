import React, { Component } from 'react';
import {
  Button,
  Container,
  Info,
  InputDiv,
  Form,
  InputEmail,
  Title,
} from './styledComponents/NewsLetterStyles';
import SendIcon from '@mui/icons-material/Send';

class NewsLetter extends Component {
  constructor() {
    super();
    this.save = this.save.bind(this);
  }
  async save(event) {
    event.preventDefault();
  }
  render() {
    const { save } = this;
    return (
      <Container>
        <Title>Newsletter</Title>
        <Info>
          Signup for exclusive deals and sneak peeks of the upcoming releases!
        </Info>
        <InputDiv>
          <Form onSubmit={save}>
            <InputEmail type="email" placeholder="Example@email.com" />
            <Button
              onClick={() => console.log('You signed for up newsletter!')}
            >
              <SendIcon />
            </Button>
          </Form>
        </InputDiv>
      </Container>
    );
  }
}

export default NewsLetter;
