import React, { Component } from 'react';
import propTypes from 'prop-types';
import Card from './Card';
import '../style/Search.css'
import ButtonAddToCart from './ButtonAddToCart';

class Search extends Component {
  render() {
    const { products, handleClick, identifier, handleChange, query } = this.props;
    const isProductsNotEmpty = products.length > 0;
    return (
      <div className="search">
        <form className="search">
          <spam className="search">
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
            </button>
          </spam>
        </form>
        <ul className="search">
          {isProductsNotEmpty
            ? products.map(({ title, thumbnail, price, id }) => (
              <li key={ id } data-testid="product">
                <Card
                  isDetails={ false }
                  id={ id }
                  title={ title }
                  thumbnail={ thumbnail }
                  price={ price }
                />
                <ButtonAddToCart
                  dataTestId="product-add-to-cart"
                  id={ id }
                  title={ title }
                  thumbnail={ thumbnail }
                  price={ price }
                />
              </li>))
            : <p className="search">Nenhum produto foi encontrado</p>}
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
