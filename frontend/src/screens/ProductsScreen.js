import React, { useState, useEffect } from "react";
// import products from '../products'
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Messages from "../components/Messages";

import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
// import products from "../products";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";

function ProductsScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);

  const { error, loading, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      {loading ? (
        <Loader />
      ) : error ? (
        <Messages variant="danger">{error}</Messages>
      ) : (
        <Row>
          {/* on each iteration, create a new column
          the grid system has 12 columns
          if the screen is small, we want the column to be full with  */}

          {products.map((product) => (
            <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default ProductsScreen;
