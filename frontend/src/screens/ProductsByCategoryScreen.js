import React, { useState, useEffect } from "react";
// import products from '../products'
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Messages from "../components/Messages";
import {useParams} from 'react-router-dom'

import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
import products from "../products";
import { useDispatch, useSelector } from "react-redux";
import { listProductsCategory } from "../actions/productActions";

function ProductsByCategoryScreen() {
    
  const {category} =  useParams();
  const dispatch = useDispatch();
  const productsCategoryList = useSelector((state) => state.productsCategoryList);

  const { error, loading, productsByCategory } = productsCategoryList;

  useEffect(() => {
    dispatch(listProductsCategory(category));
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

          {productsByCategory.map((prods) => (
            <Col key={prods.id} sm={12} md={6} lg={4} xl={3}>
              {console.log(prods.id)}
              <Product product={prods} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default ProductsByCategoryScreen;
