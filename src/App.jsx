import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './components/Main';
import ShoppingCart from './components/ShoppingCart';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Main } />
        <Route path="/shoppincart" component={ ShoppingCart } />
      </Switch>
    );
  }
}
export default App;
