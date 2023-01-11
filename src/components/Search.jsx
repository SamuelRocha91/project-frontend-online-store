import React, { Component } from 'react';
import Card from './Card';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Search extends Component {
  state = {
    query: '',
    products: [],
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ query: value });
  };

  handleSubmit = () => {
    const { query } = this.state;
    getProductsFromCategoryAndQuery(undefined, query)
      .then((response) => this.setState(() => ({ products: response.results })));
  };

  render() {
    // const { categorie } = this.props;
    const { query, products } = this.state;
    return (
      <div>
        <form>
          <input
            value={ query }
            data-testid="query-input"
            type="text"
            onChange={ this.handleChange }
          />
          <button
            data-testid="query-button"
            type="button"
            onClick={ this.handleSubmit }
          >
            Pesquisar
          </button>
        </form>
        <ul>
          {products.length > 0
            ? products.map(({ title, thumbnail, price, id }) => (
              <li key={ id } data-testid="product">
                <Card
                  title={ title }
                  thumbnail={ thumbnail }
                  price={ price }
                />
              </li>))
            : <p>Nenhum produto foi encontrado</p>}
        </ul>
      </div>
    );
  }
}

export default Search;
