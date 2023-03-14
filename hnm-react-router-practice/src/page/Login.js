import React from 'react'
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Login = ({setAuthenticate}) => {
    const navigate = useNavigate();
    const loginUser = (event) => {
        event.preventDefault();//Form에서 refresh 막기
        console.log("login user funtion issue");
        setAuthenticate(true);
        navigate("/");
    }
  return (
    <Container className='login-box'>
        <Form className='form-area' onSubmit={(event)=>loginUser(event)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        {/* Form- 입력받은 정보를 백엔드로 보낼때 씀 | 특징 - refresh가 됨 */}
        {/* type =submit -> onSubmit으로 이벤트 줘야함 제출 */}
        <Button variant="danger" type="submit">
            Login
        </Button>
        </Form>
    </Container>
  )
}

export default Login