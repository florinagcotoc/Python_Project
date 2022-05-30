import React, {useState} from 'react';
import "../index.css"
import {Link, Redirect} from 'react-router-dom';
import {connect } from 'react-redux';
import {LinkContainer} from 'react-router-bootstrap'
import login_func from '../actions/auth';


const LoginScreen = (login) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const {email, password} = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        login_func(email, password);
    };
    
    // is the user already logged in
    //redirect to the homepage

    return (
        <div className="container mt-5">
            <br/>
            <br/>
            <br/>
            <br/>
            <h3>Sign In</h3>
            <p>Sign into your Account</p>
            <form onSubmit = {e => onSubmit(e)}>
                <div className="form-group">
                    <input className='form-control mt-3' type = 'email' placeholder='Email' name='email' value={email} onChange={e => onChange(e)} required/>
                </div>
                <div className="form-group">
                    <input className='form-control mt-3' type = 'password' placeholder='Password' name='password' value={password} onChange={e => onChange(e)} minLength='6' required/>
                </div>
                <button className='btn btn-success mt-3' type='submit'>Login</button>
            </form>
            <p className='mt-3'>
                Don't have an account?
                <Link to='/signup'>
                    Sign Up
                </Link>
            </p>
            <p className='mt-3'>
                Forgot your password?
                <Link to='/reset-password'>
                    Reset Password
                </Link>
            </p>
        </div>
    );
};

// const mapStateToProps = state => ({
//     //is authenticated
// });

export default connect(null, {login_func})(LoginScreen);