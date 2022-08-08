import React from 'react'
import {Card} from 'react-bootstrap'
// import '../index.css'
import Rating from './Rating'
import {Link} from 'react-router-dom'

const Product= ({product}) => {
    return (
        <Card className="my-3 p-3 rounded" border="light" style={{ width: '18rem' }}>
            {/* create the link around the image to send the user to the product */}
            <Link to={`/produs/${product.id}`}>
                <Card.Img src ={product.image}/>
            </Link>
            {console.log(product.id)}
            <Card.Body>
                <Link to={`/produs/${product.id}`}>
                    <Card.Title as="div">
                        <strong className='product-name'>{product.product_name}</strong>
                    </Card.Title>
                </Link>

                <Card.Text as="div">
                    <div className='my-3'>
                        {/* {product.rating} from {product.numReviews} reviews */}
                        {/* Rating component with two props and the last prop is color*/}
                        <Rating value={product.rating} text={`${product.nr_reviews } reviews`} color={'#f8e825'}/>
                    </div>
                </Card.Text>

                <Card.Text as="h3">
                    {product.price} lei
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product
