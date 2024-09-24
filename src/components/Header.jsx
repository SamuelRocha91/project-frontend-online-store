import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import '../style/Header.css';

const CART_KEY = 'shopping-cart';

class HeaderComponent extends Component {
  state = {
    total: 0,
  };

  componentDidMount() {
    const getItem = localStorage.getItem(CART_KEY);
    this.setState({
      total: JSON.parse(getItem)
        .reduce((acc, curr) => acc + Number(curr.quantidade), 0) || 0,
    });
  }

  render() {
    const { total } = this.state;

    return (
      <header className="bg-header">
        <span className="spam-header">
          <h1 className="h1-header">
            Front-End
          </h1>
          <h2 className="h2-header">
            online store
          </h2>
        </span>
        <Link to="/shoppingcart" className="cart-container">
          <img
            className="img-header"
            src="https://img.icons8.com/?size=100&id=9671&format=png&color=000000"
            alt="Icone de carrinho de compras"
          />
          <span className="span-total">{ total }</span>
        </Link>
      </header>
    );
  }
}

export default HeaderComponent;
