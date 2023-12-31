import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ButtonReturn from '../components/ButtonReturn';
import Card from '../components/Card';
import Header from '../components/Header';

const CART_KEY = 'shopping-cart';

class ShoppingCart extends Component {
  state = {
    cart: [],
  };

  componentDidMount() {
    this.verifyStorage();
  }

  verifyStorage = () => {
    const getItem = localStorage.getItem(CART_KEY);
    this.setState({
      cart: JSON.parse(getItem),
    });
  };

  increase = (id) => {
    this.setState((prevState) => ({ cart: prevState.cart.map((item) => {
      if (item.id === id) {
        return { quantidade: item.quantidade + 1,
          priceCart: (item.priceCart / item.quantidade) * (item.quantidade + 1),
          thumbnailCart: item.thumbnailCart,
          titleCart: item.titleCart,
          id: item.id };
      }
      return item;
    }),
    }), () => {
      const { cart } = this.state;
      localStorage.setItem(CART_KEY, JSON.stringify(cart));
    });
  };

  decrease = (id) => {
    this.setState((prevState) => ({ cart: prevState.cart.map((item) => {
      if (item.id === id) {
        return { quantidade: item.quantidade > 1 ? item.quantidade - 1 : 1,
          priceCart: (item.priceCart / item.quantidade) * (item.quantidade - 1),
          thumbnailCart: item.thumbnailCart,
          titleCart: item.titleCart,
          id: item.id };
      }
      return item;
    }),
    }), () => {
      const { cart } = this.state;
      localStorage.setItem(CART_KEY, JSON.stringify(cart));
    });
  };

  delete = (id) => {
    this.setState((prevState) => ({ cart: prevState.cart
      .filter((item) => (item.id !== id)),
    }), () => {
      const { cart } = this.state;
      localStorage.setItem(CART_KEY, JSON.stringify(cart));
    });
  };

  render() {
    const { cart } = this.state;
    return (
      <div>
        <Header />
        <ButtonReturn />
        { (cart && cart.length > 0)
          ? (
            <>
              <Link data-testid="checkout-products" to="/checkout">Finalizar Compra</Link>
              <ul>
                { cart.map(({ id, titleCart, thumbnailCart, priceCart, quantidade }) => (
                  <li key={ id }>
                    <Card
                      isDetails={ false }
                      dataTestIdTitle="shopping-cart-product-name"
                      title={ titleCart }
                      thumbnail={ thumbnailCart }
                      price={ priceCart }
                    />
                    <p data-testid="shopping-cart-product-quantity">{ quantidade }</p>
                    <button
                      data-testid="product-increase-quantity"
                      type="button"
                      onClick={ () => this.increase(id) }
                    >
                      +
                    </button>
                    <button
                      type="button"
                      data-testid="product-decrease-quantity"
                      onClick={ () => this.decrease(id) }
                    >
                      -
                    </button>
                    <button
                      type="button"
                      data-testid="remove-product"
                      onClick={ () => this.delete(id) }
                    >
                      X
                    </button>
                  </li>))}
              </ul>
            </>)
          : (
            <p data-testid="shopping-cart-empty-message">
              Seu carrinho está vazio
            </p>)}
      </div>
    );
  }
}

export default ShoppingCart;
