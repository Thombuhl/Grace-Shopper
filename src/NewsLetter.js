import React, { Component } from "react";
import {
  Button,
  Container,
  Info,
  InputDiv,
  InputEmail,
  Title,
} from "./styledComponents/NewsLetterStyles";
import SendIcon from "@mui/icons-material/Send";

class NewsLetter extends Component {
  render() {
    return (
      <Container>
        <Title>Newsletter</Title>
        <Info>
          Signup for exclusive deals and sneak peeks of the upcoming releases!
        </Info>
        <InputDiv>
          <InputEmail type="email" placeholder="Example@email.com" />
          <Button>
            <SendIcon />
          </Button>
        </InputDiv>
      </Container>
    );
  }
}

export default NewsLetter;
