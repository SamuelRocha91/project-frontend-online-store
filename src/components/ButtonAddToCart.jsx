import PropTypes from 'prop-types';
import React, { Component } from 'react';

const CART_KEY = 'shopping-cart';

class ButtonAddToCart extends Component {
  state = {
    item: {},
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
    const { dataTestId } = this.props;
    return (
      <button
        className="button-card"
        type="button"
        data-testid={ dataTestId }
        onClick={ this.handleClick }
      >
        COMPRAR
      </button>
    );
  }
}

ButtonAddToCart.propTypes = {
  id: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
};

export default ButtonAddToCart;
