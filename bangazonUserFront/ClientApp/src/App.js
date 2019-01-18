import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import  AllPaymentTypes  from './components/PaymentType/AllPaymentTypes/AllPaymentTypes';
import SinglePaymentType from './components/PaymentType/SinglePaymentType/SinglePaymentType';
import AddPayment from './components/PaymentType/AddPaymentType/AddPaymentType';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navibar from './components/Navibar/Navibar';

export default class App extends Component {
  //displayName = App.name

  render() {
    return (
        <Layout>
            <Route component={AllPaymentTypes} />
            <Route component={SinglePaymentType} />
            <Route component={AddPayment} />
      </Layout>
      //return (
      //    <BrowserRouter>
      //        <div>
      //            <Navibar />
      //            <div className="container">
      //                <div className="row">
      //                    <Switch>
      //                    </Switch>
      //                </div>
      //            </div>
      //        </div>
      //    </BrowserRouter>
    );
  }
}
