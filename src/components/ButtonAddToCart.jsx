import PropTypes from 'prop-types';
import React, { Component } from 'react';

const CART_KEY = 'shopping-cart';

class ButtonAddToCart extends Component {
  state = {
    item: {},
  };

  removeItem = (id) => {
    const storageItems = JSON.parse(localStorage.getItem(CART_KEY));
    const filteredItems = storageItems.filter((item) => item.idCart !== id);
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
    const storageItems = JSON.parse(localStorage.getItem(CART_KEY));
    if (storageItems) {
      const items = [...storageItems, item];
      localStorage.setItem(CART_KEY, `${JSON.stringify(items)}`);
    } else {
      localStorage.setItem(CART_KEY, `${JSON.stringify([item])}`);
    }
  };

  render() {
    const getItem = JSON.parse(localStorage.getItem(CART_KEY)) || [];
    const { id } = this.props;
    const isProductInCarSHoping = getItem.find((item) => item.idCart === id);

    return (
      <button
        className="button-card"
        type="button"
        onClick={ !isProductInCarSHoping ? this.handleClick : this.removeItem(id) }
      >
        {!isProductInCarSHoping ? 'Adicionar' : 'Remover'}
      </button>
    );
  }
}

ButtonAddToCart.propTypes = {
  id: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ButtonAddToCart;
