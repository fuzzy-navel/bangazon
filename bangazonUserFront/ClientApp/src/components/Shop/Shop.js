import React from "react";
import { Switch, Route } from "react-router-dom";

import ProductsAndCategories from "./ProductsAndCategories/ProductsAndCategories";
import SingleProduct from "./SingleProduct/SingleProduct";

import "./Shop.css";

const Shop = () => (
  <Switch>
    <Route exact path="/shop" component={ProductsAndCategories} />
    <Route path="/shop/:id" component={SingleProduct} />
  </Switch>
);

export default Shop;
