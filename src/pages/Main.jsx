import React, { Component } from 'react';
import { getCategories } from '../services/api';

class Main extends Component {
  state = {};

  componentDidMount() {
    getCategories().then((data) => this.setState({ categorie: data }));
  }

  render() {
    const { categorie } = this.state;
    return (
      <nav>
        {categorie && categorie.map(((categ) => (
          <button
            key={ categ.id }
            type="button"
            data-testid="category"
          >
            {categ.name}
          </button>
        )))}
        <div data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </div>
      </nav>
    );
  }
}
export default Main;
