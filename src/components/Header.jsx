import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/Header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <Link data-testid="shopping-cart-button" to="/shoppingcart"> Carrinho </Link>
        <spam id='logo'>
          <h1 className='header-content'>
            Front-End
          </h1>
          <h2 header-content>
            online store
          </h2>
        </spam>
      </header>
    );
  }
}

export default Header;