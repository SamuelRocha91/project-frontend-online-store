import PropTypes from 'prop-types';
import React, { Component } from 'react';

class ButtonAddToCart extends Component {
  state = {};

  componentDidMount() {
    this.verifyStorage;
  }

  handleClick = () => {
    const { title, thumbnail, price } = this.props;
    this.setState({
      Item: {
        titleCart: title,
        thumbnailCart: thumbnail,
        priceCart: price,
      }
    }, this.saveItem)
  }

  saveItem = () => {
    const { Item } = this.state
    const getItem = localStorage.getItem('shopping-cart')
    console.log(Item)
    console.log(getItem)
    // this.setState({
    //   Item: [...Item, getItem]
    // }) 
    if(getItem){
      const Items = [...Item, ]
      localStorage.setItem('shopping-cart', `${JSON.stringify(Items)}`)
    }
    localStorage.setItem('shopping-cart', `${JSON.stringify([Item])}`)

    // const { Item } = this.state
    // const getItem = localStorage.getItem('shopping-cart')
    // const Items = [getItem, Item]
    // localStorage.setItem('shopping-cart', `[${JSON.stringify(Items)}`)

  }
  

  render() {
    return (
      <button
        type="button"
        data-testid="product-add-to-cart"
        onClick={ this.handleClick }
      >
        Adicionar ao carrinho
      </button>
    );
  }
}

ButtonAddToCart.propTypes = {
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ButtonAddToCart;
