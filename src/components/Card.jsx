import PropTypes from 'prop-types';
import React, { Component } from 'react';
import '../style/Card.css';
import { Link } from 'react-router-dom';

class Card extends Component {
  render() {
    const { title, thumbnail, price, id, isDetails } = this.props;
    return (
      <div className="d-flex flex-column align-items-center gap-2 justify-content-center">
        <img
          className="img-thumbnail mr-3"
          data-testid="product-detail-image"
          src={ thumbnail }
          alt={ title }
        />
        <h1
          className="form-control w-60 text-justify"
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
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Card;
