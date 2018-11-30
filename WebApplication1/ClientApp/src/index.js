import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SingleCustomer from './components/SingleCustomer/SingleCustomer';
import Customers from './components/Customers/Customers';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
