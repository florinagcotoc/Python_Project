import React , {useState, useEffect} from 'react'
import "../index.css"
// import {Link} from 'react-router-dom'
import Rating from '../components/Rating'
// import Product from '../components/Product'
// import products from '../products'
import {useParams} from 'react-router-dom'
import {Row,Col, Image, ListGroup, Card, Button, Form} from 'react-bootstrap'
// import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Messages from '../components/Messages'
import { listProductDetails } from '../actions/productActions'
import { useNavigate } from "react-router-dom";

function DetailProdScreen(history) {
  const [qty, setQty] = useState(1)
  const {id} =  useParams();
  const dispatch = useDispatch()
  const productDetails = useSelector(state => state.productDetails)
  const {loading, error, product} = productDetails
  
  useEffect(() => {
    dispatch(listProductDetails(id))
  }, [dispatch])

  let navigate = useNavigate(); 
  const addToCartHandler = () => {
    let path = `/cos-cumparaturi/${id}/qty=${qty}`; 
    navigate(path);
  }
  
  return (
    <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        { loading ?
            <Loader/>
            : error 
              ? <Messages variant='danger'>{error}</Messages>
            : (
                <Row>
                  <Col>
                    <Image className="product-photo" src={product.image} alt={product.product_name} fluid/>
                  </Col>
                  <Col>
                    <ListGroup className="product-detail" variant="flush">
                      <ListGroup.Item>
                        <h3>{product.product_name}</h3>
                        {product.description}
                      </ListGroup.Item>

                      <ListGroup.Item>
                              <Row>
                                <Col>
                                  Status:
                                </Col>
                                <Col>
                                  {product.stock> 0 ? 'In Stoc': 'Epuizat'}
                                </Col>
                              </Row>
                      </ListGroup.Item>

                      {product.stock > 0 && (
                        <ListGroup.Item>
                          <Row>
                            <Col>Cantitate</Col>
                            <Col xs="auto" className="my-1">
                              <Form.Control as ="select"
                                            value={qty}
                                            onChange={(e) => setQty(e.target.value)}
                              >
                                {/* the stock will be turned into an array, map through the array and output each option */}
                                {/* create an array and with an array constructor I will create an array out of that stock */}

                                {
                                  [...Array(product.stock).keys()].map((x) => (
                                    <option key={x+1} value= {x+1}>
                                      {x + 1} {/*because the array starts with 0 */}
                                    </option>
                                  ) )
                                }
                              </Form.Control>
                            </Col>
                          </Row>
                
                        </ListGroup.Item>
                      )}

                      <ListGroup.Item>
                        <Row>
                          <Col>
                            <b><i>Pret: {product.price} lei</i></b>
                          </Col>
                          <Col>
                            <Button onClick={addToCartHandler} className="btn btn-success" disabled={product.stock == 0} type="button" > Adauga in cos</Button>
                          </Col>
                        </Row>
                      </ListGroup.Item>

                      <ListGroup.Item>
                        <Rating value={product.rating}  text={`${product.nr_reviews} reviews`} color = {'#f8e825'}/>
                      </ListGroup.Item>

                    </ListGroup>
                  </Col>
              </Row>
            )
        }
        
    </div>
  )
}

export default DetailProdScreen
