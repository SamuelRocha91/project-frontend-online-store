import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

class Details extends Component {
  state = {
    produto: [],
  };

  componentDidMount() {
    const URL_BASE = 'https://api.mercadolibre.com/items/';
    const { match } = this.props;
    const { params } = match;
    const { product } = params;
    fetch(`${URL_BASE}${product}`)
      .then((response) => response.json())
      .then((data) => this.setState({ produto: data }));
  }

  render() {
    const { produto } = this.state;
    return (
      <div>
        <h1 data-testid="product-detail-name">
          { produto.title }
        </h1>
        <img
          data-testid="product-detail-image"
          src={ produto.thumbnail }
          alt={ `${produto.title}` }
        />
        <p data-testid="product-detail-price">{ produto.price }</p>
        <Link data-testid="shopping-cart-button" to="/shoppingcart"> Ir ao Carrinho</Link>
      </div>
    );
  }
}

Details.propTypes = {
  match: propTypes.shape({
    params: propTypes.shape({
      product: propTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Details;
