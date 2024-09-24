import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart, removeToCart } from '../redux/actions';

const CART_KEY = 'shopping-cart';

class ButtonAddToCart extends Component {
  state = {
    item: {},
  };

  removeItem = (id) => {
    const storageItems = localStorage.getItem(CART_KEY) || '[]';
    const parsedSTorage = JSON.parse(storageItems);
    const filteredItems = parsedSTorage.filter((item) => item.idCart !== id);
    const { deleteToCart } = this.props;
    deleteToCart(id);
    localStorage.setItem(CART_KEY, JSON.stringify(filteredItems));
  };

  handleClick = () => {
    const { title, thumbnail, price, id } = this.props;
    this.setState({
      item: {
        idCart: id,
        titleCart: title,
        thumbnailCart: thumbnail,
        priceCart: price,
        id,
        quantidade: 1,
      },
    }, this.saveItem);
  };

  saveItem = () => {
    const { item } = this.state;
    const { insertToCart } = this.props;
    insertToCart([item]);
    const storageItems = JSON.parse(localStorage.getItem(CART_KEY));
    if (storageItems) {
      const items = [...storageItems, item];
      localStorage.setItem(CART_KEY, `${JSON.stringify(items)}`);
    } else {
      localStorage.setItem(CART_KEY, `${JSON.stringify([item])}`);
    }
  };

  render() {
    const { id, cart, className } = this.props;
    const isProductInCarSHoping = cart.find((item) => item.idCart === id);

    return (
      <button
        className={ `button-card ${className}` }
        type="button"
        onClick={ !isProductInCarSHoping ? this.handleClick : () => this.removeItem(id) }
      >
        {!isProductInCarSHoping ? 'Adicionar' : 'Remover'}
      </button>
    );
  }
}

ButtonAddToCart.defaultProps = {
  className: '',
};

ButtonAddToCart.propTypes = {
  id: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      idCart: PropTypes.string.isRequired,
      quantidade: PropTypes.number.isRequired,
    }),
  ).isRequired,
  className: PropTypes.string,
  insertToCart: PropTypes.func.isRequired,
  deleteToCart: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
  insertToCart: (item) => dispatch(addToCart(item)),
  deleteToCart: (id) => dispatch(removeToCart(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonAddToCart);
