import React, { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authenticateAction } from '../redux/actions/authenciateAction';
const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const loginUser = (event) => {
        event.preventDefault();//Form에서 refresh 막기
        dispatch(authenticateAction.login(id,password));
        //setAuthenticate(true);
        navigate("/");
    }
  return (
    <Container className='login-box'>
        <Form className='form-area' onSubmit={(event)=>loginUser(event)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={(event) => setId(event.target.value)} />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} />
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