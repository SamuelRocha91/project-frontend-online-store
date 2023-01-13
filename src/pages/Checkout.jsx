import PropTypes from 'prop-types';
import React, { Component } from 'react';

const CART_KEY = 'shopping-cart';

class Checkout extends Component {
  state = {
    cart: [],
    fullname: '',
    email: '',
    cpf: '',
    phone: '',
    cep: '',
    address: '',
    pay: '',
    isInvalid: false,
  };

  componentDidMount() {
    this.verifyStorage();
  }

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

  verifyStorage = () => {
    const getItem = localStorage.getItem(CART_KEY);
    this.setState({
      cart: JSON.parse(getItem),
    });
  };

  render() {
    const {
      cart,
      fullname,
      email,
      cpf,
      phone,
      cep,
      address,
      pay,
      isInvalid,
    } = this.state;

    return (
      <div>
        <ul>
          { cart.map(({ titleCart, idCart }) => (
            <li data-testid="checkout-products" key={ idCart }>{ titleCart }</li>)) }
        </ul>
        <form>
          <label htmlFor="fullname">
            Nome:
            <input
              type="text"
              id="fullname"
              name="fullname"
              value={ fullname }
              data-testid="checkout-fullname"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="email">
            Email:
            <input
              type="text"
              id="email"
              name="email"
              value={ email }
              data-testid="checkout-email"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="cpf">
            CPF:
            <input
              type="text"
              id="cpf"
              name="cpf"
              value={ cpf }
              data-testid="checkout-cpf"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="phone">
            Telefone:
            <input
              type="text"
              id="phone"
              name="phone"
              value={ phone }
              data-testid="checkout-phone"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="cep">
            CEP:
            <input
              type="text"
              id="cep"
              name="cep"
              value={ cep }
              data-testid="checkout-cep"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="address">
            Endereço:
            <input
              type="text"
              id="address"
              name="address"
              value={ address }
              data-testid="checkout-address"
              onChange={ this.handleChange }
            />
          </label>
          <fieldset>
            <label htmlFor="ticket">
              Boleto:
              <input
                type="radio"
                name="pay"
                value="ticket"
                id="ticket"
                checked={ pay === 'ticket' }
                data-testid="ticket-payment"
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="visa">
              Visa:
              <input
                type="radio"
                name="pay"
                value="visa"
                id="visa"
                checked={ pay === 'visa' }
                data-testid="visa-payment"
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="master">
              Master:
              <input
                type="radio"
                name="pay"
                value="master"
                id="master"
                checked={ pay === 'master' }
                data-testid="master-payment"
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="elo">
              ELO:
              <input
                type="radio"
                name="pay"
                value="elo"
                id="elo"
                checked={ pay === 'elo' }
                data-testid="elo-payment"
                onChange={ this.handleChange }
              />
            </label>
          </fieldset>
          <button
            type="button"
            data-testid="checkout-btn"
            onClick={ this.handleSubmit }
          >
            Comprar
          </button>
        </form>
        { isInvalid && (<p data-testid="error-msg">Campos inválidos</p>) }
      </div>
    );
  }
}

Checkout.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Checkout;
