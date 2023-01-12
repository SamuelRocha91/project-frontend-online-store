import React, { Component } from 'react';
import propTypes from 'prop-types';
import Card from './Card';
import ButtonAddToCart from './ButtonAddToCart';

class Search extends Component {
  render() {
    const { products, handleClick, identifier, handleChange, query } = this.props;
    return (
      <div>
        <form>
          <input
            value={ query }
            data-testid="query-input"
            type="text"
            onChange={ handleChange }
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
                  id={ id }
                  title={ title }
                  thumbnail={ thumbnail }
                  price={ price }
                />
                <ButtonAddToCart
                  id={ id }
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
  handleChange: propTypes.func.isRequired,
  query: propTypes.string.isRequired,
};

export default Search;
