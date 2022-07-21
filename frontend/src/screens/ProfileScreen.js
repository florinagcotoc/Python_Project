import React, { useState, useEffect } from "react";
import "../index.css";
import { Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form, Row } from "react-bootstrap";
import { getUserDetails, updateUserProfile } from "../actions/userActions";
import Messages from "../components/Messages";
import Loader from "../components/Loader";
import {USER_UPDATE_PROFILE_RESET} from '../constants/types';

function ProfileScreen({history}) {
    const [username, setUsername] = useState("");
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const dispatch = useDispatch();
    let navigate = useNavigate();

    const userDetails = useSelector((state) => state.userDetails);
    const { error, loading, user } = userDetails;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
    const { success } = userUpdateProfile;

    // need to make sure that a user is logged in before we dispatch certain actions or allow a user to actually see the page
    useEffect(() => {
        if (!userInfo) {
        let path = "/login";
        navigate(path);
        } else {

        // check if you have info for the correct user
            if (!user || !user.username) {
                dispatch({type: USER_UPDATE_PROFILE_RESET })
                dispatch(getUserDetails("profil"));
            } else {
                setUsername(user.username);
                setFirstName(user.first_name);
                setLastName(user.last_name);
                setEmail(user.email);
            }
        }
    }, [dispatch, userInfo, user, success]);

    const submitHandler = (e) => {
        e.preventDefault();
            
        dispatch(updateUserProfile({
            'id':user.id,
            'first_name':first_name,
            'last_name':last_name,
            'username':username,
            'email':email,
        }));
    };

    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            {/* two column layouts
                -> A user form to update the information
                -> List all the user's orders*/}
            <Row>
                <Col md={3}>
                    <h5>
                        <i>Profil utilizator</i>
                    </h5>

                    {message && <Messages variant="danger">{message}</Messages>}
                    {error && <Messages variant="danger">{error}</Messages>}
                    {loading && <Loader />}
                    <Form onSubmit={submitHandler}>
                        <Form.Group controlId="username">
                        <Form.Label className="mt-3">Nume utilizator</Form.Label>
                        <Form.Control
                            required
                            type="username"
                            placeholder="Utilizator"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="first_name">
                        <Form.Label className="mt-3">Prenume</Form.Label>
                        <Form.Control
                            required
                            type="first_name"
                            placeholder="Prenume"
                            value={first_name}
                            onChange={(e) => setFirstName(e.target.value)}
                        ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="last_name">
                        <Form.Label className="mt-3">Nume</Form.Label>
                        <Form.Control
                            required
                            type="last_name"
                            placeholder="Nume"
                            value={last_name}
                            onChange={(e) => setLastName(e.target.value)}
                        ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="email">
                        <Form.Label className="mt-3">Adresa de e-mail</Form.Label>
                        <Form.Control
                            required
                            type="email"
                            placeholder="E-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        ></Form.Control>
                        </Form.Group>
                        
                        <Button className="btn-update" type="submit" variant="success">
                        Actualizare profil
                        </Button>
                    </Form>
                </Col>
                <Col md={9}>
                    <h5>
                        <i>Comenzile mele</i>
                    </h5>
                </Col>
            </Row>
            <br/>
            <br/>
        </div>
    );
}

export default ProfileScreen;
