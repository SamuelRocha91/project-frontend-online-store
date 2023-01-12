import React, { Component } from 'react';
import propTypes from 'prop-types';
import Card from './Card';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Search extends Component {
  state = {
    query: '',
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ query: value });
  };

  handleSubmit = () => {
    const { changeState } = this.props;
    const { query } = this.state;
    getProductsFromCategoryAndQuery(undefined, query)
      .then((response) => changeState(response.results));
  };

  render() {
    // const { categorie } = this.props;
    const { products } = this.props;
    const { query } = this.state;
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

Search.propTypes = {
  products: propTypes.shape(propTypes.string).isRequired,
  changeState: propTypes.func.isRequired,
};

export default Search;
