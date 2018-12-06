import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Orders from '../Orders/Orders';
import SingleOrder from '../SingleOrder/SingleOrder';
import AddOrder from '../Orders/AddOrder';

const OrderRoutes = () => (
    <Switch>
        <Route exact path='/orders' component={Orders} />
        <Route path='/orders/:id' component={SingleOrder} />
        <Route path='/orders' component={AddOrder} />
    </Switch>

)

export default OrderRoutes; 

