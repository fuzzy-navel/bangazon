import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Orders from '../Orders/Orders';
import EditOrder from '../Orders/EditOrder';
import SingleOrder from '../SingleOrder/SingleOrder';

const OrderRoutes = () => (
    <Switch>
        <Route exact path='/orders' component={Orders} />
        <Route path='/orders/editOrder' component={EditOrder} />
        <Route path='/orders/:id' component={SingleOrder} />
    </Switch>

)

export default OrderRoutes; 

