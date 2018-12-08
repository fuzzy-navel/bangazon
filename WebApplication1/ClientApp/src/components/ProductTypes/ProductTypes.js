import React from 'react';
import {Switch, Route} from 'react-router-dom';

import AddProdType from './AddProdType/AddProdType';
import AllProdTypes from './AllProdTypes/AllProdTypes';
import ProdType from './ProdType/ProdType';

const ProductTypes = () => (
  <Switch>
    <Route exact path='/producttypes' component={AllProdTypes} />
    <Route path='/producttypes/addproducttype' component={AddProdType} />
    <Route path='/producttypes/:id' component={ProdType} />
  </Switch>
)

export default ProductTypes;