import React, { Component } from 'react';
import Search from './Search';

class Main extends Component {
  render() {
    return (
      <div data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
        <Search />
      </div>
    );
  }
}

export default Main;
