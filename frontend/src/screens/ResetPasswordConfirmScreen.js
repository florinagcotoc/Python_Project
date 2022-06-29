import React, {useState} from 'react';
import "../index.css"
import {Form, Button} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import {reset_password_confirm_func} from '../actions/auth'
import FormContainer from '../components/FormContainer';
import {useParams} from 'react-router-dom'

function ResetPasswordConfirmScreen() {

  const [new_password, setNewPassword] = useState('')
  const [re_new_password, setReNewPassword] = useState('')
  const dispatch = useDispatch()
  const {uid} =  useParams();
  const {token} = useParams();

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(reset_password_confirm_func(uid,token,new_password, re_new_password))
  }
  
  return (
    <FormContainer>
      <br/>
      <br/>
      <br/>
      <br/>
      <h3 className="mt-5"> Resetare Parola</h3>
      <h7> <i> &nbsp; &nbsp;Te rugam sa introduci noua parola in campul de mai jos.
        <br/>
      </i></h7>
      {/* {error && <Messages variant='danger'>{error}</Messages>}
      {loading && <Loader/>} */}
      <Form onSubmit = {submitHandler}>
          <Form.Group controlId = 'new_password'>
              <Form.Label className='mt-3'>
                  Parola noua
              </Form.Label>
              <Form.Control 
                  type='password'
                  placeholder='Parola noua'
                  value={new_password}
                  onChange={(e)=>setNewPassword(e.target.value)}>
              </Form.Control>
          </Form.Group>
          <Form.Group controlId = 're_new_password'>
              <Form.Label className='mt-3'>
                  Confirmare parola noua
              </Form.Label>
              <Form.Control 
                  type='password'
                  placeholder='Confirmare parola noua'
                  value={re_new_password}
                  onChange={(e)=>setReNewPassword(e.target.value)}>
              </Form.Control>
          </Form.Group>
          <Button className='mt-3' type="submit" variant="success">Schimbare parola</Button>
      </Form>
    </FormContainer>
  )
}

export default ResetPasswordConfirmScreen
