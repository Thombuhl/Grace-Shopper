import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Container,
  Wrapper,
  Title,
  UserDiv,
  UserInfo,
  UserName,
  UserAccount,
  UserEmail,
  Image,
  Input,
  UploadImageDiv,
} from './styledComponents/AccountProfileStyles';
import Footer from './Footer';
import { InputDiv } from './styledComponents/NewsLetterStyles';
import { Link } from 'react-router-dom';
//createa thunks to edit user profile

const AccountProfile = () => {
  const [uploadFile, setUploadFile] = useState();
  const user = useSelector((state) => state.auth);
  return (
    <Container>
      <Wrapper>
        <UserDiv>
          <Title>Account Details</Title>
          <Link style={{ textAlign: 'center' }} to="/edit">
            <Image src={`data:image/png;base64, ${user.profileImage}`}></Image>
          </Link>
          <UserInfo>
            Name:{' '}
            <UserName>
              {user.lastName}, {user.firstName}
            </UserName>
          </UserInfo>
          <UserInfo>
            Username: <UserAccount>{user.username}</UserAccount>
          </UserInfo>
          <UserInfo>
            Email: <UserEmail>{user.email}</UserEmail>
          </UserInfo>
        </UserDiv>
        <InputDiv>
          <Input
            type="file"
            ref={(el) => console.log('------', el)}
            onChange={(ev) => {
              const file = ev.target.files[0];
              const reader = new FileReader();
              reader.addEventListener('load', () => {
                setUploadFile(reader.result);
              });
              reader.readAsDataURL(file);
            }}
          />
        </InputDiv>
        <UploadImageDiv>
          <Image style={{ border: 'none' }} src={uploadFile} alt="upload" />
        </UploadImageDiv>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default AccountProfile;
