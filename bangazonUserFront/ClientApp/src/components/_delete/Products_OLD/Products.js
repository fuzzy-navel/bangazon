import React from 'react';
import {Switch, Route} from 'react-router-dom';

import AddProduct from './AddProduct/AddProduct';
import AllProducts from './AllProducts/AllProducts';
import Product from './Product/Product';

import './Products.css';

const Products = () => (
  <Switch>
    <Route exact path='/products' component={AllProducts} />
    <Route path='/products/addproduct' component={AddProduct} />
    <Route path='/products/:id' component={Product} />
  </Switch>
)

export default Products;