import { useState } from 'react';
import { Button, Container, Form, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HOME, REGISTER } from '../../routes/path';
import { login } from '../../services/usuario';
import { useAuthContext } from './../../context/authContext';
const Login = () => {
  const [loginData, setLoginData] = useState({
    userName: '',
    password: '',
  });

  const { userName, password } = loginData;

  const { Login } = useAuthContext();

  const handelOnChange = (e) => {
    setLoginData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(loginData) && Login();
  };

  return (
    <Container>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit} className="w-75 m-auto">
        <Form.Group className="mb-3" controlId="formBasicUserName">
          <Form.Label>User name</Form.Label>
          <Form.Control
            type="userName"
            name="userName"
            placeholder="Enter userName"
            value={userName}
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
