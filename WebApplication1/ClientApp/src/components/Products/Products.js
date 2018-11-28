import React from 'react';
import {Switch, Route} from 'react-router-dom';
import AllProducts from './AllProducts/AllProducts';
import Product from './Product/Product';

import './Products.css';

const Products = () => (
  <Switch>
    <Route exact path='/products' component={AllProducts} />
    <Route path='/products/:id' component={Product} /> // single product
  </Switch>
)

export default Products;