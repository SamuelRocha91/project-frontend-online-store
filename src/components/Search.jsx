import React, { Component } from 'react';
import propTypes from 'prop-types';
import Card from './Card';

class Search extends Component {
  state = {
    query: '',
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ query: value });
  };

  render() {
    const { products, handleClick, identifier } = this.props;
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
            onClick={ () => handleClick(identifier, query) }
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

Search.defaultProps = {
  identifier: undefined,
};

Search.propTypes = {
  products: propTypes.arrayOf(propTypes.string).isRequired,
  identifier: propTypes.string,
  handleClick: propTypes.func.isRequired,
};

export default Search;
