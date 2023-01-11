import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Main } />
      </Switch>
    );
  }
}
export default App;
