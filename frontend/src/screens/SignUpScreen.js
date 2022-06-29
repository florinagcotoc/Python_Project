import "../index.css"
import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Form, Button, Row, Col} from 'react-bootstrap'
import Messages from '../components/Messages'
import Loader from "../components/Loader";
import {useDispatch, useSelector} from 'react-redux'
import {register_func} from '../actions/auth'
import FormContainer from '../components/FormContainer';
import { useNavigate } from "react-router-dom";

function SignUpScreen() {

  const [username, setUsername] = useState('')
  const [first_name, setFirstName] = useState('')
  const [last_name, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [re_password, setRePassword] = useState('')
  const [message, setMessage] = useState('')

  const [accountCreated, setAccountCreated] = useState(false)

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
        dispatch(
            register_func(username, first_name, last_name, email, password, re_password),
            setAccountCreated(true)
        )

      }
    }

    if (userInfo) {
        let path = '/'; 
        navigate(path);
    }
    
    if (accountCreated) {
        let path = '/login'; 
        navigate(path);
    }


  return (
    <FormContainer>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1> Inregistrare</h1>
        {message && <Messages variant='danger'>{message}</Messages>}
        {error && <Messages variant='danger'>{error}</Messages>}
        {loading && <Loader/>}
        <Form onSubmit = {submitHandler}>
            <Form.Group controlId = 'username'>
                <Form.Label className='mt-3'>
                    Nume utilizator
                </Form.Label>
                <Form.Control
                    required 
                    type='username'
                    placeholder='Utilizator'
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId = 'first_name'>
                <Form.Label className='mt-3'>
                    Prenume
                </Form.Label>
                <Form.Control
                    required 
                    type='first_name'
                    placeholder='Prenume'
                    value={first_name}
                    onChange={(e)=>setFirstName(e.target.value)}>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId = 'last_name'>
                <Form.Label className='mt-3'>
                    Nume
                </Form.Label>
                <Form.Control 
                    required
                    type='last_name'
                    placeholder='Nume'
                    value={last_name}
                    onChange={(e)=>setLastName(e.target.value)}>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId = 'email'>
                <Form.Label className='mt-3'>
                    Adresa de e-mail
                </Form.Label>
                <Form.Control 
                    required
                    type='email'
                    placeholder='E-mail'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId = 'password'>
                <Form.Label className='mt-3'> 
                    Parola
                </Form.Label>
                <Form.Control 
                    required
                    type='password'
                    placeholder='Parola'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId = 're_password'>
                <Form.Label className='mt-3'> 
                    Confirmare parola
                </Form.Label>
                <Form.Control 
                    required
                    type='password'
                    placeholder='Confirmare parola'
                    value={re_password}
                    onChange={(e)=>setRePassword(e.target.value)}>
                </Form.Control>
            </Form.Group>

            <Button className='mt-3' type="submit" variant="success">Inregistrare</Button>
        </Form>

        <Row className='py-3'>
            <Col>
                Client existent? <Link to = '/login'>Intra in cont</Link>
            </Col>
        </Row>
    </FormContainer>
  )
}

export default SignUpScreen