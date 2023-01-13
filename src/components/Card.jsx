import PropTypes from 'prop-types';
import React, { Component } from 'react';
import '../style/Card.css';
import { Link } from 'react-router-dom';

class Card extends Component {
  render() {
    const { title, thumbnail, price, id, dataTestIdTitle, isDetails } = this.props;
    return (
      <div className="div-card">
        <img data-testid="product-detail-image" src={ thumbnail } alt={ title } />
        <h1
          className="h1-card"
          data-testid={ dataTestIdTitle }
        >
          { title }
        </h1>
        <h2
          className="h2-card"
          data-testid="product-detail-price"
        >
          { `R$ ${price}` }
        </h2>
        { !isDetails
          && (
            <Link
              className="link-details"
              to={ `/details/${id}` }
              data-testid="product-detail-link"
            >
              saber mais
            </Link>)}
      </div>
    );
  }
}

Card.propTypes = {
  isDetails: PropTypes.bool.isRequired,
  dataTestIdTitle: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Card;
