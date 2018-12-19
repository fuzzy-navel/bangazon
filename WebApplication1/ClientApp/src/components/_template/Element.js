import React from 'react';
import {Switch, Route} from 'react-router-dom';

import AddElement from './AddElement/AddElement';
import AllElements from './AllElements/AllElements';
import SingleElement from './SingleElement/SingleElement';

import './Element.css';

const Products = () => (
  <Switch>
    <Route exact path='/element' component={AllElements} />
    <Route path='/element/addelement' component={AddElement} />
    <Route path='/element/:id' component={SingleElement} />
  </Switch>
)

export default Element;