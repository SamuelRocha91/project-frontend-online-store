import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { getProductById } from '../services/api';
import ButtonAddToCart from '../components/ButtonAddToCart';
import Card from '../components/Card';

class Details extends Component {
  state = {
    produto: {},
  };

  componentDidMount() {
    const { match: { params: { product } } } = this.props;
    getProductById(product).then((data) => this.setState({ produto: data }));
  }

  render() {
    const { produto: { id, title, thumbnail, price } } = this.state;
    return (
      <>
        <Card
          isDetails
          dataTestIdTitle="product-detail-name"
          id={ id }
          title={ title }
          thumbnail={ thumbnail }
          price={ price }
        />
        <ButtonAddToCart
          dataTestId="product-detail-add-to-cart"
          id={ id }
          title={ title }
          thumbnail={ thumbnail }
          price={ price }
        />
        <Link data-testid="shopping-cart-button" to="/shoppingcart"> Ir ao Carrinho</Link>
      </>
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