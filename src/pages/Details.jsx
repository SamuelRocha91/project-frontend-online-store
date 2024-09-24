import React, { Component } from 'react';
import propTypes from 'prop-types';
import { getProductById } from '../services/api';
import ButtonAddToCart from '../components/ButtonAddToCart';
import Card from '../components/Card';
import Form from '../components/Form';
import Assessments from '../components/Assessments';
import Header from '../components/Header';
import '../style/Details.css';
import ButtonReturn from '../components/ButtonReturn';

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
        <Header />
        <ButtonReturn />
        <ul className="ul-search">
          <li className="li-card-two">
            <Card
              isDetails
              id={ id }
              title={ title }
              thumbnail={ thumbnail }
              price={ price }
            />
          </li>
        </ul>
        <ButtonAddToCart
          className="btn-card-details"
          id={ id }
          title={ title }
          thumbnail={ thumbnail }
          price={ price }
        />
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
