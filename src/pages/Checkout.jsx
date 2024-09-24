/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart, removeToCart } from '../redux/actions';

const CART_KEY = 'shopping-cart';

class Checkout extends Component {
  state = {
    fullname: '',
    email: '',
    cpf: '',
    phone: '',
    cep: '',
    address: '',
    pay: '',
    isInvalid: false,
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    let isInvalidAux = false;
    const { cart, isInvalid, ...fields } = this.state;
    Object.values(fields)
      .forEach((value) => {
        if (value === '') isInvalidAux = true;
      });
    this.setState({ isInvalid: isInvalidAux });
    if (!isInvalidAux) {
      localStorage.removeItem(CART_KEY);
      const { history } = this.props;
      history.push('/');
    }
  };

  render() {
    const {
      fullname,
      email,
      cpf,
      phone,
      cep,
      address,
      pay,
      isInvalid,
    } = this.state;
    const { cart } = this.props;

    const total = cart.reduce((acc, curr) => acc + Number(curr.priceCart), 0).toFixed(2);
    return (
      <div className="container my-4">
        <ul className="list-group">
          {cart.map(({ titleCart, idCart, quantidade, priceCart }) => (
            <li className="list-group-item" key={ idCart }>
              {`${titleCart} --> Quantidade de pedidos: ${quantidade} = R$ ${priceCart} `}
            </li>))}
        </ul>
        <p className="display-price">{` R$ ${total} `}</p>
        <form className="mt-4">
          <div className="mb-3">
            <label htmlFor="fullname" className="form-label">Nome:</label>
            <input
              type="text"
              className="form-control"
              id="fullname"
              name="fullname"
              value={ fullname }
              data-testid="checkout-fullname"
              onChange={ this.handleChange }
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={ email }
              data-testid="checkout-email"
              onChange={ this.handleChange }
            />
          </div>

          <div className="mb-3">
            <label htmlFor="cpf" className="form-label">CPF:</label>
            <input
              type="text"
              className="form-control"
              id="cpf"
              name="cpf"
              value={ cpf }
              data-testid="checkout-cpf"
              onChange={ this.handleChange }
            />
          </div>

          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Telefone:</label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              name="phone"
              value={ phone }
              data-testid="checkout-phone"
              onChange={ this.handleChange }
            />
          </div>

          <div className="mb-3">
            <label htmlFor="cep" className="form-label">CEP:</label>
            <input
              type="text"
              className="form-control"
              id="cep"
              name="cep"
              value={ cep }
              data-testid="checkout-cep"
              onChange={ this.handleChange }
            />
          </div>

          <div className="mb-3">
            <label htmlFor="address" className="form-label">Endereço:</label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              value={ address }
              data-testid="checkout-address"
              onChange={ this.handleChange }
            />
          </div>

          <fieldset className="mb-3">
            <legend>Método de Pagamento:</legend>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="pay"
                value="ticket"
                id="ticket"
                checked={ pay === 'ticket' }
                data-testid="ticket-payment"
                onChange={ this.handleChange }
              />
              <label className="form-check-label" htm="ticket">
                Boleto
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="pay"
                value="visa"
                id="visa"
                checked={ pay === 'visa' }
                data-testid="visa-payment"
                onChange={ this.handleChange }
              />
              <label className="form-check-label" htmlFor="visa">
                Visa
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="pay"
                value="master"
                id="master"
                checked={ pay === 'master' }
                data-testid="master-payment"
                onChange={ this.handleChange }
              />
              <label className="form-check-label" htmlFor="master">
                Master
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="pay"
                value="elo"
                id="elo"
                checked={ pay === 'elo' }
                data-testid="elo-payment"
                onChange={ this.handleChange }
              />
              <label className="form-check-label" htmlFor="elo">
                ELO
              </label>
            </div>
          </fieldset>

          <button
            type="button"
            className="btn btn-primary"
            onClick={ this.handleSubmit }
          >
            Comprar
          </button>

          {isInvalid && (
            <p className="text-danger mt-3" data-testid="error-msg">Campos inválidos</p>
          )}
        </form>
      </div>
    );
  }
}

Checkout.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = {
  addToCart,
  removeToCart,
};

Checkout.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      quantidade: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
