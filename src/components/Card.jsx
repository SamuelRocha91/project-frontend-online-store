import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Card extends Component {
  render() {
    const { title, thumbnail, price, id, dataTestIdTitle, isDetails } = this.props;
    return (
      <>
        { !isDetails
          && (
            <Link
              to={ `/details/${id}` }
              data-testid="product-detail-link"
            >
              Detalhes
            </Link>)}
        <h2 data-testid={ dataTestIdTitle }>{ title }</h2>
        <img data-testid="product-detail-image" src={ thumbnail } alt={ title } />
        <p data-testid="product-detail-price">{ price }</p>
      </>
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
