import React, { Component } from 'react';
import propTypes from 'prop-types';
import Card from './Card';
import '../style/Search.css';
import ButtonAddToCart from './ButtonAddToCart';

class Search extends Component {
  render() {
    const { products, handleClick, identifier, handleChange, query } = this.props;
    const isProductsNotEmpty = products.length > 0;
    return (
      <div className="div-search">
        <form className="form-search">
          <span className="spam-search">
            <input
              value={ query }
              data-testid="query-input"
              type="text"
              onChange={ handleChange }
            />
            <button
              className="img-btn"
              type="button"
              onClick={ () => handleClick(identifier, query) }
            >
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/search--v1.png"
                alt="Icone de lupa para pesquisar"
                className="img-btn"
              />
            </button>
          </span>
        </form>
        <ul className="ul-search">
          {isProductsNotEmpty
            ? products.map(({ title, thumbnail, price, id }) => (
              <li
                className="li-card"
                key={ id }
                data-testid="product"
              >
                <Card
                  isDetails={ false }
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
            : <p className="p-search">Nenhum produto foi encontrado</p>}
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
