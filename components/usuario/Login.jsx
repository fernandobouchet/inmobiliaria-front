import { useState } from 'react';
import { Button, Container, Form, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HOME, REGISTER } from '../../routes/path';
import { formLogin } from '../../services/usuario';
import {useAuthContext } from '../../context/authContext'
const Login = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = loginData;

  const { LoginContext, isAuthenticated } = useAuthContext();

  const handelOnChange = (e) => {
    setLoginData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {

    e.preventDefault();
    //api aws 
    let {data} = await formLogin(loginData)  
    // hook validar token 
    LoginContext(data.accessToken)

    }
  
  

  return (
    <Container>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit} className="w-75 m-auto">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User name</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter userName"
            value={email}
            onChange={handelOnChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handelOnChange}
            required
          />
        </Form.Group>

        <Stack gap="2" className="col-md-5 mx-auto">
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <div>
            Need an Account?
            <Button as={Link} to={REGISTER}>
              Sign Up
            </Button>
          </div>
        </Stack>
      </Form>
      <Button as={Link} to={HOME}>
        INICIO
      </Button>
    </Container>
  );
};

export default Login;
