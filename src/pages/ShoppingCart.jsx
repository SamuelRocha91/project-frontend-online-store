import React, { Component } from 'react';
import Card from '../components/Card';

class ShoppingCart extends Component {
  state = {}

  componentDidMount() {
    this.verifyStorage()
  }

  verifyStorage = () => {
    console.log('Verificando')
    const getItem = localStorage.getItem('shopping-cart')
    this.setState({
      cart: JSON.parse(getItem)
    })
  }

  render() {
    const { cart } = this.state;
    console.log(cart)
    return (
      <div>
        { cart ? 
          <ul>
            <li>
              <Card
                title={ cart[0].titleCart }
                thumbnail={ cart[0].thumbnailCart }
                price={ cart[0].priceCart }
                />
              </li>
              {/* { cart.map(({ titleCart, thumbnailCart, priceCart }) => {
                <li>
                  <Card
                  title={ titleCart }
                  thumbnail={ thumbnailCart }
                  price={ priceCart }
                  />
                </li>
              })} */}
          </ul>
        : <p data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </p>}
        
      </div>
    );
  }
}

export default ShoppingCart;
