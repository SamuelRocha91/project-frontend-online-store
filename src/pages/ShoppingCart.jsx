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
    console.log('Verificando');
    const getItem = localStorage.getItem('shopping-cart');
    this.setState({
      cart: JSON.parse(getItem),
    });
  };

  render() {
    const { cart } = this.state;
    console.log(cart);
    return (
      <div>
        { cart.length > 0
          ? (
            <ul>
              { cart.map(({ id, titleCart, thumbnailCart, priceCart }) => (
                <li key={ id }>
                  <Card
                    title={ titleCart }
                    thumbnail={ thumbnailCart }
                    price={ priceCart }
                  />
                  <p data-testid="shopping-cart-product-quantity">0</p>
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
