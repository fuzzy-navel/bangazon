import React from 'react';
import {Switch, Route} from 'react-router-dom';

import AllProducts from './AllProducts/AllProducts';
import SingleProduct from './SingleProduct/SingleProduct';

import './Product.css';

const Product = () => (
  <Switch>
    <Route exact path='products' component={AllProducts} />
    <Route path='products/:id' component={SingleProduct} />
  </Switch>
)

export default Product;