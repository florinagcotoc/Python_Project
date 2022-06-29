import React, {useState} from 'react';
import "../index.css"
import {Form, Button} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import {reset_password_func} from '../actions/auth'
import FormContainer from '../components/FormContainer';

function ResetPasswordScreen() {

  const [email, setEmail] = useState('')
  const dispatch = useDispatch()

  const submitHandler = (e) => {
      e.preventDefault()
      dispatch(reset_password_func(email))
  }

    return (
    <FormContainer>
        <br/>
        <br/>
        <br/>
        <br/>
        <h3 className="mt-5"> Resetare Parola</h3>
        <h7> <i> &nbsp; &nbsp;Te rugam sa introduci adresa de e-mail in campul de mai jos.
          <br/>
          &nbsp; &nbsp;In cazul in care adresa de e-mail este corecta, vei primi un e-mail cu link-ul de resetare a parolei.</i></h7>
        {/* {error && <Messages variant='danger'>{error}</Messages>}
        {loading && <Loader/>} */}
        <Form onSubmit = {submitHandler}>
            <Form.Group controlId = 'email'>
                <Form.Label className='mt-3'>
                    Adresa de e-mail
                </Form.Label>
                <Form.Control 
                    type='email'
                    placeholder='E-mail'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Button className='mt-3' type="submit" variant="success">Resetare parola</Button>
        </Form>
        
    </FormContainer>
    )
}

export default ResetPasswordScreen
