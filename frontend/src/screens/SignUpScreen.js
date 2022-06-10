import "../index.css"
import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Form, Button, Row, Col} from 'react-bootstrap'
import Messages from '../components/Messages'
import Loader from "../components/Loader";
import {useDispatch, useSelector} from 'react-redux'
import {login_func, register_func} from '../actions/auth'
import FormContainer from '../components/FormContainer';
import { Redirect } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function SignUpScreen() {

  const [username, setUsername] = useState('')
  const [first_name, setFirstName] = useState('')
  const [last_name, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [re_password, setRePassword] = useState('')
  const [message, setMessage] = useState('')

  const dispatch = useDispatch()

  const userRegister = useSelector(state => state.userRegister)
  const {error,loading, userInfo} = userRegister

  let navigate = useNavigate(); 

  useEffect(() => {
      // if userInfo exist redirect the user 
      if(userInfo){

          let path = '/'; 
          navigate(path);
      }
  }, [userInfo])

  const submitHandler = (e) => {
      e.preventDefault()

      if(password != re_password){
        setMessage('Passwords do not match')
      }
      else {
        dispatch(register_func(username, first_name, last_name, email, password))
      }
  }


  return (
    <FormContainer>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1> Register</h1>
        {message && <Messages variant='danger'>{message}</Messages>}
        {error && <Messages variant='danger'>{error}</Messages>}
        {loading && <Loader/>}
        <Form onSubmit = {submitHandler}>
            <Form.Group controlId = 'username'>
                <Form.Label className='mt-3'>
                    Username
                </Form.Label>
                <Form.Control
                    required 
                    type='username'
                    placeholder='Enter username'
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId = 'first_name'>
                <Form.Label className='mt-3'>
                    First Name
                </Form.Label>
                <Form.Control
                    required 
                    type='first_name'
                    placeholder='Enter First Name'
                    value={first_name}
                    onChange={(e)=>setFirstName(e.target.value)}>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId = 'last_name'>
                <Form.Label className='mt-3'>
                    Last Name
                </Form.Label>
                <Form.Control 
                    required
                    type='last_name'
                    placeholder='Enter Last Name'
                    value={last_name}
                    onChange={(e)=>setLastName(e.target.value)}>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId = 'email'>
                <Form.Label className='mt-3'>
                    Email Address
                </Form.Label>
                <Form.Control 
                    required
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
                    required
                    type='password'
                    placeholder='Enter password'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId = 're_password'>
                <Form.Label className='mt-3'> 
                    Confirm Password
                </Form.Label>
                <Form.Control 
                    required
                    type='password'
                    placeholder='Enter password again'
                    value={re_password}
                    onChange={(e)=>setRePassword(e.target.value)}>
                </Form.Control>
            </Form.Group>

            <Button className='mt-3' type="submit" variant="success">Sign Up</Button>
        </Form>

        <Row className='py-3'>
            <Col>
                Have an Account? <Link to = '/login'>Login</Link>
            </Col>

        </Row>
    </FormContainer>
  )
}

export default SignUpScreen