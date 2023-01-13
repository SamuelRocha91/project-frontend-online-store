import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/Header.css';

class Header extends Component {
  render() {
    return (
      <header>          
        <spam className="header-content">
          <h1 className='header-content'>
            Front-End
          </h1>
          <h2 className="header-content">
            online store
          </h2>
        </spam>
        <Link data-testid="shopping-cart-button" to="/shoppingcart">
          <img
            className="header-content"
            src="https://img.icons8.com/pastel-glyph/64/e2e2e2/shopping-cart--v2.png"/>
          </Link>
      </header>
    );
  }
}

export default Header;