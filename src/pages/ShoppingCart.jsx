import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ButtonReturn from '../components/ButtonReturn';
import Card from '../components/Card';
import Header from '../components/Header';
import { removeToCart, updateCart } from '../redux/actions';

const CART_KEY = 'shopping-cart';

class ShoppingCart extends Component {
  state = {
    cart: [],
  };

  componentDidMount() {
    this.verifyStorage();
  }

  stateUpdate = () => {
    const { cart } = this.state;
    const { updateQuantityProduct } = this.props;
    updateQuantityProduct(cart);
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  };

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
      this.stateUpdate();
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
      this.stateUpdate();
    });
  };

  delete = (id) => {
    this.setState((prevState) => ({ cart: prevState.cart
      .filter((item) => (item.id !== id)),
    }), () => {
      const { cart } = this.state;
      const { deleteToCart } = this.props;
      deleteToCart(id);
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
                <ul className="ul-items">
                  {cart
                    .map(({ id, titleCart, thumbnailCart, priceCart, quantidade }) => (
                      <li
                        key={ id }
                        className="list-car-shop"
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

ShoppingCart.propTypes = {
  updateQuantityProduct: PropTypes.func.isRequired,
  deleteToCart: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
  deleteToCart: (id) => dispatch(removeToCart(id)),
  updateQuantityProduct: (array) => dispatch(updateCart(array)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
