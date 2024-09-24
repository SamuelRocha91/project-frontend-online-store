import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { connect } from 'react-redux';
import '../style/Header.css';
import PropTypes from 'prop-types';

class HeaderComponent extends Component {
  render() {
    const { cart } = this.props;
    const total = Array.isArray(cart)
      ? cart.reduce((acc, curr) => Number(acc) + Number(curr.quantidade), 0) : 0;

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

const mapStateToProps = (state) => ({
  cart: state.cart,
});

HeaderComponent.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      quantidade: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default connect(mapStateToProps)(HeaderComponent);
