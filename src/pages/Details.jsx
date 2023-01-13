import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { getProductById } from '../services/api';
import ButtonAddToCart from '../components/ButtonAddToCart';
import Card from '../components/Card';
import Form from '../components/Form';
import Assessments from '../components/Assessments';

class Details extends Component {
  state = {
    produto: {},
    havecomments: false,
    comment: '',
  };

  componentDidMount() {
    const { match: { params: { product } } } = this.props;
    getProductById(product).then((data) => this.setState({ produto: data }, () => {
      this.addComments();
    }));
  }

  addComments = () => {
    const { produto: { id } } = this.state;
    const userComments = JSON.parse(localStorage.getItem(id));
    if (!userComments) return;
    this.setState({ comment: userComments, havecomments: true });
  };

  render() {
    const { produto: { id, title, thumbnail, price },
      havecomments, comment } = this.state;
    return (
      <>
        <Card
          isDetails
          dataTestIdTitle="product-detail-name"
          id={ id }
          title={ title }
          thumbnail={ thumbnail }
          price={ price }
        />
        <ButtonAddToCart
          dataTestId="product-detail-add-to-cart"
          id={ id }
          title={ title }
          thumbnail={ thumbnail }
          price={ price }
        />
        <Link data-testid="shopping-cart-button" to="/shoppingcart"> Ir ao Carrinho</Link>
        <Form addComments={ this.addComments } id={ id } />
        {havecomments && comment.map((objeto, index) => (
          <Assessments key={ index } { ...objeto } />
        ))}
      </>
    );
  }
}

Details.propTypes = {
  match: propTypes.shape({
    params: propTypes.shape({
      product: propTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Details;
