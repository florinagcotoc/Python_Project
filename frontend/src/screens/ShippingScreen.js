import React, {useState, useEffect} from 'react'
import "../index.css"
import '../css/ShippingAddress.css'

import {Form, Button, Row,Col} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import FormContainer from '../components/FormContainer';
import Card from 'react-bootstrap/Card';
import {savePaymentMethod, saveShippingAddress} from '../actions/cartActions';
import { useNavigate } from "react-router-dom";
import CheckoutProcess from '../components/CheckoutProcess';
// import {savePaymentMethod } from '../components/PaymentMethod';

function ShippingScreen() {
    const cart = useSelector(state => state.cart)
    const {shippingAddress} = cart
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const dispatch = useDispatch()
    let navigate = useNavigate(); 

    const [paymentMethod, setPaymentMethod] = useState('MasterCard')

    const [first_name, setFirstName] = useState(userInfo?.first_name);
    const [last_name, setLastName] = useState(userInfo?.last_name);
    const [address, setAddress] = useState(shippingAddress?.address)
    const [city, setCity] = useState(shippingAddress?.city)
    const [postal_code, setPostalCode] = useState(shippingAddress?.postal_code)
    const [country, setCountry] = useState(shippingAddress?.country)
    const [county, setCounty] = useState(shippingAddress?.county)

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod))
        navigate('/plasare-comanda/');
    }

    const [isShownForDeliveryMethod, setisShownForDeliveryMethod] = useState(false);
    const [isShownForPickUpMethod, setisShownForPickUpMethod] = useState(false);

    const deliveryHandleClick = event => {
        setisShownForDeliveryMethod(current => !current);
    };
    const pickUpHandleClick = event => {
        setisShownForPickUpMethod(current => !current);
    };
  

    return (
        <div>
            <br/>
            <br/>
            <br/>
            <br/>
            <CheckoutProcess step1 step2  />
            <Card className='cart-checkout-step'>
                    <h5 style={{color: 'green'}}>Modalitate de livrare</h5>
                    <Card.Img classname='delivery-icon' src = '/images/delivery_icon.png' alt='Imagine livrare' style={{width:'60px', alignSelf: 'center'}}/>
                    <Row>
                        <Col>
                            <Button id="delivery-method-btn" variant='success' style={{marginLeft: '200px'}} onClick={deliveryHandleClick}>Livrare prin curier</Button>
                        </Col>
                        
                        <Col>
                            <Button id="pickup-method-btn" variant='success' style={{marginLeft: '200px'}} onClick={pickUpHandleClick}>Ridicare colet</Button>
                        </Col>
                    </Row>
                    <br/>
                    {isShownForDeliveryMethod && (
                        <div class="delivery-container">
                        <h4>Introduceti datele de livrare</h4>
                        <hr />
                        <Form className="shipping-form" onSubmit={submitHandler}>
                            
                            <Form.Group className="fields fields--2">
                                <Form.Label className="field">
                                    Prenume
                                    <Form.Control className="field_input" 
                                                required 
                                                type='text'
                                                value={first_name ? first_name : ''}
                                                onChange={(e)=>setFirstName(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Label>
                                <Form.Label className="field">
                                    Nume
                                    <Form.Control className="field_input" 
                                                required 
                                                type='text'
                                                value={last_name ? last_name : ''}
                                                onChange={(e)=>setLastName(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Label>
                            </Form.Group>
                            <Form.Label className="field">
                                Adresa
                                <Form.Control className="field_input" 
                                                required 
                                                type='text'
                                                value={address ? address : ''}
                                                onChange={(e)=>setAddress(e.target.value)}
                                >
                                </Form.Control>                                
                            </Form.Label>
                            <Form.Label className="field">
                                Tara
                                <Form.Control className="field_input" 
                                                required 
                                                type='text'
                                                value={country ? country : ''}
                                                onChange={(e)=>setCountry(e.target.value)}
                                
                                >
                                </Form.Control>                                
                            </Form.Label>
                            
                            <Form.Group className="fields fields--3">
                            <Form.Label className="field">
                                Cod Postal
                                <Form.Control className="field_input" 
                                                required 
                                                type='text'
                                                value={postal_code ? postal_code : ''}
                                                onChange={(e)=>setPostalCode(e.target.value)}
                                
                                >
                                </Form.Control>  
                            </Form.Label>
                            <Form.Label className="field">
                                Oras
                                <Form.Control className="field_input" 
                                                required 
                                                type='text'
                                                value={city ? city : ''}
                                                onChange={(e)=>setCity(e.target.value)}
                                
                                >
                                </Form.Control>  
                            </Form.Label>
                            <Form.Label className="field">
                                Judet
                                <Form.Control className="field_input" 
                                                required 
                                                type='text'
                                                value={county ? county : ''}
                                                onChange={(e)=>setCounty(e.target.value)}
                                
                                >
                                </Form.Control>  
                            </Form.Label>
                            </Form.Group>
                        </Form>
                        <hr/>
                        </div>

                    )}
                    {isShownForPickUpMethod && (
                        <Card className="pickup-method-card">
                            <Card.Body className="pickup-method-card-body">
                                <h6>Vei putea prelua coletul de la urmatoarea adresa:</h6>
                                <hr/>
                                <Row>
                                    <Col>
                                        <Card.Img classname='delivery-icon' src = '/images/pickup_icon.png' alt='Imagine livrare' style={{width:'90px', alignSelf: 'center'}}/>
                                    </Col>
                                    <Col>
                                        <Card.Body className="personal-address-card">
                                            <Row>
                                                <Col className="left-card">
                                                    <Card.Img classname='delivery-icon' src = '/images/profile-homepage.png' alt='Imagine profil'/>
                                                </Col>
                                                <Col className="right-card">
                                                    <h2 class="name">Mihaela Darau - Art Deco pARADis</h2>
                                                    <div class="personal-address">
                                                        <p class="personal-address-title">Adresa: </p>
                                                        <span class="personal-address-item">str. Rozelor, nr.45, Pecica, Arad</span>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    )}
                    <br/>                    
                    <h5 style={{color: 'green'}}>Modalitate de plata</h5>
                    
                    <Button className='button' variant='success'>
                            Continua
                    </Button>
            </Card>
        </div>
    )


}

export default ShippingScreen
