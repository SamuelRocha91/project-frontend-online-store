import React, { Component } from 'react';
import Card from '../components/Card';

class ShoppingCart extends Component {
  state = {
    cart: [],
  };

  componentDidMount() {
    this.verifyStorage();
  }

  verifyStorage = () => {
    const getItem = localStorage.getItem('shopping-cart');
    this.setState({
      cart: JSON.parse(getItem),
    });
  };

  render() {
    const { cart } = this.state;
    return (
      <div>
        { (cart && cart.length > 0)
          ? (
            <ul>
              { cart.map(({ id, titleCart, thumbnailCart, priceCart }) => (
                <li key={ id }>
                  <Card
                    isDetails={ false }
                    dataTestIdTitle="shopping-cart-product-name"
                    title={ titleCart }
                    thumbnail={ thumbnailCart }
                    price={ priceCart }
                  />
                  <p data-testid="shopping-cart-product-quantity">1</p>
                </li>))}
            </ul>)
          : (
            <p data-testid="shopping-cart-empty-message">
              Seu carrinho está vazio
            </p>)}
      </div>
    );
  }
}

export default ShoppingCart;
