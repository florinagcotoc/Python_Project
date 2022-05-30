import React, {useEffect} from 'react'
import "../index.css"
import {Link } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {Row, Col, ListGroup, Image, Button, Card, Form} from 'react-bootstrap'
import Messages from '../components/Messages'
import { addToCart } from '../actions/cartActions'
import {useParams} from 'react-router-dom'
import { useNavigate } from "react-router-dom";

function CartScreen() {
    const {id} =  useParams();
    const params = useParams();
    const quantity = Number(params?.qty?.split('=')[1]) || 1
    // dispatch this action only if there is a product id 
    const dispatch = useDispatch()

    const cart = useSelector(state =>state.cart)
    const {cartItems} = cart

    useEffect(() => {
        if(id){
            dispatch(addToCart(id, quantity))
        }
      }, [dispatch, id, quantity])
    
    const removeFromCart = () => {
        console.log('removing cart')
    }

    let navigate = useNavigate(); 
    const checkoutHandler = () => {
        let path = '/login?redirect=shipping'; 
        navigate(path);
    }

    return (
    <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <Row>
            <Col md={8}>
                <h2><i>Cos de cumparaturi</i></h2>
                {/* check for products in cart, if there are no products in cart display a message */}
                {cartItems.length === 0 ? (
                    <Messages variant='success'>
                        Cosul este gol! <Link to = '/produse/'>Mergi la produse</Link>
                    </Messages>
                ): (
                    <ListGroup variant='flush'>
                        {cartItems.map(item => (
                            <ListGroup.Item key={item.product}>
                                <Row>
                                    <Col md={2}>
                                        <Image src ={item.image} alt = {item.product_name} fluid rounded/>
                                    </Col>
                                    <Col md={3}>
                                        <Link to={`/produs/${item.product}`}>{item.product_name}</Link>
                                    </Col>
                                    <Col md={2}>
                                        {item.price} lei
                                    </Col>
                                    <Col md={3}>
                                        <Form.Control as ="select"
                                            value={item.qty}
                                            onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}>
                                            {
                                                [...Array(item.stock).keys()].map((x) => (
                                                    <option key={x+1} value= {x+1}>
                                                        {x + 1} {/*because the array starts with 0 */}
                                                    </option>
                                                ))
                                            }
                                        </Form.Control>
                                    </Col>
                                    <Col md={1}>
                                        <Button type='button' variant='light' onClick={()=>removeFromCart(item.product)}>
                                            <i className='fas fa-trash'></i>
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                )} 
            </Col>

            <Col md={4}>
                <Card>
                    <ListGroup variant='flush'>
                        {/*first item will be the subtotal  */}
                        <ListGroup.Item>
                            <h4>Subtotal: {cartItems.reduce((accumulator, item)=> accumulator + item.qty, 0)} produse</h4>
                            {cartItems.reduce((accumulator, item)=> accumulator + item.qty * item.price, 0).toFixed(2)} lei
                        </ListGroup.Item>
                    </ListGroup>

                    <ListGroup>
                        <Button className='btn btn-success mt-3'
                                type='button'
                                size="lg" 
                                disabled={cartItems.length === 0 }
                                onClick={checkoutHandler}
                        >
                            Finalizare comanda
                        </Button>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    </div>
    )
}

export default CartScreen