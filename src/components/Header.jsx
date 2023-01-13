import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/Header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <spam className="spam-header">
          <h1 className="h1-header">
            Front-End
          </h1>
          <h2 className="h2-header">
            online store
          </h2>
        </spam>
        <Link data-testid="shopping-cart-button" to="/shoppingcart">
          <img
            className="img-header"
            src="https://img.icons8.com/pastel-glyph/64/e2e2e2/shopping-cart--v2.png"
            alt="Icone de carrinho de compras"
          />
        </Link>
      </header>
    );
  }
}

export default Header;
