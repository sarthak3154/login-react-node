import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Router, Route, browserHistory} from 'react-router'

import logo from './logo.svg';
import './App.css';

//Importing components
import App from './components/App'
import Home from './components/Home'


class AppFlow extends Component {
  render() {
    return (
          <Router history={browserHistory}>
            <Route component={App}>
              <Route path='/' component={Home} />
            </Route>
          </Router>
    );
  }
}

export default AppFlow;
