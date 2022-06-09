import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Form, Button, Row, Col} from 'react-bootstrap'
import Messages from '../components/Messages'
import Loader from "../components/Loader";
import {useDispatch, useSelector} from 'react-redux'
import {login_func} from '../actions/auth'
import FormContainer from '../components/FormContainer';
import { useNavigate } from "react-router-dom";


function LoginScreen({ history}) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const {error,loading, userInfo} = userLogin
    
    // make sure that a logged user can not login again
    let navigate = useNavigate(); 
    useEffect(() => {
        // if userInfo exist redirect the user 
        if(userInfo){

            let path = '/'; 
            navigate(path);
        }
    }, [history, userInfo])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login_func(email, password))
    }


    return (
    <FormContainer>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1> Sign In</h1>
        {error && <Messages variant='danger'>{error}</Messages>}
        {loading && <Loader/>}
        <Form onSubmit = {submitHandler}>
            <Form.Group controlId = 'email'>
                <Form.Label className='mt-3'>
                    Email Address
                </Form.Label>
                <Form.Control 
                    type='email'
                    placeholder='Enter email'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId = 'password'>
                <Form.Label className='mt-3'> 
                    Password
                </Form.Label>
                <Form.Control 
                    type='password'
                    placeholder='Enter password'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Button className='mt-3' type="submit" variant="success">Sign In</Button>
        </Form>

        <Row className='py-3'>
            <Col>
                Don't have an account? <Link to = '/signup'>Register</Link>
            </Col>

        </Row>
    </FormContainer>
    )
}

export default LoginScreen
