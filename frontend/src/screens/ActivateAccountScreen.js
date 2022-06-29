import React, {useState, useEffect} from 'react'
import "../index.css"
import {useParams} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import {activation_func} from '../actions/auth'
import { useNavigate } from "react-router-dom";


function ActivateAccountScreen() {
  const {uid} =  useParams();
  const {token} = useParams();

  const [verified, setVerified] = useState(false)

  let navigate = useNavigate(); 
  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()

    dispatch(
      activation_func(uid, token),
      setVerified(true)
    )

  }

  if (verified) {
    let path = '/'; 
    navigate(path);
  }

  return (
    <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className='container'>
          <div
            className='d-flex flex-column justify-content-center align-items-center '
            style = {{marginTop: '200px'}}>
            <h2>Finalizeaza procesul de activare cont</h2>
            <Button onClick={submitHandler} 
                    className='btn btn-success mt-3'
                    type='button'
                    size="lg">
              Verificare cont
            </Button>
          </div>
        </div>
    </div>
  )
}

export default ActivateAccountScreen
