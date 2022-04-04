import React from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormInput, FormH1, FormLabel, FormButton, Text } from './SigninElements'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const SignIn = () => {
  const [status, setStatus] = useState("Submit");
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const {email, password} = e.target.elements;
    let details = {
      email: email.value,
      password: password.value,
    };
    let response = await fetch("http://localhost:3003/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    let result = await response.json();
    console.log(result);
    history.push('/dashboard');
    
    
  
  }
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>Pair Loss</Icon>
          <FormContent>
            <Form onSubmit={handleSubmit}>
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
                <FormInput htmlFor='email' id = 'email' required />
              <FormLabel htmlFor='for'>Password</FormLabel>
                <FormInput htmlFor='password' id = 'password' required />
              <FormButton type='submit'>Continue</FormButton>
              <Text>Forgot password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default SignIn
