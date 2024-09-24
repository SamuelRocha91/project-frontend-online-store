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
        <div className="list-cards">
          { (cart && cart.length > 0)
            ? (
              <>
                <Link
                  className="btn btn-primary mb-3"
                  to="/checkout"
                >
                  Finalizar Compra
                </Link>
                <ul className="list-group">
                  {cart
                    .map(({ id, titleCart, thumbnailCart, priceCart, quantidade }) => (
                      <li
                        key={ id }
                        className={ 'list-group-item d-flex'
                                + 'justify - content - between align - items - center' }
                      >
                        <Card
                          isDetails={ false }
                          dataTestIdTitle="shopping-cart-product-name"
                          title={ titleCart }
                          thumbnail={ thumbnailCart }
                          price={ priceCart }
                        />
                        <div className="list-btns">
                          <p className="quantity-text">{ quantidade }</p>
                          <div>
                            <button
                              className="btn btn-outline-secondary"
                              type="button"
                              onClick={ () => this.increase(id) }
                            >
                              +
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary"
                              onClick={ () => this.decrease(id) }
                            >
                              -
                            </button>
                            <button
                              type="button"
                              className="btn btn-danger"
                              onClick={ () => this.delete(id) }
                            >
                              X
                            </button>
                          </div>
                        </div>
                      </li>))}
                </ul>
              </>)
            : (
              <p className="alert alert-warning text-center">
                Seu carrinho está vazio
              </p>)}
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
