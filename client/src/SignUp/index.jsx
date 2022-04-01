import React, { useState} from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormInput, FormH1, FormLabel, FormButton, Text } from './SignUpElements'






const SignUp = () => {
  const [status, setStatus] = useState("Submit");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const {email, password} = e.target.elements;
    let details = {
      email: email.value,
      password: password.value,
    };

    let response = await fetch("http://localhost:3003/createUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  }
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>Pair Loss</Icon>
          <FormContent>
            <Form onSubmit={handleSubmit}>
              <FormH1>Sign Up</FormH1>
              <FormLabel htmlFor='email'>Email</FormLabel>
                <FormInput htmlFor='email' id = "email" required />
              <FormLabel htmlFor=''>Password</FormLabel>
                <FormInput htmlFor='password' id = "password" required />
              <FormButton type='submit'>Continue</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
  }
export default SignUp
